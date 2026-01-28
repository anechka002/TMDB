import {MoviesGridSkeleton, TitleSkeleton} from "@/shared";
import s from './SearchPage.module.css'

export const SearchPageSkeleton = () => {
  return (
    <div style={{marginTop: '50px'}} className={s.skeleton}>
      <TitleSkeleton/>
      <div>
        <MoviesGridSkeleton/>
      </div>
    </div>
  );
};
