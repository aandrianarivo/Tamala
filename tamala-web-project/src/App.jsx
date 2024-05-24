import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Nav/Header";
import OurServices from "./components/OurServices";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <>
      <div className="bg-white">
        <Header />
        <div id="services">
          <OurServices />
        </div>
        <div id="about">
          <AboutUs />
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
