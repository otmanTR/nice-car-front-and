import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cars: [],
};
const url = 'https://nice-car-back-and.onrender.com/api/v1/cars';
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

export const addCar = createAsyncThunk('addCar', async (newCar) => {
  try {
    const response = await axios.post(url, newCar);
    return response.data;
  } catch (error) {
    return error.message;
  }
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
      .addCase(addCar.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeded',
        newStatus: payload,
      }))
      .addCase(deleteCar.fulfilled, (state, action) => {
        const index = state.cars.findIndex((car) => car.id === action.payload);
        if (index !== -1) {
          state.cars.splice(index, 1);
        }
      });
  },
});
export const { carsFilter } = carsSlice.actions;
export default carsSlice.reducer;
