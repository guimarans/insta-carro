import Header from "Components/Header";
import Character from "./Characters";

import home from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <Header classe={home.header}>
        <h1 className={home.header__title}>
          EXPLORE O UNIVERSO E CRIE SUA EQUIPE
        </h1>
        <p className={home.header__description}>
          Os melhores personagens já feitos em quadrinhos. Fique viciado em uma
          generosa porção de heróis e vilões!
        </p>
      </Header>
      <Character />
    </>
  );
}
