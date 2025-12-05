import {Route, Routes} from "react-router";
import {MainPage} from "@/app/ui/MainPage/MainPage.tsx";
import {MoviesPage} from "@/features/movies/ui/MoviesPage/MoviesPage.tsx";
import {ProfilePage} from "@/features/auth/ui/ProfilePage/ProfilePage.tsx";
import {PageNotFound} from "@/common/components";
import {Path} from "@/common/routing/paths.ts";

export const Routing = () => (
  <Routes>
    <Route path={Path.Main} element={<MainPage />} />
    <Route path={Path.Movies} element={<MoviesPage />} />
    <Route path={Path.Profile} element={<ProfilePage />} />
    <Route path={Path.NotFound} element={<PageNotFound />} />
  </Routes>
)