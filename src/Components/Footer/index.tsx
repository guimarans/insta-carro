import footer from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={footer.footer}>
      <div className={footer.footer__container}>
        <p className={footer.footer__text}>
          Data provided by Marvel. © 2023 MARVEL
        </p>
        <p className={footer.footer__text}>
          Desenvolvido por{" "}
          <a className={footer.footer__link} href="#">
            Anna Luiza
          </a>
        </p>
      </div>
    </footer>
  );
}
