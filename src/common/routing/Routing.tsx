import {Route, Routes} from "react-router";
import {MainPage} from "@/pages/main/MainPage.tsx";
import {CategoryPage} from "@/pages/category/CategoryPage.tsx";
import {PageNotFound} from "@/common/components";
import {Path} from "@/common/routing/paths.ts";
// import {FilteredPage} from "@/features/filtered-movies/ui/FilteredPage/FilteredPage.tsx";
import {Search} from "@/features/search/ui/Search/Search.tsx";
import {Favorites} from "@/features/favorites/ui/Favorites/Favorites.tsx";

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Movies} element={<CategoryPage />} />
    {/*<Route path={Path.Filtered} element={<FilteredPage />} />*/}
    <Route path={Path.Search} element={<Search />} />
    <Route path={Path.Favorites} element={<Favorites />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)