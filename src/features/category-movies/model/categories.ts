import type {
  CategoryType
} from "@/features/category-movies/api/categoryMovies.api.types.ts";

export const categories = [
  {type: 'popular', tabLabel: 'Popular Movies', title: "Popular Movies",},
  {type: 'top_rated', tabLabel: 'Top Rated Movies', title: "Top Rated Movies",},
  {type: 'upcoming', tabLabel: 'Upcoming Movies', title: "Upcoming Movies",},
  {type: 'now_playing', tabLabel: 'Non Playing Movies', title: "Now Playing Movies",},
] as const satisfies readonly {
  type: CategoryType
  title: string
  tabLabel: string
}[]