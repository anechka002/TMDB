import {MoviesGridSkeleton, TabsSkeleton, TitleSkeleton} from "@/shared";
import s from './CategoryPage.module.css'

export const CategoryPageSkeleton = () => {
  return (
    <div  className={s.skeleton}>
      <div className={s.tabs}>
        <TabsSkeleton/>
      </div>
      <TitleSkeleton/>
      <div className={s.items}>
        <MoviesGridSkeleton/>
      </div>
    </div>
  );
};
