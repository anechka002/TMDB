import {SectionTitle} from "@/common/components";
import {
  useSearchMoviesQuery
} from "@/features/category-movies/api/moviesApi.ts";
import {SearchResults} from "@/features/search/ui/SearchResults.tsx";
import {SearchEmptyState} from "@/features/search/ui/SearchEmptyState.tsx";
import {
  SearchInput
} from "@/features/search/ui/SearchInput.tsx";
import {useSearchParams} from "react-router";

export const SearchPage = () => {

  const [searchParams, setSearchParams] = useSearchParams("");

  const search = searchParams.get("query") ?? '';

  const {data, isFetching} = useSearchMoviesQuery(
    {query: search},
    {skip: !search}
  )

  const handleSearch = (value: string) => {
    const trimmed = value.trim()
    if(trimmed){
      setSearchParams({query: trimmed});
    } else {
      setSearchParams({})
    }
  }

  const handleReset = () => {
    setSearchParams({});
  }

  const results = search ? (data?.results ?? []) : [];

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

        </>
      )}
    </>
  );
};