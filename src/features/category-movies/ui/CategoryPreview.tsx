import type {
  CategoryType
} from "@/features/category-movies/api/moviesApi.types.ts";
import {useNavigate} from "react-router";
import {
  useFetchMoviesByCategoryQuery
} from "@/features/category-movies/api/moviesApi.ts";
import s from "./CategoryPreview.module.css";
import {Button, SectionTitle} from "@/common/components";
import {Path} from "@/common/routing";
import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";

type Props = {
  category: CategoryType
  title: string
  limit?: number
}

export const CategoryPreview = ({category, limit = 6, title}: Props) => {
  const navigate = useNavigate();
  const {data}  = useFetchMoviesByCategoryQuery({category});

  const movies = data?.results.slice(0, limit) ?? []

  const handleNavigate = () => navigate(`${Path.Movies}/${category}`)

  return (
    <section>
      <div className={s.header}>
        <SectionTitle title={title}/>
        <Button variant={'primary'} onClick={handleNavigate}>View more</Button>
      </div>
      <CategoryList movies={movies} layout={'main'}/>
    </section>
  );
};