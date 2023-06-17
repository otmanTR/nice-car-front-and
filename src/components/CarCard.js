import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Car = ({
  name, image, id,
}) => (
  <Link to={`/car/${id}`} className="link">
    <li className="car">
      <img className="carImage" src={image} alt={image} />
      <h2 className="carName">
        {name}
      </h2>
    </li>
  </Link>
);

Car.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Car;