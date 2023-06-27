import React from 'react';
import PropTypes from 'prop-types';
import Car from './CarCard';
import './Car.css';

const Cars = ({ cars }) => {
  if (!cars || cars.length === 0) {
    return <div>No cars available</div>;
  }
  return (

    <div className="main">

      <ul className="homeCarsList">
        {cars.map((car) => (
          <Car
            key={car.id}
            id={car.id}
            name={car.name}
            image={car.image}
          />
        ))}
      </ul>
    </div>
  );
};

export default Cars;

Cars.propTypes = {
  cars: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
