"use client";

import React from "react";
import { motion } from "framer-motion";

const AnimatedContainer = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0 ,y: 10 }}
      animate={{ opacity: 1, y:0 }}
      transition={{ duration: 0.5 }} 
    >
      {children}
    </motion.div>
  );
};

export default AnimatedContainer;
