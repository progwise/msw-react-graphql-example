import { useQuery, UseQueryResponse } from 'urql';

const MoviesQuery = `
query getMovies($search: String!) {
  movies {
    search(term: $search, first: 20) {
      edges {
        node {
          id
          title
          rating
          poster(size: Original)
        }
      }
    }
  }
}
`;

export interface MoviesQueryResult {
  movies: {
    search: {
      edges: {
        node: {
          id: string;
          title: string;
          rating: number;
          poster?: string;
        };
      }[];
    };
  };
}

export interface MoviesQueryVariable {
  search: string;
}

export const useGetMovies = (
  search: string
): UseQueryResponse<MoviesQueryResult, MoviesQueryVariable> => {
  return useQuery<MoviesQueryResult, MoviesQueryVariable>({
    query: MoviesQuery,
    variables: { search },
  });
};
