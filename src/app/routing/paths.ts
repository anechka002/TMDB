export const Path = {
  Main: '/',
  Movies: '/movies',
  Movie: "/movie/:movieId",
  Filtered: '/filtered-movies',
  Search: '/search',
  Favorites: '/favorites',
  NotFound: '*',
  Category: '/movies/:categoryType',
} as const