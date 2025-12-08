import tmdbLogo from '../../../assets/tmdbLogo.svg';
import s from './TmdbLogo.module.css'

type TmdbLogoProps =  {
  width?: number;
}

export const TmdbLogo = ({width = 120}: TmdbLogoProps) => {
  return <img className={s.logo} src={tmdbLogo} width={width} alt={'logo'} />
};