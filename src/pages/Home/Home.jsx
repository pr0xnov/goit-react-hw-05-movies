import React, { useEffect, useState } from 'react';
import { getTrending } from '../../Services/Api';
import MoviesList from 'components/MoviesList';

export default function Home() {
  const [trending, setTrending] = useState(null);

  useEffect(() => {
    async function fethTrending() {
      try {
        const resolve = await getTrending();
        setTrending(resolve.data.results);
      } catch (error) {
        console.log(error.message);
      }
    }
    fethTrending();
  }, []);

  return (
    <div>
      <h1>TRENDING TO DAY</h1>
      {trending && <MoviesList movies={trending} />}
    </div>
  );
}
