import {useAppSelector, useDebounce} from "@/shared/hooks";
import {
  selectRatingFrom, selectRatingTo, selectSelectedGenreIds,
  selectSortBy
} from "@/widgets/movie-filters/model/filters.slice.ts";
import {
  useDiscoverMoviesQuery
} from "@/features/discover-movies/api/discoverMovies.api.ts";
import {usePagination} from "@/features/pagination/model/usePagination.ts";
import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import {Pagination} from "@/features/pagination/ui/Pagination.tsx";
import {useEffect} from "react";
import {MoviesGridSkeleton} from "@/shared";

export const MoviesGrid = () => {
  const sortBy = useAppSelector(selectSortBy)
  const { currentPage, setPage } = usePagination();

  const ratingFrom = useAppSelector(selectRatingFrom);
  const ratingTo = useAppSelector(selectRatingTo);
  const selectedGenreIds = useAppSelector(selectSelectedGenreIds)

  const debouncedFrom = useDebounce(ratingFrom, 200);
  const debouncedTo = useDebounce(ratingTo, 200);

  const { data, isLoading } = useDiscoverMoviesQuery({
    sort_by: sortBy,
    page: currentPage,
    vote_average_gte: debouncedFrom,
    vote_average_lte: debouncedTo,
    with_genres: selectedGenreIds.length ? selectedGenreIds.join(',') : undefined,
  })

  useEffect(() => {
    setPage(1)
  }, [sortBy, debouncedFrom, debouncedTo, selectedGenreIds])

  if(isLoading) return <MoviesGridSkeleton count={15} width={'150px'} height={'200px'} />

  return (
    <div>
      <CategoryList movies={data?.results ?? []} layout={'category'}/>
      <Pagination currentPage={currentPage} setCurrentPage={setPage} pagesCount={data?.total_pages ?? 1}/>
    </div>
  );
};