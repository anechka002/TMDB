import {Navigate, Route, Routes} from "react-router";
import {MainPage} from "@/pages/main/MainPage.tsx";
import {Path} from "@/app/routing/paths.ts";
import {SearchPage} from "@/pages/search/SearchPage.tsx";
import {MovieDetailsPage} from "@/pages/movie-details/MovieDetailsPage.tsx";
import {FilteredMoviesPage} from "@/pages/filtered-movies";
import {PageNotFound} from "@/shared";
import {CategoryPage} from "@/pages/category";
import {FavoritesPage} from "@/pages/favorites";

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