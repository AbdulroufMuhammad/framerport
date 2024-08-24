import React, { useState } from "react";
import { motion } from "framer-motion";
import ContactButton from "./Button";
import profile from "../assets/Profile.jpg";
import Loader from "./Loader"; // Ensure Loader is properly imported
import '@dotlottie/player-component'; // Import the Lottie player component

const Hero = () => {
  const [showHero, setShowHero] = useState(false);

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
              src="https://lottie.host/ed07308b-3718-4158-8882-b6fc5bd62f57/r6mh5Uvy9W.json"
              background="transparent"
              speed="1"
              style={{ width: "150px", height: "150px" }}
              loop
              autoplay
            ></dotlottie-player>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Hero;
