import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactButton from "./Button";
import profile from "../assets/Profile.jpg";
import Loader from "./Loader"; 
import '@dotlottie/player-component'; 

const Hero = () => {
  const [showHero, setShowHero] = useState(false);

  // Function to handle the scroll down
  const handleScrollDown = () => {
    const targetSection = document.getElementById("about-section");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {!showHero && <Loader onComplete={() => setShowHero(true)} />}
      {showHero && (
        <motion.div className="relative lg:mt-14">
          <div className="flex justify-center">
            <img
              src={profile}
              alt="profile"
              width={200}
              height={200}
              className="lg:w-32 rounded-full"
            />
          </div>
          <div>
            <h3 className="text-white text-3xl text-center">
              Hi, I'm Muhammad
            </h3>
            <p className="font-mono text-white lg:text-2xl mt-4 text-center">
              Building Interactive and Responsive Front-End Solutions, <br />{" "}
              with Precision and Efficiency.
            </p>
          </div>
          <div className="flex justify-center mt-20">
            <ContactButton>
              <a
                href="mailto:abdulraufmuhammad28@gmail.com"
                className="w-full h-full"
              >
                Contact Me
              </a>
            </ContactButton>
          </div>
          <div className="flex justify-center mt-10">
            <dotlottie-player
              src="https://lottie.host/b8630a83-180e-44b8-992c-eade775d3134/Baz2c8NrE8.json" // Replace with your own Lottie file URL or local path
              background="transparent"
              speed="1"
              style={{ width: "150px", height: "100px", cursor: "pointer", color: "white" }}
              loop
              autoplay
              onClick={handleScrollDown} // Add onClick to trigger scroll down
            ></dotlottie-player>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
