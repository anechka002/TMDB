import s from "./Search.module.css";
import { useForm } from "react-hook-form";
import { Cross2Icon } from "@radix-ui/react-icons";

type FormValues = {
  query: string;
};

type Props = {
  onSearch: (query: string) => void;
  onReset?: () => void;
  initialValue?: string;
};

export const SearchInput = ({ onSearch, onReset, initialValue = "" }: Props) => {
  const { register, handleSubmit, reset, watch } = useForm<FormValues>({
    defaultValues: { query: initialValue },
  });

  const value = watch("query");

  const submit = handleSubmit(({ query }) => {
    onSearch(query.trim());
  });

  const handleClear = () => {
    reset({ query: "" }); // сброс
    onReset?.();
  };

  return (
    <form className={s.wrapper} onSubmit={submit}>
      <div className={s.inputWrapper}>
        <input
          className={s.input}
          type="text"
          placeholder="Search movies..."
          {...register("query")}
        />

        {value && (
          <button
            type="button"
            className={s.clear}
            onClick={handleClear}
            aria-label="Clear search"
          >
            <Cross2Icon />
          </button>
        )}
      </div>

      <button className={s.button} type="submit">
        Search
      </button>
    </form>
  );
};
