import { graphql, GraphQLHandler } from 'msw';
import { MoviesQueryResult, MoviesQueryVariable } from '../useGetMovies';

export const networkErrorHandlers: GraphQLHandler[] = [
  graphql.query<MoviesQueryResult, MoviesQueryVariable>(
    'getMovies',
    (req, res) => res.networkError('Network error')
  ),
];
