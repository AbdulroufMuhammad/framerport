import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const Loader = ({ onComplete }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      onComplete(); // Notify when the loader animation is complete
    }, 1500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence mode="wait" onExitComplete={onComplete}>
      {isVisible && (
        <motion.div
          initial={{ y: 0, borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
          animate={{ y: "-100vh", borderBottomLeftRadius: "25%", borderBottomRightRadius: "25%" }}
          exit={{ y: "-100vh", borderBottomLeftRadius: "0%", borderBottomRightRadius: "0%" }}
          transition={{ duration: 1.5 }}
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-white z-50"
        >
          <h1>Hello</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
