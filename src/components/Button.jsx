import React from "react";
import { motion } from "framer-motion";

const Button = ({ styles }) => (
  <motion.button
    type="button"
    className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-[#F4CE14] rounded-[10px] outline-none ${styles}`}
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.9 }}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 }}
  >
    Get Started
  </motion.button>
);

export default Button;
