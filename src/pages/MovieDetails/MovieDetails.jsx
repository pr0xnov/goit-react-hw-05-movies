import { useEffect, useState } from 'react';
import { Link, Outlet, useParams, useLocation } from 'react-router-dom';
import { getMovieDetails } from '../../Services/Api';
import {
  BlockDetails,
  BlockInfo,
  BackButton,
  Links,
  BlocLinks,
} from './MovieDetails.styled';

export default function MovieDetails() {
  const { moviesId } = useParams();
  const [movies, setMovies] = useState(null);
  const location = useLocation();
  const back = location?.state?.from || '/';

  useEffect(() => {
    async function fethMovieDetails() {
      try {
        const resolve = await getMovieDetails(moviesId);
        setMovies(resolve.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fethMovieDetails();
  }, [moviesId]);

  const viewPoster = () => {
    return ` https://image.tmdb.org/t/p/w500${movies.poster_path}`;
  };

  const ganres = genres => {
    return genres.map(genre => genre.name).join(', ');
  };

  const qq = e => {
    return Math.round(e * 10);
  };

  return (
    <>
      <BackButton>
        <Link to={back}>Back</Link>
      </BackButton>

      {movies && (
        <BlockDetails>
          <img
            src={`${viewPoster(movies.poster_path)}`}
            alt={movies.title}
            width="240px"
          />
          <BlockInfo>
            <h2>{movies.title}</h2>
            <p>Average: {qq(movies.vote_average)} %</p>
            <h3>overview</h3>
            <p>{movies.overview}</p>
            <h4>Genres</h4>
            <p>{`${ganres(movies.genres)}`}</p>
          </BlockInfo>
        </BlockDetails>
      )}
      <BlocLinks>
        <Links to="cast" state={{ from: back }}>
          Cast
        </Links>
        <Links to="reviews" state={{ from: back }}>
          Reviews
        </Links>
      </BlocLinks>
      <Outlet />
    </>
  );
}
