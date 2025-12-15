import s from './SectionTitle.module.css';

type Props = {
  title: string
}

export const SectionTitle = ({title}: Props) => {
  return (
    <section className={s.title}>
      <h3>{title}</h3>
    </section>
  )
}