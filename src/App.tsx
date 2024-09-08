import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "Pages/Home";
import About from "Pages/About";
import PageDefault from "Pages/PageBase";

function App() {
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

export default App;
