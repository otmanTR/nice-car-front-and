import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsSlice';
import { Navbar } from '../Navbar/Navbar';
import './styles/Reservations.css';

const Reservations = () => {
  const reservations = useSelector((state) => state.reservations.reservations) || [];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getReservations());
  }, [dispatch]);

  return (
    <div className="mainContainer">
      <div>
        <Navbar />
      </div>
      <div className="mainContent">
        <h2 className="pageTitle">Reservations</h2>
        <div className="reservationsItems">
          {reservations.map((reservation) => (
            <div className="reservationItem" key={reservation.id}>
              <img className="reservationImage" src={reservation.image} alt={reservation.name} />
              <h2 className="reservationName">{reservation.name}</h2>
              <h2 className="reservationCity">{reservation.city}</h2>
              <p className="reservationStartDate">{reservation.start_date}</p>
              <p className="reservationEndDate">{reservation.end_date}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reservations;
