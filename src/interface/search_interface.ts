export interface SearchResult {
  id: number;
  vote_average: number;
  backdrop_path: string;
  poster_path: string;
  overview: string;
  title: string;
  name: string;
  release_date: string;
  media_type: string;
}

export interface Search {
  page: number;
  results: SearchResult[];
  total_pages: number;
  total_results: number;
}
