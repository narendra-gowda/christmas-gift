import { motion, useScroll, useTransform } from "framer-motion";

export default function SwipeHint() {
  const { scrollYProgress } = useScroll();

  // When scrollYProgress goes from 0 to 0.05, opacity goes 1 → 0
  const hintOpacity = useTransform(scrollYProgress, [0, 0.05], [4, -1]);

  return (
    <motion.div
      style={{ opacity: hintOpacity }}
      className="absolute bottom-20"
      animate={{
        y: [0, -30, 0],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <p className="text-white text-lg">Swipe up to open</p>
    </motion.div>
  );
}
