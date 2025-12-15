import {useAppSelector} from "@/common/hooks/useAppSelector.ts";
import {
  selectFavoritesMovies
} from "@/features/favorites/model/favorites-slice.ts";
import {MovieCard} from "@/entities/movie/ui/MovieCard.tsx";
import s from "./Favorites.module.css";
import {SectionTitle} from "@/common/components";

export const Favorites = () => {
  const favoritesMovies = useAppSelector(selectFavoritesMovies)
  return (
    <>
      <SectionTitle title={'Favorites'}/>
      <p className={s.title}>Favorite Movies</p>
      <div className={s.favoritesCards}>
        {favoritesMovies.map((movie) => (<MovieCard key={movie.id} movie={movie}/>))}
      </div>
    </>
  );
};