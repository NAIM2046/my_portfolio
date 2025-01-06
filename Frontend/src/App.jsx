import About from "./components/About";
import Contactpage from "./components/Contactpage";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navber from "./components/Navber";
import Projects from "./components/Project";

function App() {
  return (
    <>
      <Navber></Navber>
      <Hero></Hero>
      <About></About>
      <Projects></Projects>
      <Contactpage></Contactpage>
      <Footer></Footer>
    </>
  );
}

export default App;
