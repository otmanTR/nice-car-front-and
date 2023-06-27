import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createReservation } from '../redux/reservations/reservationsSlice';
import { getCars } from '../redux/cars/carsSlice';
import { Navbar } from '../Navbar/Navbar';
import './ReservationForm.css';

export const CreateReservation = () => {
  const [reservationData, setReservationData] = useState({
    start_date: '',
    end_date: '',
    city: '',
    car_id: '',
    user_id: 1,
  });

  const dispatch = useDispatch();
  const cars = useSelector((state) => state.cars.cars) || [];

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      reservationData.start_date
      && reservationData.end_date
      && reservationData.city
      && reservationData.car_id
    ) {
      dispatch(createReservation(reservationData));
      setReservationData({
        start_date: '',
        end_date: '',
        city: '',
        car_id: '',
        user_id: 1,
      });
    }
  };

  return (
    <div className="mainContainer reserve-con">
      <div>
        <Navbar />
      </div>
      <div className="reserve-container">
        <h2>Create Reservation</h2>
        <form className="reserve-form" onSubmit={handleSubmit}>
          <input
            type="date"
            value={reservationData.start_date}
            onChange={(e) => setReservationData({ ...reservationData, start_date: e.target.value })}
            placeholder="Start Date"
            className="reserve-input"
          />

          <input
            type="date" // Update the input type to "date"
            value={reservationData.end_date}
            onChange={(e) => setReservationData({ ...reservationData, end_date: e.target.value })}
            placeholder="End Date"
            className="reserve-input"
          />

          <input
            type="text"
            value={reservationData.city}
            onChange={(e) => setReservationData({ ...reservationData, city: e.target.value })}
            placeholder="City"
            className="reserve-input"
          />

          <select
            value={reservationData.car_id}
            onChange={(e) => setReservationData({ ...reservationData, car_id: e.target.value })}
          >
            <option className="reserve-input" value="">Select a Car</option>
            {cars.map((car) => (
              <option key={car.id} value={car.id}>
                {car.name}
              </option>
            ))}
          </select>

          <button className="reserve-button" type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateReservation;
