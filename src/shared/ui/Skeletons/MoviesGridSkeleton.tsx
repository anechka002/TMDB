import {MovieCardSkeleton} from "@/shared";

type Props = {
  count?: number;
  width?: string;
}

export const MoviesGridSkeleton = ({count = 10, width = '230px'}: Props) => {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} width={width}/>
      ))}
    </>
  );
};