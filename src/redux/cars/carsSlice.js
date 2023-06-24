import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cars: [],
};
const url = 'http://127.0.0.1:3000/api/v1/cars';
export const getCars = createAsyncThunk('getCars', async () => {
  const response = await axios.get(url);
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

export const deleteCar = createAsyncThunk('deleteCar', async (id) => {
  try {
    const response = await axios.delete(`${url}/${id}`);
    return response.data;
  } catch (error) {
    return error.message;
  }
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
        state.cars = state.cars.filter((car) => car !== undefined);
      })
      .addCase(deleteCar.fulfilled, (state, action) => {
        // Find the index of the deleted car in the state
        const index = state.cars.findIndex((car) => car.id === action.payload);
        if (index !== -1) {
          // Remove the car from the state by its index
          state.cars.splice(index, 1);
        }
      });
  },
});
export const { carsFilter } = carsSlice.actions;
export default carsSlice.reducer;
