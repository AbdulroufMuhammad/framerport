import React, { useRef } from "react";
import image1 from "../assets/image-01.jpg";
import image2 from "../assets/image-02.jpg";
import { motion, useInView } from "framer-motion";
import { width } from "@fortawesome/free-regular-svg-icons/faEnvelope";

const About = () => {
  const aboutRef = useRef(null);
  const isInViewAbout = useInView(aboutRef, {
    margin: "0px 0px -200px 0px",
    triggerOnce: false,
  });

  const journeyRef = useRef(null);
  const isInViewJourney = useInView(journeyRef, {
    margin: "0px 0px -200px 0px",
    triggerOnce: false,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
  };

  const aboutItemVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const journeyItemVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const aboutImageVariants = {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const journeyImageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div id="about-section" className=" mt-4">
      <motion.div
        ref={aboutRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInViewAbout ? "visible" : "hidden"}
        className="flex flex-col lg:flex-row lg:items-start lg:justify-center py-10"
      >
        <div className="lg:w-[50%] px-4 lg:px-10">
          <motion.h2
            variants={aboutItemVariants}
            className="mb-10 text-white flex justify-center flex-col  text-3xl text-center lg:text-left"
          >
            About Me
            <motion.hr
              variants={aboutItemVariants}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className=" lg:w-32 w-32 max-md:m-auto border-4 rounded-lg flex justify-center"
            ></motion.hr>
          </motion.h2>
          <motion.p
            variants={aboutItemVariants}
            className="font-light lg:text-2xl text-white text-center lg:text-left"
          >
            <span className="text-slate-600">Hello</span>, I'm Muhammad! Welcome
            to my corner of the web! I’m a passionate front-end web developer
            dedicated to crafting beautiful and functional digital experiences.
            With a keen eye for design and a knack for coding, I strive to
            create user-centric solutions that make a difference.
          </motion.p>
        </div>
        <motion.div
          variants={aboutImageVariants}
          className="flex justify-center lg:w-[50%] mt-10 lg:mt-0 lg:ml-10"
        >
          <img
            src={image1}
            width={500}
            alt="About me image"
            className="rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* My Journey Section */}
      <motion.div
        ref={journeyRef}
        variants={containerVariants}
        initial="hidden"
        animate={isInViewJourney ? "visible" : "hidden"}
        className="flex flex-col-reverse lg:flex-row lg:items-start lg:justify-center py-32 px-4 lg:px-10"
      >
        <div className="flex justify-center lg:w-[50%] mt-10 lg:mt-0 lg:mr-10">
          <motion.img
            src={image2}
            width={500}
            alt="My journey image"
            className="rounded-lg"
            variants={journeyImageVariants}
          />
        </div>
        <div className="lg:w-[50%] px-4 lg:px-10">
          <motion.h2
            variants={journeyItemVariants}
            className="mb-10 text-white text-3xl text-center lg:text-left"
          >
            My Journey
            <motion.hr
              variants={aboutItemVariants}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className=" lg:w-[10rem] w-[10rem] max-md:m-auto border-4 rounded-lg flex justify-center"
            ></motion.hr>
          </motion.h2>
          <motion.p
            variants={journeyItemVariants}
            className="font-light lg:text-2xl text-white text-center lg:text-left"
          >
            My journey in web development began with a fascination for how
            technology can enhance our daily lives. Over the years, I’ve honed
            my skills in creating engaging and responsive web applications,
            focusing on delivering seamless user experiences. From the basics of
            HTML and CSS to the intricacies of JavaScript frameworks, my goal
            has always been to blend aesthetics with functionality.
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
};

export default About;

// ### My Journey

////
// ### Projects

// I’ve had the opportunity to work on a variety of projects, from personal portfolios to dynamic web applications. Some highlights include:

// - **Interactive Chatbot**: Developed an AI-powered chatbot to assist freshmen with university registration, providing timely and relevant information.
// - **Portfolio Website**: Created a personal portfolio showcasing my work, skills, and achievements, with a focus on responsive design and engaging animations.
// - **E-commerce Platform**: Contributed to an e-commerce platform with a user-friendly interface and robust functionality, enhancing the shopping experience for users.

// ### My Philosophy

// I believe in the power of technology to transform ideas into reality. My approach to web development is rooted in a commitment to quality, creativity, and continuous learning. I stay updated with the latest trends and tools to ensure that my work is always at the cutting edge.

// ### Get in Touch

// I’m always excited to connect with fellow developers, designers, and anyone interested in web technology. Feel free to reach out to me through the contact form on this site or connect with me on [LinkedIn](https://www.linkedin.com/in/abdulrauf-muhammad-6a2641255/) and [GitHub](https://github.com/AbdulroufMuhammad).

// Thank you for visiting my site. I look forward to collaborating and creating something amazing together!

// ---

// Feel free to adjust the content based on your personal experiences, achievements, and specific areas of expertise.
