import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useState } from "react";

export default function SwipeHint() {
  const { scrollYProgress } = useScroll();
  const [showKeepScrolling, setShowKeepScrolling] = useState(true);

  // When scrollYProgress goes from 0 to 0.05, opacity goes 1 → 0
  const hintOpacity = useTransform(scrollYProgress, [0, 1.3], [6, -2]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    console.log(value);
    if (value <= 0.25) {
      setShowKeepScrolling(true);
    } else {
      setShowKeepScrolling(false);
    }
  });

  return (
    <motion.div
      style={{ opacity: hintOpacity }}
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
      <p className="text-white text-lg">
        {showKeepScrolling ? "Scroll up to open" : "Keep scrolling up"}
      </p>
    </motion.div>
  );
}
