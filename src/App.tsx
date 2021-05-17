import React, { useState } from 'react';
import { useGetMovies } from './useGetMovies';

const App = () => {
  const [search, setSearch] = useState('Star Wars');
  const [result] = useGetMovies(search);

  return (
    <>
      <h1>Movie search</h1>
      <input
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      {result.fetching ? 'loading...' : undefined}
      <div>
        {result.data?.movies.search.edges.length === 0
          ? 'no movies found'
          : undefined}
        <ul>
          {result.data?.movies.search.edges.map(({ node: movie }) => (
            <li key={movie.id}>
              {movie.poster ? (
                <img src={movie.poster} alt={movie.title} height={200} />
              ) : undefined}
              {movie.title} ({movie.rating})
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default App;
