import React, { useState, useEffect } from "react";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Loader from "./component/Loader";
import Skill from "./component/Skill";
import logo from '../src/assets/logo.jpg'
import { motion } from "framer-motion";
import '@dotlottie/player-component';
// import {Footer} from '../src/component/Footer'
import{ Contact} from '../src/component/Contactus'
("use client");

import { Footer } from "flowbite-react";
const App = () => {
  const [isLoaderComplete, setIsLoaderComplete] = useState(false);

  // Handle loader completion
  const handleLoaderComplete = () => {
    setIsLoaderComplete(true);
    // Scroll to top after the loader completes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const handleScrollDown = () => {
    const targetSection = document.getElementById("about-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  const handleScrollHome = () => {
    const targetSection = document.getElementById("home");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <Navbar />
      <section>
        {!isLoaderComplete && <Loader onComplete={handleLoaderComplete} />}
        <section id="hero-section" className="mt-6">
          <Hero />
        </section>
        <section className="lg:mt-44 my-32 overflow-x-hidden">
          <About />
        </section>
        <section className=" my-32">
          <Skill />
        </section>
        <section>
    <Footer container className="bg-[#030303]">
      <div className="w-full text-center">
        <div className="w-full justify-between sm:flex sm:items-center sm:justify-between">
         <div className=" flex pb-4">

           <Footer.Brand
           onClick={handleScrollHome}
            src={logo}
            alt="Flowbite Logo"
            name="Flowbite"
            className="scroll-smooth"
          />
            <div className="flex items-center  font-mono text-2xl">
          <p className="text-white">MindMesh</p>
        </div>
         </div>
         
          <Footer.LinkGroup>
            <Footer.Link onClick={handleScrollDown}>About</Footer.Link>
            <Footer.Link href="#">Privacy Policy</Footer.Link>
            <Footer.Link href="#">Licensing</Footer.Link>
            <Footer.Link className=" cursor-pointer"  onClick={handleScrollHome} >Contact</Footer.Link>
          </Footer.LinkGroup>
        </div>
        <Footer.Divider />
        <Footer.Copyright className="pb-4 cursor-pointer"  onClick={handleScrollHome} by="MindMesh™" year={2022} />
      </div>
    </Footer>
 
        </section>

      </section>
    </>
  );
};

export default App;
