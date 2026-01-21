import {useAppDispatch, useAppSelector} from "@/shared/hooks";
import {
  selectRatingFrom,
  selectRatingTo, setRatingFrom, setRatingTo
} from "@/widgets/movie-filters/model/filters.slice.ts";
import s from './RatingSlider.module.css'

export const RatingSlider = () => {

  const dispatch = useAppDispatch();
  const from = useAppSelector(selectRatingFrom)
  const to = useAppSelector(selectRatingTo)

  const left = (from / 10) * 100;
  const right = 100 - (to / 10) * 100;

  return (
    <div className={s.container}>
      <div className={s.header}>
        <span>Rating</span>
        <span className={s.values}>{from.toFixed(1)} – {to.toFixed(1)}</span>
      </div>
      <div className={s.ranges}>
        <div className={s.rangeTrack}></div>
        <div className={s.rangeFill} style={{ left: `${left}%`, right: `${right}%` }}></div>
        <input
          className={s.rangeInput}
          aria-label={'Minimum rating'}
          type="range"
          min={0}
          max={10}
          step={0.1}
          value={from ?? 0}
          onChange={(e) => {
            const value = +e.target.value;
            if(value <= to) {
              dispatch(setRatingFrom(value));
            }
          }}
        />
        <input
          className={s.rangeInput}
          aria-label={'Maximum rating'}
          type="range"
          min={0}
          max={10}
          step={0.1}
          value={to ?? 0}
          onChange={(e) => {
            const value = +e.target.value;
            if(value >= from) {
              dispatch(setRatingTo(value));
            }
          }}
        />
      </div>
    </div>
  );
};