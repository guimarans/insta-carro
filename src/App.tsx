import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import Home from "Pages/Home";
import About from "Pages/About";
import Footer from "Components/Footer";

function App() {
  return (
    <>
      <main>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </main>
      <Footer />
    </>
  );
}

export default App;
