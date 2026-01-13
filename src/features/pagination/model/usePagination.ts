import {useSearchParams} from "react-router";

type UsePaginationResult = {
  currentPage: number;
  setPage: (page: number) => void;
}

export const usePagination = (): UsePaginationResult => {
  const [searchParams, setSearchParams] = useSearchParams("");

  const currentPage = Number(searchParams.get("page") ?? 1);

  const setPage = (page: number) => {
    setSearchParams(prev => {
      const next = new URLSearchParams(prev)
      next.set('page', String(page))
      return next
    })
  }

  return {
    currentPage,
    setPage,
  }
}