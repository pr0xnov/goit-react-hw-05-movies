import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Reviews from './Reviews';
import Cast from './Cast';

const AsyncHome = lazy(() => {
  return import('../pages/Home');
});
const AsyncMovies = lazy(() => {
  return import('../pages/Movies');
});
const AsyncMovieDetails = lazy(() => {
  return import('../pages/MovieDetails');
});
const AsyncNotFound = lazy(() => {
  return import('../pages/NotFound');
});

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AsyncHome />} />
        <Route path="movies" element={<AsyncMovies />} />
        <Route path="movies/:moviesId" element={<AsyncMovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<AsyncNotFound />} />
      </Route>
    </Routes>
  );
}
