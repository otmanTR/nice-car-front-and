import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Car({
  name, image, id,
}) {
  return (
    <Link to={`/car/${id}`} className="link">
      <li className="car">
        <img className="carImage" src={image} alt={image} />
        <h2 className="carName">
          {name}
        </h2>
      </li>
    </Link>
  );
}

Car.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Car;
