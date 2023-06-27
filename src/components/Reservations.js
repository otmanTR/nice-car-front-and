import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getReservations } from '../redux/reservations/reservationsSlice';
import { Navbar } from '../Navbar/Navbar';

export function Reservations() {
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
      <div className="mainContainer">
        <h2>Reservations</h2>
        <div className="reservationsItems">
          {reservations.map((reservation) => (
            <div key={reservation.id}>
              <img src={reservation.image} alt={reservation.name} />
              <h2>
                {reservation.name}
              </h2>
              <h2>
                {reservation.city}
              </h2>
              <p>
                {reservation.start_date}
              </p>
              <p>
                {reservation.end_date}
              </p>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Reservations;
