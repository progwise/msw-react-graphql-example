import React, { useState } from 'react';
import { useGetMovies } from './useGetMovies';

interface MovieSearchProps {
  initialSearch: string;
}

export const MovieSearch = ({ initialSearch }: MovieSearchProps) => {
  const [search, setSearch] = useState(initialSearch);
  const [result] = useGetMovies(search);

  return (
    <>
      <input
        aria-label="search"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <div>
        {result.fetching ? 'loading...' : undefined}
        {result.error ? 'Network Error' : undefined}
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
