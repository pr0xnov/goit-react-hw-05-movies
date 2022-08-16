import { Suspense } from 'react';
import { Outlet, useSearchParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getSearch } from '../../Services/Api';

import {
  Header,
  SearchForm,
  SearchButton,
  ButtonLabel,
  SearchInput,
} from './Movies.styled';
import MoviesList from 'components/MoviesList';

export default function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query') || '';
  const [moviesName, setMoviesName] = useState(query);

  useEffect(() => {
    if (query === '') {
      return;
    }
    async function fethTrending() {
      try {
        const resolve = await getSearch(query);
        setMovies(resolve.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fethTrending();
  }, [query]);

  const handleNameChange = event => {
    setMoviesName(event.target.value.toLowerCase().trim());
  };

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query: moviesName });
    if (moviesName === '') {
      alert('Введите название поиска');
      return;
    }
  };

  return (
    <div>
      <Header>
        <SearchForm onSubmit={handleSubmit} onChange={handleNameChange}>
          <SearchButton type="submit">
            <ButtonLabel>Search</ButtonLabel>
          </SearchButton>

          <SearchInput
            onChange={handleNameChange}
            value={moviesName}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search movies"
          />
        </SearchForm>
      </Header>
      {query && <MoviesList movies={movies} />}
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
