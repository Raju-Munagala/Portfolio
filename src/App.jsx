import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = ()=>{
  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <NavBar/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App;
