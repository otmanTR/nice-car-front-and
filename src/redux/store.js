import { configureStore } from '@reduxjs/toolkit';
import carsReducer from './cars/carsSlice';
import reservationsReducer from './reservations/reservationsSlice';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    cars: carsReducer,
    reservations: reservationsReducer,
    users: usersReducer,
  },
});
export default store;
