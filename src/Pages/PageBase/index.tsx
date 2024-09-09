import Footer from "Components/Footer";
import { Outlet } from "react-router-dom";

export default function PageDefault() {
  return (
    <>
      <Outlet />
      <Footer />
    </>
  );
}
