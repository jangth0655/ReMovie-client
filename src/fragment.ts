import { gql } from "@apollo/client";
export const MOVIE_DETAIL_FRAGMENT = gql`
  fragment movieDetail on MovieDetail {
    poster_path
    backdrop_path
    overview
    id
    title
    video
    vote_average
    release_date
  }
`;
