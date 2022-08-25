import { useState, useEffect } from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { getMovieReviews } from '../../Services/Api';

export default function Reviews() {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    async function fethMovieDetails() {
      try {
        const resolve = await getMovieReviews(moviesId);
        setReviews(resolve.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fethMovieDetails();
  }, [moviesId]);

  return (
    <>
      <ul>
        {reviews &&
          reviews.map(review => (
            <li key={review.id}>
              <p>{review.author}</p>
              <p>{review.content}</p>
            </li>
          ))}
      </ul>
      {reviews.length === 0 && <p>Review is not found</p>}
      <Outlet />
    </>
  );
}
