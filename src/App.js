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
        <Route path="/react-test-site" element={<Home />} />
        <Route path="/react-test-site/men" element={<Menu />} />
        <Route path="/react-test-site/abou" element={<About />} />
        <Route path="/react-test-site/contac" element={<About />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
