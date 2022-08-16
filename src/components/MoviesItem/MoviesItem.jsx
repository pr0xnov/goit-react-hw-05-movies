import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const MoviesItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li>
      <Link to={`/movies/${id}`} state={{ from: location }} id={id}>
        {title}
      </Link>
    </li>
  );
};
export default MoviesItem;

MoviesItem.protoType = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
