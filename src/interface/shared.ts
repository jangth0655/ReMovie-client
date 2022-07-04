export type Genres = {
  id: number;
  name: string;
};

export interface Cast {
  id: number;
  profile_path: string;
  cast_id: string;
  character: string;
  name: string;
  original_name: string;
}

export interface VideoResult {
  name: string;
  key: string;
  id: string;
}

export interface Video {
  id: number;
  results: VideoResult[];
}
