import {Navigate, Route, Routes} from "react-router";
import {MainPage} from "@/pages/main/MainPage.tsx";
import {CategoryPage} from "@/pages/category/CategoryPage.tsx";
import {PageNotFound} from "@/common/components";
import {Path} from "@/common/routing/paths.ts";
import {Search} from "@/features/search/ui/Search/Search.tsx";
import {FavoritesPage} from "@/pages/favorites/FavoritesPage.tsx";

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    {/*<Route path={Path.Movies} element={<CategoryPage />} />*/}
    {/*<Route path={Path.Category} element={<CategoryPage />} />*/}
    <Route path={Path.Movies}>
      <Route index element={<Navigate to={`${Path.Movies}/popular`} replace />} />
      <Route path=":categoryType" element={<CategoryPage />} />
    </Route>
    <Route path={Path.Search} element={<Search />} />
    <Route path={Path.Favorites} element={<FavoritesPage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)