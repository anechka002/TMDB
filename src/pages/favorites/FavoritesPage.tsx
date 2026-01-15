import {
  selectFavoritesMovies
} from "@/features/favorites/model/favorites-slice.ts";
import s from "./FavoritesPage.module.css";
import {SectionTitle} from "@/shared/ui";
import {useAppSelector} from "@/shared/hooks";
import {FavoriteMovieCard} from "@/features/favorites/ui/FavoriteMovieCard.tsx";

export const FavoritesPage = () => {
  const favoritesMovies = useAppSelector(selectFavoritesMovies)
  return (
    <>
      <SectionTitle title={'Favorites'}/>
      <p className={s.title}>Favorite Movies</p>
      <div className={s.favoritesCards}>
        {favoritesMovies.map((movie) => (<FavoriteMovieCard key={movie.id} movie={movie}/>))}
      </div>
    </>
  );
};