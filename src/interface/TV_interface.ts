import { Cast, Genres } from "./shared";

export interface Season {
  air_date: number;
  episode_count: number;
  id: number;
  name: string;
  overview: string;
  poster_path: string;
  season_number: number;
}

export interface ITVCast {
  id: number;
  cast: Cast[];
}

export interface TVDetail {
  poster_path: string;
  backdrop_path: string;
  id: number;
  name: string;
  overview: string;
  first_air_date: string;
  last_air_date: string;
  genres: Genres[];
  vote_average: number;
  seasons: Season[];
}

export interface TVResults {
  poster_path: string;
  backdrop_path: string;
  /* first_air_date: string; */
  vote_average: number;
  overview: string;
  id: number;
  original_name: string;
  name: string;
  vote_count: number;
}

export interface TV {
  page: number;
  results: TVResults[];
  total_pages: number;
  total_results: number;
}
