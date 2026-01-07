import {useRandomPopularBackdrop} from "@/common/hooks";
import s from './HeroBanner.module.css'
import {IMAGE_BANNER_URL} from "@/common/config";

export const HeroBanner = () => {
  const {backdrop, isLoading} = useRandomPopularBackdrop()
  if(!backdrop || isLoading) return <div>HELLO</div>

  return (
    <section
      className={s.hero}
      style={{backgroundImage: `url(${IMAGE_BANNER_URL}${backdrop})`}}
    >

    </section>
  );
};