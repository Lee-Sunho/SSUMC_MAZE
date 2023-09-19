"use client";
import { motion } from "framer-motion";
import { useEffect } from "react";

const pageEffect = {
  initial: {
    opacity: 0,
  },
  in: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  },
};

export const StartWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="pageWrapper"
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1.2 }}
      variants={pageEffect}
    >
      {children}
    </motion.div>
  );
};
