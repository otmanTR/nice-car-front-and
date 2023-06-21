import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const ADD_CAR = 'car-rental/car/ADD';

export const getCars = createAsyncThunk('getCars', async () => {

    const response = await axios.get('http://127.0.0.1:3000/api/v1/cars');
    const car = Object.keys(response.data).map((key) => ({
      id: response.data[key].id,
      name: response.data[key].name,
      image: response.data[key].image,
      model: response.data[key].model,
      price: response.data[key].price,
    }));
    return car;
});

const initialState = {
 
};
// Method AddCar
export const addCar = createAsyncThunk(ADD_CAR, async (car, thunkAPI) => {
  const API_URL = `http://127.0.0.1:3000/api/v1/cars`;
  const token = localStorage.getItem('token');
  const requestOptions = {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    return await axios.post(API_URL, car, requestOptions);
  } catch (err) {
    return thunkAPI.rejectWithValue(err.response.data.error);
  }
});


export const carsSlice = createSlice({
  name: 'cars',
  initialState: {
    isLoading: false,
    success: false,
    error: '',
    list: [],
    car: null,
    response: null,
  },
  reducers: {
    resetErrors: (state) => ({
      ...state,
      error: '',
      isLoading: false,
      success: false,
      response: null,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.car = action.payload;
      });
  },

});

 // Add Car

 builder.addCase(addCar.pending, (state) => ({
  ...state,
  isLoading: true,
  error: '',
}));

builder.addCase(addCar.fulfilled, (state, action) => ({
  ...state,
  isLoading: false,
  success: true,
  response: action.payload.data.data,
}));

builder.addCase(addCar.rejected, (state, action) => ({
  ...state,
  isLoading: false,
  errors: action.payload.data.errors,
}));


export const { carsFilter } = carsSlice.actions;
export default carsSlice.reducer;
