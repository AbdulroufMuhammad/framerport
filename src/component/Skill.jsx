import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
const items = [
  {
    id: "1",
    subtitle: "Crafting Seamless User Experiences",
    title: "Front-End Development",
    talk:"Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React.js. I specialize in creating intuitive interfaces that users love."
  },
  {
    id: "2",
    subtitle: "Bringing Your Ideas to Life with Motion",
    title: "Animations & Interactivity",
    talk:"Skilled in implementing animations and interactive elements using tools like Framer Motion to bring web applications to life."
  },
  {
    id: "3",
    subtitle: "Turning Challenges into Opportunities",
    title: "Problem Solving",
    talk:"Adept at troubleshooting and solving complex coding challenges. My approach involves breaking down problems and finding elegant solutions."
  },
  {
    id: "4",
    subtitle: "Designs That Adapt to Every Screen",
    title: "Responsive Design",
    talk:" Experienced in designing and developing responsive web applications that work seamlessly across various devices and screen sizes."
  },
];
const Skill = () => {
  const [selectedId, setSelectedId] = useState(null);

  // Disable scrolling when a card is selected
  useEffect(() => {
    if (selectedId) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedId]);

  // Animation variants for the section header
  const aboutItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  // Animation variants for skill cards
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.4 } },
  };

  return (
    <div className="relative flex flex-col items-center min-h-screen p-4">
      <motion.div
        variants={aboutItemVariants}
        initial="hidden"
        animate="visible"
        className="mb-10 text-white text-3xl text-center lg:text-left"
      >
        <h2>Skills & Expertise</h2>
        <motion.hr
          variants={aboutItemVariants}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="lg:w-56 w-56 max-md:m-auto border-4 rounded-lg my-4"
        />
      </motion.div>

      <div className="flex flex-wrap justify-center items-center">
        {items.map((item) => (
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 2 }}
            key={item.id}
            layoutId={item.id}
            onClick={() => setSelectedId(item.id)}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative cursor-pointer m-6 text-center pt-4 p-2 border-2  bg-transparent rounded-2xl shadow-xl transform transition-all hover:scale-105 hover:shadow-2xl"
            style={{ width: "250px", height: "200px" }}
          >
            <motion.h2 className="text-sm inline text-center  font-semibold text-white font-mono mt-2">
              {item.title}
              <hr className='border rounded-lg w-full mx-0' />
            </motion.h2>
            <motion.h2 className="text-[12px] mt-14  text-slate-300 font-monserat  ">
              {item.subtitle}
            </motion.h2>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            {items
              .filter((item) => item.id === selectedId)
              .map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={selectedId}
                  className="bg-[#030303] p-6 rounded-2xl shadow-2xl relative"
                  style={{ width: "300px", height: "200px" }}
                >
                  <motion.h2 className="text-lg font-semibold text-white mt-2">
                    {item.title}
                  </motion.h2>
                  <p className="text-[15px] mt-3 font-light text-white">
                    {item.talk}
                  </p>
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="absolute top-4 right-4 px-4 py-2 bg-slate-900 text-white rounded-full hover:bg-slate-500 transition-colors"
                  >
                    X
                  </motion.button>
                </motion.div>
              ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Skill;