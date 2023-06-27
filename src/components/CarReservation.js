import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createReservation } from '../redux/reservations/reservationsSlice';
import { Navbar } from '../Navbar/Navbar';

export const CarReservation = () => {
  const dispatch = useDispatch();
  const { carId } = useParams();

  const [reservationData, setReservationData] = useState({
    start_date: '',
    end_date: '',
    city: '',
    user_id: 1,
    car_id: carId,
  });

  const handleChange = (e) => {
    setReservationData({ ...reservationData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newReservation = {
      ...reservationData,
      carId,
    };

    dispatch(createReservation(newReservation));

    setReservationData({
      start_date: '',
      end_date: '',
      city: '',
      user_id: 1,
      car_id: carId,
    });
  };

  return (
    <div className="mainContainer reservation-container">
      <div>
        <Navbar />
      </div>
      <div className="reserve-container">
        <h2>Reservation Form</h2>
        <form className="reserve-form " onSubmit={handleSubmit}>
          <label htmlFor="city">
            City:
            <input type="text" id="city" name="city" value={reservationData.city} onChange={handleChange} />
          </label>
          <label htmlFor="start_date">
            Start Date:
            <input type="date" id="start_date" name="start_date" value={reservationData.start_date} onChange={handleChange} />
          </label>
          <label htmlFor="end_date">
            End Date:
            <input type="date" id="end_date" name="end_date" value={reservationData.end_date} onChange={handleChange} />
          </label>

        </form>
        <button className="reserve-button" type="submit">Create Reservation</button>
      </div>
    </div>
  );
};

export default CarReservation;
