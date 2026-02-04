import image from '../../assets/404.jpg'
import s from './PageNotFound.module.css'
import {NavLink} from "react-router";
import {Path} from "@/app/routing";
import {Button} from "@/shared";

export const PageNotFound = () => {
  return (
    <section className={s.page}>
      <div className={s.imageWrapper}>
        <img
          className={s.image}
          src={image}
          alt="image"
        />
      </div>
      <p className={s.subtitle}>Page not found. We can’t find what you’re looking for</p>
      <div>
        <NavLink to={Path.Main}>
          <Button>To main page</Button>
        </NavLink>
      </div>
    </section>
  );
};