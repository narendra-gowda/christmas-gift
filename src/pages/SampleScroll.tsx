import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function AppleScroll() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 1.6]);
  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={ref} className="h-[200vh]">
      <motion.h1
        style={{ scale, opacity }}
        className="sticky top-0 h-screen flex items-center justify-center text-white text-6xl font-bold"
      >
        🎁
      </motion.h1>
    </div>
  );
}
