import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieCredits } from '../../Services/Api';
import img from '../../images/siluet_4108.jpg';
import { ListActors } from './Cast.styled.js';

export default function Cast() {
  const { moviesId } = useParams();
  const [actors, setActors] = useState([]);

  useEffect(() => {
    async function fethMovieDetails() {
      try {
        const resolve = await getMovieCredits(moviesId);
        setActors(resolve.data.cast);
      } catch (error) {
        console.log(error.message);
      }
    }
    fethMovieDetails();
  }, [moviesId]);

  const viewPhoto = profile_path => {
    return profile_path
      ? ` https://image.tmdb.org/t/p/w500${profile_path}`
      : img;
  };

  return (
    <>
      <ListActors>
        {actors &&
          actors.map(actor => (
            <li key={actor.id}>
              <img
                src={`${viewPhoto(actor.profile_path)}`}
                alt={actor.name}
                width="250px"
              />
              <p>{actor.original_name}</p>
              <p>Character: {actor.character}</p>
            </li>
          ))}
      </ListActors>
      {actors.length === 0 && <p>Actor is not found</p>}
      <Outlet />
    </>
  );
}
