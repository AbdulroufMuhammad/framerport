import { motion } from "framer-motion";
const ContactButton = ({children}) => {
  return (
    <motion.button
      initial={{ backdropFilter: "blur(4px)" }} // Initial blur effect only on background
      whileHover={{ scale: 0.8, backdropFilter: "blur(0px)" }} // Remove blur on hover
      whileTap={{ scale: 0.6, backdropFilter: "blur(0px)", x: "-100vw" }} // Remove blur on tap
      transition={{ delay: 0.2, duration: 0.3 }}
      className="hover:bg-slate-800 border text-center text-white p-2.5 rounded-md"
    >
     {children}
    </motion.button>
  );
};

export default ContactButton;
