import { Routes,Route } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Navbar from "./components/Navbar";
import { Data } from "./Data";

function App() {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills Data={Data}/>}/>
        <Route path="/project" element={<Projects Data={Data}/>}/>
        <Route path="/contact" element={<Contact/>}/>
       </Routes>
    </div>
  );
}

export default App;
