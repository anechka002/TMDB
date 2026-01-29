import {MovieCardSkeleton} from "@/shared";

type Props = {
  count?: number;
  width?: string;
  height?: string;
}

export const MoviesGridSkeleton = ({count = 10, width = '230px', height = '300px'}: Props) => {
  return (
    <div>
      {Array.from({ length: count }).map((_, i) => (
        <MovieCardSkeleton key={i} width={width} height={height}/>
      ))}
    </div>
  );
};