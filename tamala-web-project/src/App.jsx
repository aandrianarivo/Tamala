import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import Layout from "./components/Layout";
import Artisant from "./components/Artisant/Artisant";
import Craft from "./components/Craft/Craft";
import Gallery from "./components/Gallery/Gallery";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/Tamala/" element={<Layout />}>
            <Route path="/Tamala/" element={<Gallery />} />
            <Route path="/Tamala/discover/artisants" element={<Artisant />} />
            <Route path="/Tamala/discover/crafts" element={<Craft />} />
            <Route path="/Tamala/about" element={<AboutUs />} />
            <Route path="/Tamala/services" element={<OurServices />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
