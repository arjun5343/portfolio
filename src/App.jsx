
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Education from "./components/education";

function App() {
  

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Education/>
        <Contact/>
        <Footer/>
        
      </div>
    </>
  );
}

export default App;
