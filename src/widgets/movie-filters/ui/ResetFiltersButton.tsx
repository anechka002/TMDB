import s from './ResetFiltersButton.module.css'
import {Button} from "@/shared";

type Props = {
  handleOnResetFilters: () => void;
}

export const ResetFiltersButton = ({handleOnResetFilters}: Props) => {
  return (
    <Button className={s.filterButton} onClick={handleOnResetFilters}>Reset filters</Button>
  );
};