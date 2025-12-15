import {CategoryList} from "@/features/category-movies/ui/CategoryList.tsx";
import {SectionTitle} from "@/common/components";

export const CategoryPage = () => {
  return (
    <>
      <SectionTitle title="Popular Movies"/>
      <CategoryList/>
    </>
  );
};
