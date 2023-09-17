"use client";
import { motion } from "framer-motion";

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

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="pageWrapper"
      initial="initial"
      animate="in"
      exit="out"
      transition={{ duration: 1.5 }}
      variants={pageEffect}
    >
      {children}
    </motion.div>
  );
};
