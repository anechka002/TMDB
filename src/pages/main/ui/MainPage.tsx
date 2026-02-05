import s from './MainPage.module.css'
import {
  CategoryPreview
} from "@/features/category-movies/ui/CategoryPreview.tsx";
import {categories} from "@/features/category-movies/model/categories.ts";
import {HeroBanner} from "@/widgets";
import {useRandomPopularBackdrop} from "@/shared/hooks";
import {MainPageSkeleton} from "@/pages/main";

export const MainPage = () => {
  const {backdrop, isLoading} = useRandomPopularBackdrop()

  if(isLoading) return <MainPageSkeleton/>

  if(!backdrop) return null

  return (
    <div className={s.main}>
      <HeroBanner backdrop={backdrop} />
      {categories.map(category => (
        <CategoryPreview key={category.type} category={category.type} title={category.title} />
      ))}
    </div>
  );
};