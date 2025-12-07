import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";

export default function SwipeHint() {
  const { scrollYProgress } = useScroll();
  const [showKeepScrolling, setShowKeepScrolling] = useState(true);
  const [showHint, setShowHint] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setShowKeepScrolling(value <= 0.4);
    setShowHint(!(value >= 0.95));
  });

  return showHint ? (
    <motion.div
      className="absolute bottom-15"
      animate={{
        y: [0, -30, 0],
      }}
      transition={{
        duration: 1.6,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      <p className="text-white text-md">
        {showKeepScrolling ? "Scroll down to open" : "Keep scrolling down"}
      </p>
    </motion.div>
  ) : null;
}
