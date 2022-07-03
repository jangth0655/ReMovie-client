import { gql } from "@apollo/client";
export const MOVIE_FRAGMENT = gql`
  fragment movieResults on Movie {
    results {
      poster_path
      backdrop_path
      overview
      id
      original_title
      title
      vote_count
      video
      vote_average
      release_date
    }
  }
`;
