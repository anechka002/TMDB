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

export type MovieDetailsResponse = {
  adult: boolean;
  backdrop_path: string | null;
  belongs_to_collection: null | {
    id: number;
    name: string;
    poster_path: string | null;
    backdrop_path: string | null;
  };
  budget: number;
  genres: Array<{
    id: number;
    name: string;
  }>;
  homepage: string | null;
  id: number;
  imdb_id: string | null;
  original_language: string;
  original_title: string;
  overview: string | null;
  popularity: number;
  poster_path: string | null;
  production_companies: Array<{
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{
    iso_3166_1: string;
    name: string;
  }>;
  release_date: string; // ISO date: "YYYY-MM-DD"
  revenue: number;
  runtime: number | null;
  spoken_languages: Array<{
    english_name: string;
    iso_639_1: string;
    name: string;
  }>;
  status: string;
  tagline: string | null;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

// Arguments
export type FetchPopularArgs = {
  language?: string
  page?: number
  region?: string
}
