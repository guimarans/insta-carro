import search from "./Search.module.scss";

interface InputProps {
  type?: string;
  required?: boolean;
  placeholder?: string;
  id?: string;
  class?: string;
  onChange?: any;
  value?: string;
}

export default function Search({ ...inputProps }: InputProps) {
  return (
    <form className={search.form}>
      <input className={search.form__input} {...inputProps} />
      <button className={search.form__button} type="button">
        Pesquisar
      </button>
    </form>
  );
}
