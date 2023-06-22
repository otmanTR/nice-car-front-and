import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {

};

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addCase(deleteCar.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeded',
        newStatus: payload,
      }));
  },

});

export const { carsFilter } = carsSlice.actions;
export default carsSlice.reducer;
