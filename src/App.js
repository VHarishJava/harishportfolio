import React from "react";

import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificate from "./components/Certificate/Certificate";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Intro />
      <About />
      <Skills />
      <Certificate/>
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;