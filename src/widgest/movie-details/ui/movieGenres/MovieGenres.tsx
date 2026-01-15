import s from "./MovieGenres.module.css";

type Props = {
  genres: { id: number; name: string }[]
}

export const MovieGenres = ({genres}: Props) => {
  return (
    <div className={s.section}>
      <h2 className={s.subTitle}>Genres</h2>
      <ul className={s.list}>
        {genres.map(genre => (
          <li className={s.item} key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </div>
  );
};