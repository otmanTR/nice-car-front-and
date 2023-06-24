import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {

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
      })
      .addCase(addCar.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeded',
        newStatus: payload,
      }));

    builder
      .addCase(deleteCar.fulfilled, (state, { payload }) => ({
        ...state,
        status: 'succeded',
        newStatus: payload,
      }));
  },

});

export const { carsFilter } = carsSlice.actions;
export default carsSlice.reducer;
