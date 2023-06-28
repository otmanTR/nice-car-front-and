import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars, deleteCar } from '../redux/cars/carsSlice';
import { Navbar } from '../Navbar/Navbar';

export function DeleteCar() {
  const cars = useSelector((state) => state.cars.cars) || [];
  const [message, setMessage] = useState('');

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id))
      .then((action) => {
        const result = action.payload;
        if (result) {
          window.location.reload();
        } else {
          throw new Error('Error deleting car');
        }
      })
      .catch((error) => {
        setMessage(error.message || 'Error deleting car');
      });
  };

  return (
    <div className="mainContainer">
      <div>
        <Navbar />
      </div>
      <div className="deleteContainer">
        <p>{message}</p>
        <h2 className="deleteHead">Delete the Car</h2>
        <div className="carItems">
          {cars.map((car) => (
            <div className="carItemss" key={car.id}>
              <img className="carImage" src={car.image} alt={car.name} />
              <h2 className="carName">{car.name}</h2>
              <button className="delete-button" type="button" onClick={() => handleDelete(car.id)}>
                Delete Car
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DeleteCar;
