import s from './MainPage.module.css'
import {
  CategoryPreview
} from "@/features/category-movies/ui/CategoryPreview.tsx";
import {categories} from "@/features/category-movies/model/categories.ts";

export const MainPage = () => {
  return (
    <div className={s.main}>
      {categories.map(category => (
        <CategoryPreview key={category.type} category={category.type} title={category.title} />
      ))}
    </div>
  );
};