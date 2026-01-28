import s from './MovieHeader.module.css'
import {MovieRating} from "@/entities/movie/ui/MovieRating.tsx";
import {formatRuntime} from "@/shared/lib";
import {Button} from "@/shared";

type Props = {
  onBack: () => void;
  title: string;
  releaseDate: string
  rating: number | null
  runtime: number | null
}

export const MovieHeader = ({onBack, title, releaseDate, rating, runtime}: Props) => {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <h1 className={s.title}>{title}</h1>
        <Button type={'button'} variant={'primary'} onClick={onBack}>Back</Button>
      </div>
      <div className={s.meta}>
        <span className={s.metaItem}>Release year: {releaseDate.slice(0, 4)}</span>
        <MovieRating rating={rating} variant={'details'}/>
        <span className={s.metaItem}>Runtime: {formatRuntime(runtime)}</span>
      </div>
    </header>
  );
};