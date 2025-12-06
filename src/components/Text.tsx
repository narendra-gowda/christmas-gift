import { type FC } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Text: FC<{ text: string }> = ({ text }) => {
  const { scrollYProgress } = useScroll();

  // When scrollYProgress goes from 0 to 0.05, opacity goes 1 → 0
  const hintOpacity = useTransform(scrollYProgress, [0, 0.03], [2, -1]);
  const progressY = useTransform(scrollYProgress, [0, 0.04], [50, -40]);
  return (
    <motion.div
      className=" text-center text-white text-3xl font-bold"
      animate={
        {
          // y: [0, -20, 0], // floating motion
          // opacity: 1, // subtle fade
        }
      }
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      style={{ opacity: hintOpacity, y: progressY }}
    >
      {text}
    </motion.div>
  );
};
