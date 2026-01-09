import {useRandomPopularBackdrop} from "@/common/hooks";
import s from './HeroBanner.module.css'
import {IMAGE_BANNER_URL} from "@/common/config";
import {SearchInput} from "@/features/search/ui/SearchInput.tsx";
import {createSearchParams, useNavigate} from "react-router";

export const HeroBanner = () => {
  const navigate = useNavigate();

  const {backdrop, isLoading} = useRandomPopularBackdrop()

  const handleSearch = (value: string) => {
    if (!value.trim()) return;
    navigate({
      pathname: `/search`,
      search: createSearchParams({query: value}).toString()
    });
  }

  if(!backdrop || isLoading) return null

  return (
    <section
      className={s.hero}
      style={{backgroundImage: `url(${IMAGE_BANNER_URL}${backdrop})`}}
    >
      <div className={s.overlay} />

      <div className={s.container}>
        <div className={s.content}>
          <h1 className={s.title}> WELCOME</h1>
          <p className={s.subtitle}>Browse highlighted titles from TMDB</p>
          <SearchInput onSearch={handleSearch}/>
        </div>
      </div>
    </section>
  );
};