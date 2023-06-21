import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {

};

export const getCars = createAsyncThunk('getCars', async () => {
  const response = await axios.get('http://127.0.0.1:3000/api/v1/cars');
  const carData = response.data;
  const cars = [];
  Object.keys(carData).forEach((key) => {
    const car = carData[key];
    cars[car.id] = {
      id: car.id,
      name: car.name,
      image: car.image,
      model: car.model,
      price: car.price,
    };
  });
  return cars;
});
export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.cars = action.payload;
      });
  },

});

export const { carsFilter } = carsSlice.actions;
export default carsSlice.reducer;
