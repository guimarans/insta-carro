import Search from "Components/Search";
import filter from "./Filter.module.scss";

export default function Filter({ total }: any) {
  return (
    <>
      <Search placeholder="Procure por heróis" />

      <nav className={filter.filter}>
        {Number(total) > 1 ? (
          <p className={filter.filter__text}>Encontrados {total} heróis</p>
        ) : (
          <p className={filter.filter__text}>Encontrado {total} herói</p>
        )}

        <button className={filter.filter__favorites}>Somente favoritos</button>
      </nav>
    </>
  );
}
