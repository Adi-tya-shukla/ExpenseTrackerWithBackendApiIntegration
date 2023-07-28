import React from "react";
import Header from "./Components/UI/Header";
import Footer from "./Components/UI/Footer";
import Education from "./Components/Education/Education";
import About from "./Components/About/About";
import Skills from "./Components/About/Skills";

function App() {
  return (
    <div>
      <Header />
      <main>
        <About />
        <Education />
        <Skills />
      </main>
      <Footer />
    </div>
  );
}

export default App;
