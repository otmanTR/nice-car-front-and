import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  reservations: [],
};
const url = 'https://nice-car-back-and.onrender.com/api/v1/reservations';
export const getReservations = createAsyncThunk('getReservations', async () => {
  const response = await axios.get(url);
  const reservationData = response.data;
  const reservations = [];
  Object.keys(reservationData).forEach((key) => {
    const reservation = reservationData[key];
    reservations[reservation.id] = {
      id: reservation.id,
      city: reservation.city,
      start_date: reservation.start_date,
      user_id: reservation.user_id,
      car_id: reservation.car_id,
      end_date: reservation.end_date,
      name: reservation.name,
      image: reservation.image,
    };
  });
  return reservations;
});

export const createReservation = createAsyncThunk('createReservation', async (reservationData) => {
  const response = await axios.post(url, reservationData);
  return response.data;
});
export const reservationsSlice = createSlice({
  name: 'reservations',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      .addCase(getReservations.fulfilled, (state, action) => {
        state.reservations = action.payload;
      })
      .addCase(createReservation.fulfilled, (state, action) => {
        state.reservations.push(action.payload);
      });
  },
});
export const { reservationsFilter } = reservationsSlice.actions;
export default reservationsSlice.reducer;
