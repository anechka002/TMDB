import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import {SectionTitle} from "@/common/components";
import {CategoryTabs} from "@/features/category-movies/ui/CategoryTabs.tsx";
import {useParams} from "react-router";
import {
  useFetchMoviesByCategoryQuery
} from "@/features/category-movies/api/moviesApi.ts";
import type {CategoryType} from "@/features/category-movies/api/moviesApi.types.ts";
import {categories} from "@/features/category-movies/model/categories.ts";

export const CategoryPage = () => {
  const { categoryType = 'popular' } = useParams<{ categoryType: string }>();

  const {data} = useFetchMoviesByCategoryQuery({category: categoryType as CategoryType});

  const current =
    categories.find(c => c.type === categoryType) ?? categories[0]

  return (
    <>
      <CategoryTabs/>
      <SectionTitle title={current.title}/>
      <CategoryList movies={data?.results ?? []}/>
    </>
  );
};
