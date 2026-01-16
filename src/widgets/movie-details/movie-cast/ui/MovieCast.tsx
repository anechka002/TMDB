import s from './MovieCast.module.css'
import {
  useGetMovieCreditsQuery
} from "@/features/category-movies/api/moviesApi.ts";
import {IMAGE_BASE_URL} from "@/shared/config";

export const MovieCast = ({movieId}: {movieId: string}) => {

  const {data} = useGetMovieCreditsQuery({movie_id: movieId});

  if(!data) return null

  const cast = data.cast.slice(0,6)

  return (
    <section className={s.section}>
      <div className={s.header}>
        <h2 className={s.title}>Cast</h2>
      </div>
      <div className={s.grid}>
        {cast.map(actor => (
          <article className={s.card} key={actor.id}>
            <div className={s.avatarFrame}>
              <img
                className={s.avatar}
                src={actor.profile_path ? `${IMAGE_BASE_URL}${actor.profile_path}` : "https://placehold.co/200x300"}
                alt={actor.name}
              />
            </div>
            <div className={s.info}>
              <p className={s.name}>{actor.name}</p>
              <p className={s.character}>{actor.character}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};