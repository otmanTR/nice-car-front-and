import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

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

export const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCars.fulfilled, (state, action) => {
        state.car = action.payload;
      });
  },

});

export const { carsFilter } = carsSlice.actions;
export default carsSlice.reducer;
