import s from './MainPage.module.css'
import {
  CategoryPreview
} from "@/features/category-movies/ui/CategoryPreview.tsx";
import {categories} from "@/features/category-movies/model/categories.ts";
import {HeroBanner} from "@/shared/ui";

export const MainPage = () => {
  return (
    <div className={s.main}>
      <HeroBanner/>
      {categories.map(category => (
        <CategoryPreview key={category.type} category={category.type} title={category.title} />
      ))}
    </div>
  );
};