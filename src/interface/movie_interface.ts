import { Cast, Genres } from "./shared";

export interface MovieCast {
  id: number;
  cast: Cast[];
}

export interface MovieDetail {
  id: number;
  poster_path: string;
  backdrop_path: string;
  genres: Genres[];
  imdb_id: string;
  original_title: string;
  title: string;
  video: boolean;
  vote_average: number;
  release_date: string;
  overview: string;
  isLiked: boolean;
}

export interface MovieResult {
  poster_path: string;
  backdrop_path: string;
  overview: string;
  id: number;
  original_title: string;
  title: string;
  vote_count: number;
  video: boolean;
  vote_average: number;
  release_date: string;
}

export interface Movie {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}
