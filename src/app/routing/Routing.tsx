import {Navigate, Route, Routes} from "react-router";
import {Path} from "@/app/routing/paths.ts";
import {PageNotFound} from "@/shared";
import {FilteredMoviesPage} from "@/pages/filtered-movies";
import {CategoryPage} from "@/pages/category";
import {FavoritesPage} from "@/pages/favorites";
import {MainPage} from "@/pages/main";
import {MovieDetailsPage} from "@/pages/movie-details";
import {SearchPage} from "@/pages/search";

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Movie} element={<MovieDetailsPage />} />
    <Route path={Path.Movies}>
      <Route index element={<Navigate to={`${Path.Movies}/popular`} replace />} />
      <Route path=":categoryType" element={<CategoryPage />} />
    </Route>
    <Route path={Path.Filtered} element={<FilteredMoviesPage />} />
    <Route path={Path.Search} element={<SearchPage />} />
    <Route path={Path.Favorites} element={<FavoritesPage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)