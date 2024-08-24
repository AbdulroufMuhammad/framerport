import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  { id: "1", subtitle: "Subtitle 1", title: "Front-End Development" },
  { id: "2", subtitle: "Subtitle 2", title: "Animations & Interactivity" },
  { id: "3", subtitle: "Subtitle 1", title: "Problem Solving" },
  { id: "4", subtitle: "Subtitle 2", title: "Title 2" },
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

  return (
    <div className="relative flex flex-wrap justify-center items-center min-h-screen p-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(item.id)}
          className="relative cursor-pointer m-4 p-4 bg-white rounded-2xl shadow-lg transform mt-[40px] transition-all hover:scale-105 hover:shadow-xl"
          style={{ width: "180px", height: "200px" }}
        >
          <motion.h2 className="text-md font-semibold text-gray-800 mt-2">
            {item.title}
          </motion.h2>
          <motion.h5 className="text-xs font-medium text-gray-600">
            {item.subtitle}
          </motion.h5>{" "}
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <div className="fixed inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            {items
              .filter((item) => item.id === selectedId)
              .map((item) => (
                <motion.div
                  key={item.id}
                  layoutId={selectedId}
                  className="bg-white p-2 rounded-2xl shadow-2xl"
                  style={{ width: "300px", height: "200px" }}
                >
                  {/* <motion.h5 className="text-sm font-medium text-gray-600">{item.subtitle}</motion.h5>
                  <motion.h2 className="text-lg font-semibold text-gray-800 mt-2">{item.title}</motion.h2> */}
                  <motion.button
                    onClick={() => setSelectedId(null)}
                    className="mb-14  max-md:top-[15rem] absolute flex flex-1 px-4 py-2 bg-slate-900 text-white rounded-full   hover:bg-slate-500 transition-colors lg:ml "
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

// ### Skills & Expertise

// - **Front-End Development**: Proficient in HTML, CSS, JavaScript, and modern front-end frameworks like React.js. I specialize in creating intuitive interfaces that users love.
// - **Animations & Interactivity**: Skilled in implementing animations and interactive elements using tools like Framer Motion to bring web applications to life.
// - **Problem Solving**: Adept at troubleshooting and solving complex coding challenges. My approach involves breaking down problems and finding elegant solutions.
