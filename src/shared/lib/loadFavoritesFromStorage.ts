import type {MovieItem} from "@/entities/movie/api/movie.api.types.ts";

export const loadFavoritesFromStorage = () => {
  try {
    const favoritesMovies = localStorage.getItem('favorites');
    if (!favoritesMovies) return []
    const result = JSON.parse(favoritesMovies) as MovieItem[];
    return Array.isArray(result) ? result : [];
  } catch {
    return []
  }
}