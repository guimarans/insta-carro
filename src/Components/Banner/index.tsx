import Banner from "./Banner.module.scss";

export default function banner({ text }: any) {
  return (
    <header className={Banner.banner}>
      <h1 className={Banner.banner_call}>{text}</h1>
    </header>
  );
}
