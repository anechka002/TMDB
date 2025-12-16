import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import {SectionTitle} from "@/common/components";
import {CategoryTabs} from "@/features/category-movies/ui/CategoryTabs.tsx";
import {useParams} from "react-router";
import {
  useFetchMoviesByCategoryQuery
} from "@/features/category-movies/api/moviesApi.ts";
import type {CategoryType} from "@/features/category-movies/api/moviesApi.types.ts";
import {categoryTabs} from "@/features/category-movies/model/categoryTabs.ts";

export const CategoryPage = () => {
  const { categoryType = 'popular' } = useParams<{ categoryType: string }>();

  const {data} = useFetchMoviesByCategoryQuery({category: categoryType as CategoryType});

  const categoryTitle = categoryTabs.find((tab) => tab.type === categoryType)?.label || 'Popular Movies'

  return (
    <>
      <CategoryTabs/>
      {/*<SectionTitle title='Popular Movies'/>*/}
      <SectionTitle title={categoryTitle}/>
      <CategoryList movies={data?.results ?? []}/>
    </>
  );
};
