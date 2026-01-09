import s from './Search.module.css'

type Props = {
  text: string
}

export const SearchEmptyState = ({text}: Props) => {
  return <p className={s.title}>{text}</p>
};