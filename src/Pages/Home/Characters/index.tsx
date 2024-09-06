import { useEffect, useState } from "react";
import { api } from "Services";
import Filter from "Components/Filter";
import Thumbnail from "Components/Thumbnail";
import Pagination from "Components/Pagination";
import Search from "Components/Search";
import home from "../Home.module.scss";

const LIMIT = 8;

export default function Character() {
  const [characters, setCharacters] = useState<any[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<Number>();
  const [searchHero, setSearchHero] = useState("");
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    api
      .get("characters", {
        "axios-retry": {
          retries: 0,
        },
        params: {
          limit: LIMIT,
        },
      })
      .then((response) => {
        //setCharacters(response.data.data.results);
        // setPaginationInfo(response.data.data);
        console.log(response.data.data.results);
      })
      .catch((error) => {
        console.error("Show error axios characters == " + error.statusCode);
      });
  }, [characters]);

  return (
    <section className={home.home__content}>
      <Search
        onChange={(e: any) => setSearchHero(e.target.value)}
        value={searchHero}
        placeholder="Procure por heróis"
      />

      <Filter hero="1" />

      <div className={home.home__characters}>
        {characters.map((character) => (
          <Thumbnail
            format="vertical"
            id={character.id}
            image={`${character.thumbnail.path}.${character.thumbnail.extension}`}
            name={character.name}
            description={character.description}
          />
        ))}
      </div>
      <Pagination />
    </section>
  );
}
