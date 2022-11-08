import { Home } from "./sections/Home/Home";
import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Skillset } from "./sections/Skillset/Skillset";
import { About } from "./sections/About/About";
import { Contact } from "./sections/Contact/Contact";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Home />
        <Skillset />
        <About />
        <Contact /> 
        <Footer />
      </div>
    </>
  );
}

export default App;
