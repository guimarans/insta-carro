import filter from "./Filter.module.scss";

export default function Filter({ hero }: any) {
  return (
    <nav className={filter.filter}>
      {Number(hero) > 1 ? (
        <p className={filter.filter__text}>Encontrados {hero} heróis</p>
      ) : (
        <p className={filter.filter__text}>Encontrado {hero} herói</p>
      )}

      <button className={filter.filter__favorites}>Somente favoritos</button>
    </nav>
  );
}
