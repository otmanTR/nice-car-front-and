import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getCars, deleteCar } from '../redux/cars/carsSlice';

export const DeleteCar = () => {
  const cars = useSelector((state) => state.cars.cars) || [];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  const handleDelete = (id) => {
    dispatch(deleteCar(id))
      .then((action) => {
        const result = action.payload;
        if (result !== undefined && result !== null && result !== '') {
          console.log('Car deleted successfully.');
          window.location.reload();
        } else {
          console.error('Error deleting car:', action.error.message);
        }
      })
      .catch((error) => {
        console.error('Error deleting car:', error);
      });
  };

  return (
    <div className="mainContainer">
      <h2>Delete the Car</h2>
      <div className="carItems">
        {cars.map((car) => (
          <div key={car.id}>
            <img src={car.image} alt={car.name} />
            <h2>
              {car.name}
            </h2>
            <button className="delete-button" type="button" onClick={() => handleDelete(car.id)}>Delete</button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default DeleteCar;