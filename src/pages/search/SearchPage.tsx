import {SearchResults} from "@/features/search/ui/SearchResults.tsx";
import {SearchEmptyState} from "@/features/search/ui/SearchEmptyState.tsx";
import {
  SearchInput
} from "@/features/search/ui/SearchInput.tsx";
import {useSearchParams} from "react-router";
import {usePagination} from "@/features/pagination/model/usePagination.ts";
import {Pagination} from "@/features/pagination/ui/Pagination.tsx";
import {useSearchMoviesQuery} from "@/features/search/api/search.api.ts";
import {SectionTitle} from "@/shared";
import {SearchPageSkeleton} from "@/pages/search/SearchPageSkeleton.tsx";

export const SearchPage = () => {

  const [searchParams, setSearchParams] = useSearchParams("");

  const {currentPage, setPage} = usePagination()

  const search = searchParams.get("query") ?? '';

  const {data, isLoading, isFetching} = useSearchMoviesQuery(
    {query: search, page: currentPage},
    {skip: !search}
  )

  const handleSearch = (value: string) => {
    const trimmed = value.trim()

    setSearchParams(prev => {
      const next = new URLSearchParams(prev);

      if (trimmed) {
        next.set("query", trimmed);
        next.set("page", "1");
      } else {
        next.delete("query");
        next.delete("page");
      }

      return next;
    });
  }

  const handleReset = () => {
    setSearchParams({});
  }

  const results = search ? (data?.results ?? []) : [];

  if (isLoading) {
    return <SearchPageSkeleton />
  }

  return (
    <>
      <SectionTitle title={'Search Results'}/>
      <SearchInput onSearch={handleSearch} onReset={handleReset} initialValue={search} />

      {!search && (
        <SearchEmptyState text={'Enter a movie title to start searching'}/>
      )}

      {search && !isFetching && data?.results.length === 0 && (
        <>
          <SectionTitle title={`Results for "${search}"`} />
          <SearchEmptyState text={`No matches found for "${search}"`}/>
        </>
      )}

      {results.length > 0 && (
        <>
          <SectionTitle title={`Results for "${search}"`} />
          <SearchResults movies={results} />
          <Pagination currentPage={currentPage} setCurrentPage={setPage} pagesCount={data?.total_pages ?? 1} />
        </>
      )}
    </>
  );
};