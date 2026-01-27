import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import {SectionTitle} from "@/shared/ui";
import {CategoryTabs} from "@/features/category-movies/ui/CategoryTabs.tsx";
import {useParams} from "react-router";
import type {CategoryType} from "@/features/category-movies/api/categoryMovies.api.types.ts";
import {categories} from "@/features/category-movies/model/categories.ts";
import {usePagination} from "@/features/pagination/model/usePagination.ts";
import {Pagination} from "@/features/pagination/ui/Pagination.tsx";
import {
  useFetchMoviesByCategoryQuery
} from "@/features/category-movies/api/categoryMovies.api.ts";
import {
  CategorySkeleton
} from "@/features/category-movies/ui/CategorySkeleton.tsx";
import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {useEffect} from "react";
import {appInitializedAC, selectInitialized} from "@/app/model/app-slice.ts";


export const CategoryPage = () => {
  const { categoryType = 'popular' } = useParams<{ categoryType: string }>();

  const {currentPage, setPage} = usePagination()

  const {data, isFetching} = useFetchMoviesByCategoryQuery({
    category: categoryType as CategoryType,
    page: currentPage
  });

  const isInitialized = useAppSelector(selectInitialized)
  const dispatch = useAppDispatch();

  useEffect(() => {
    if(data) {
      dispatch(appInitializedAC())
    }
  }, [data, dispatch]);

  const current =
    categories.find(c => c.type === categoryType) ?? categories[0]

  const skeletons = [...new Array(5)].map((_, i) => <CategorySkeleton key={i}/> );

  if (!isInitialized && isFetching) return skeletons

  return (
    <>
      <CategoryTabs/>
      <SectionTitle title={current.title}/>
      <CategoryList movies={data?.results ?? []} layout={'category'}/>
      <Pagination currentPage={currentPage} setCurrentPage={setPage} pagesCount={data?.total_pages ?? 1}/>
    </>
  );
};

