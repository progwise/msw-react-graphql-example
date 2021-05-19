import React from 'react';
import { createClient, Provider } from 'urql';
import { MovieSearch } from './MovieSearch';

export const App = () => {
  const client = createClient({ url: 'https://tmdb.apps.quintero.io' });

  return (
    <Provider value={client}>
      <h1>Movie search</h1>
      <MovieSearch initialSearch="Star Wars" />
    </Provider>
  );
};
