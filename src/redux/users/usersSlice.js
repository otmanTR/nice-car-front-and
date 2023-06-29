import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  users: [],
};

const url = 'https://nice-car-back-and.onrender.com/api/v1/users';
export const getUser = createAsyncThunk('getUser', async () => {
  const response = await axios.get(url);
  const userData = response.data;
  console.log('userherre', userData);
  return userData;
});

export const createUser = createAsyncThunk('createUser', async (newUser) => {
  const response = await axios.post(url, newUser);
  return response.data;
});

export const loginUser = createAsyncThunk('users/loginUser', async (credentials) => {
  try {
    const response = await axios.post(`${url}/login`, credentials);
    const userData = response.data;
    return userData;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
});

export const logoutUser = createAsyncThunk('users/logoutUser', async () => null);

export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getUser.fulfilled, (state, action) => {
        state.users = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loggedInUser = action.payload;
        state.error = null;
        state.successMessage = 'Login successful!';
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.error = action.error.message;
        state.successMessage = null;
      })
      .addCase(createUser.fulfilled, (state, action) => {
        state.users.push(action.payload);
        state.successMessage = 'User created successfully!';
      });
  },
});
export const { usersFilter } = usersSlice.actions;
export default usersSlice.reducer;
