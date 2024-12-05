import { api } from "Services";
import { useEffect, useState } from "react";
import home from "./Home.module.scss";
import Header from "Components/Header";
import Thumbnail from "Components/Thumbnail";
import Pagination from "Components/Pagination";

const LIMIT = 8;

export default function Home() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [paginationInfo, setPaginationInfo] = useState();
  const [total, setTotal] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    api
      .get("characters", {
        "axios-retry": {
          retries: 0,
        },
        params: {
          limit: LIMIT,
          offset,
        },
      })
      .then((response) => {
        // setTotal(response.data.data.total);
        // setPaginationInfo(response.data.data);
        setCharacters(response.data.data.results);
      })
      .catch((error) => {
        console.error("Show error axios characters == " + error.statusCode);
      });
  }, [offset]);

  return (
    <main>
      <Header classe={home.header}>
        <h1 className={home.header__title}>
          EXPLORE O UNIVERSO E CRIE SUA EQUIPE
        </h1>
        <p className={home.header__description}>
          Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
          generosa porção de heróis e vilões!
        </p>
      </Header>
      <section className={home.home__content}>
        <div className={home.home__characters}>
          {characters.length > 0 ? (
            characters.map((character) => (
              <Thumbnail
                format="vertical"
                id={character.id}
                image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
                name={character.name}
                description={character.description}
              />
            ))
          ) : (
            <h2>Nenhum personagem encontrado.</h2>
          )}
        </div>
        <Pagination
          limit={LIMIT}
          total={total}
          offset={offset}
          setOffset={setOffset}
        />
      </section>
    </main>
  );
}
