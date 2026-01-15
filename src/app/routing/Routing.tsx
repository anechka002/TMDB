import {Navigate, Route, Routes} from "react-router";
import {MainPage} from "@/pages/main/MainPage.tsx";
import {CategoryPage} from "@/pages/category/CategoryPage.tsx";
import {PageNotFound} from "@/shared/ui";
import {Path} from "@/app/routing/paths.ts";
import {FavoritesPage} from "@/pages/favorites/FavoritesPage.tsx";
import {SearchPage} from "@/pages/search/SearchPage.tsx";
import {MovieDetailsPage} from "@/pages/movieDetails/MovieDetailsPage.tsx";

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Movie} element={<MovieDetailsPage />} />
    <Route path={Path.Movies}>
      <Route index element={<Navigate to={`${Path.Movies}/popular`} replace />} />
      <Route path=":categoryType" element={<CategoryPage />} />
    </Route>
    <Route path={Path.Search} element={<SearchPage />} />
    <Route path={Path.Favorites} element={<FavoritesPage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)