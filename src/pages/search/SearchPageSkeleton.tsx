import {MoviesGridSkeleton, TitleSkeleton} from "@/shared";
import s from './SearchPage.module.css'
import {SearchSkeleton} from "@/shared/ui/Skeletons/SearchSkeleton.tsx";

export const SearchPageSkeleton = () => {
  return (
    <div className={s.skeleton}>
      <div>
        <TitleSkeleton/>
      </div>
      <div>
        <SearchSkeleton/>
      </div>
      <div>
        <TitleSkeleton/>
      </div>
      <div>
        <MoviesGridSkeleton count={5}/>
      </div>
    </div>
  );
};
