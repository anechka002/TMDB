export type MovieResponse = {
  page: number;
  results: MovieItem[];
  total_pages: number;
  total_results: number;
}

export type MovieItem = {
  adult: boolean;
  backdrop_path: string | undefined | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | undefined | null;
  release_date: string;       // формат YYYY-MM-DD
  title: string;
  video: boolean;
  vote_average: number | null;
  vote_count: number;
}

export type CategoryType =
  | 'popular'
  | 'top_rated'
  | 'upcoming'
  | 'now_playing';

// Arguments
export type FetchPopularArgs = {
  language?: string
  page?: number
  region?: string
}
