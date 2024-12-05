import About from "Pages/About";
import Home from "Pages/Home";
import PageDefault from "Pages/PageBase";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<PageDefault />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
