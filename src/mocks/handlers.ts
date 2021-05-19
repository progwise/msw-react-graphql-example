import { graphql, GraphQLHandler } from 'msw';
import { MoviesQueryResult, MoviesQueryVariable } from '../useGetMovies';

export const handlers: GraphQLHandler[] = [
  graphql.query<MoviesQueryResult, MoviesQueryVariable>(
    'getMovies',
    (req, res, ctx) => {
      return res(
        ctx.data({
          movies: {
            search: {
              edges: [
                {
                  node: {
                    poster:
                      'https://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg',
                    id: 'MDoxMQ==',
                    rating: 8.2,
                    title: 'Star Wars',
                  },
                },
                {
                  node: {
                    id: 'MDoxODE4MTI=',
                    rating: 6.5,
                    title: 'Star Wars: The Rise of Skywalker',
                    poster:
                      'https://image.tmdb.org/t/p/original/db32LaOibwEliAmSL2jjDF6oDdj.jpg',
                  },
                },
              ],
            },
          },
        })
      );
    }
  ),
];
