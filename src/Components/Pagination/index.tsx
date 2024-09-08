import search from "./Pagination.module.scss";

export default function Pagination() {
  return (
    <ul className={search.search}>
      <li className={search.search__arrow}>
        <button> anterior </button>
      </li>
      <li className={`${search.search__item} ${search.search_active}`}>
        <button>1</button>
      </li>
      <li className={search.search__item}>
        <button>2</button>
      </li>
      <li className={search.search__item}>
        <button>3</button>
      </li>
      <li className={search.search__item}>
        <button>4</button>
      </li>
      <li className={search.search__item}>
        <button>25</button>
      </li>
      <li className={search.search__arrow}>
        <button> Proximo </button>
      </li>
    </ul>
  );
}
