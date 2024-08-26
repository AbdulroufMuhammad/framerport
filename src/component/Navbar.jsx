import React from "react";
import { delay, motion, px } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons/faEnvelope";
import { faEnvelopeOpen } from "@fortawesome/free-regular-svg-icons";
import { Contact } from "./Contactus";
const Navbar = () => {
  return (
    <nav className=" flex flex-1">
      <div className="flex ml-10 gap-4">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 0.8 }}
          transition={{ delay: 1.5 }}
          className="ml-[10%] border-2 border-white rounded border-spacing-5 p-2 mt-3"
        >
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            transition={{ delay: 1.8 }}
            className="text-white font-mono font-bold text-4xl"
          >
            MM
          </motion.h2>
        </motion.div>
        <div className="flex items-center font-mono text-2xl pt-2">
          <p className="text-white">MindMesh</p>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-center fixed  md:flex z-10 ml-[80%] gap-2 mt-2"
        >
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{
              scale: 0.8,
              rotate: -180,
              borderRadius: "100%",
            }}
            className="rounded-full"
          >
            <a
              href="https://github.com/AbdulroufMuhammad"
              className="text-white"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
            className="rounded-full"
          >
            <a
              href="https://www.linkedin.com/in/abdulrauf-muhammad-6a2641255/"
              className="text-white"
            >
              <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.2, rotate: 180 }}
            whileTap={{ scale: 0.8, rotate: -180, borderRadius: "100%" }}
            className="rounded-full"
          >
            <a
              href="mailto:abdulraufmuhammad28@gmail.com"
              className="text-white"
            >
              <FontAwesomeIcon icon={faEnvelope} size="2x" />
            </a>
          </motion.div>
          <motion.div
            className="rounded-full"
          >
          </motion.div>
        </motion.div>
      </div>
      <motion.hr
        initial={{ x: -250 }}
        animate={{ x: 0 }}
        transition={{ delay: 2 }}
        className="rounded-full border-4 border-white w-[80%] absolute z-10 top-20 max-md:hidden flex flex-1 ml-32"
      />
    </nav>
  );
};

export default Navbar;
