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
