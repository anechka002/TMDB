import {useAppSelector} from "@/shared/hooks";
import {selectSortBy} from "@/widgets/movie-filters/model/filters.slice.ts";
import {
  useDiscoverMoviesQuery
} from "@/features/discover-movies/api/discoverMovies.api.ts";
import {usePagination} from "@/features/pagination/model/usePagination.ts";
import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import {Pagination} from "@/features/pagination/ui/Pagination.tsx";

export const MoviesGrid = () => {
  const sortBy = useAppSelector(selectSortBy)
  const { currentPage, setPage } = usePagination();

  const { data } = useDiscoverMoviesQuery({
    sort_by: sortBy,
    page: currentPage,
  })

  return (
    <div>
      <CategoryList movies={data?.results ?? []} layout={'category'}/>
      <Pagination currentPage={currentPage} setCurrentPage={setPage} pagesCount={data?.total_pages ?? 1}/>
    </div>
  );
};