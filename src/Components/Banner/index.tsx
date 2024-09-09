import banner from "./Banner.module.scss";

export default function Banner() {
  return (
    <header className={banner.banner}>
      <div className={banner.banner__container}>
        <h1 className={banner.banner__call}>
          DESCUBRA TODOS OS <br /> QUADRINHOS <br />
          DESTE PERSONAGEM
        </h1>
      </div>
    </header>
  );
}
