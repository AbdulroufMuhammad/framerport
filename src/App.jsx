import React, { useState, useEffect } from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Loader from "./component/Loader";
import Skill from "./component/Skill";
import '@dotlottie/player-component';
import{ Contact} from '../src/component/Contactus'

const App = () => {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  // Handle loader completion
  const handleLoaderComplete = () => {
    setIsLoaderComplete(true);
    // Scroll to top after the loader completes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Navbar />
      <section>
        {!isLoaderComplete && <Loader onComplete={handleLoaderComplete} />}
        <section id="hero-section">
          <Hero />
        </section>
        <section className="lg:mt-44 my-32 overflow-x-hidden">
          <About />
        </section>
        <section className=" my-32">
          <Skill />
        </section>
      </section>
    </>
  );
};

export default App;
