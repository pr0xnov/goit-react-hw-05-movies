import MoviesItem from 'components/MoviesItem';

import PropTypes from 'prop-types';

const MoviesList = ({ movies }) => {
  return (
    <ul>
      {movies.map(movie => (
        <MoviesItem key={movie.id} id={movie.id} title={movie.title} />
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ),
};
