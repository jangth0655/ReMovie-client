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
