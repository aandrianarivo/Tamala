import "./App.css";
import AboutUs from "./components/AboutUs";
import Header from "./components/Nav/Header";
import OurServices from "./components/OurServices";
function App() {
  return (
    <>
      <div className="bg-stone-100">
        <Header />
        <OurServices />
        <AboutUs />
      </div>
    </>
  );
}

export default App;
