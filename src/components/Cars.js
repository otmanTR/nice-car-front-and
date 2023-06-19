import React from 'react';
import PropTypes from 'prop-types';
import Car from './CarCard';

const Cars = (props) => {
  const { cars } = props;

  return (

    <div className="main">

      <ul className="homeCarsList">
        {coins.map((car) => (
          <Car
            key={car.name}
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
  cars: PropTypes.string.isRequired,
};
