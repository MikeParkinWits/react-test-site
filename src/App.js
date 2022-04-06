import "./App.css";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";

import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import Menu from "./pages/Menu.js";
import About from "./pages/About.js";

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/menu" element={<Menu />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
