import {useEffect} from "react";
import {useAppSelector} from "@/shared/hooks/useAppSelector.ts";
import {
  selectFavoritesMovies
} from "@/features/favorites/model/favorites-slice.ts";

export const useSyncFavoritesWithStorage = () => {
  const favorites = useAppSelector(selectFavoritesMovies)

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])
}