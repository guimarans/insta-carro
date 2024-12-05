import search from "./Pagination.module.scss";

const MAX_ITEMS = 8;
const CURRENT_ITEM = 1;
const MAX_LEFT = (MAX_ITEMS - CURRENT_ITEM) / 2;

export default function Pagination({ limit, total, offset, setOffset }: any) {
  const currentPage = offset ? offset / limit + 1 : 1;
  const countPages = Math.ceil(total / limit);
  const firstPage = Math.max(currentPage - MAX_LEFT, 1);

  return (
    <ul className={search.search}>
      <li className={search.search__arrow}>
        <button onClick={() => currentPage - 1}>anterior</button>
      </li>
      {Array.from({ length: Math.min(MAX_ITEMS, countPages) })
        .map((_, index) => index + firstPage)
        .map((page) => (
          <li
            key={page}
            className={
              page === currentPage
                ? `${search.search__item} ${search.search_active}`
                : search.search__item
            }
          >
            <button onClick={() => setOffset((page - 1) * limit)}>
              {page}
            </button>
          </li>
        ))}
      <li className={search.search__arrow}>
        <button onClick={() => currentPage + 1}> proximo </button>
      </li>
    </ul>
  );
}
