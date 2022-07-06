import { gql } from "@apollo/client";
export const MOVIE_DETAIL_FRAGMENT = gql`
  fragment movieDetailFragment on MovieDetail {
    poster_path
    backdrop_path
    overview
    id
    title
    vote_average
    release_date
  }
`;

export const TV_DETAIL_FRAGMENT = gql`
  fragment TVDetailFragment on TVDetail {
    poster_path
    backdrop_path
    overview
    id
    name
    vote_average
    first_air_date
    last_air_date
  }
`;

export const CAST_FRAGMENT = gql`
  fragment castFragment on Cast {
    id
    profile_path
    name
  }
`;
