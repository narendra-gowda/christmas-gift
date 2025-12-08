// AuroraBackground.tsx

import React, { useEffect } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  motion,
  animate,
} from "framer-motion";
import { Stars } from "./Stars";

const COLORS_TOP = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"];

export const AuroraBackground = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const color = useMotionValue(COLORS_TOP[0]);

  useEffect(() => {
    animate(color, COLORS_TOP, {
      ease: "easeInOut",
      duration: 10,
      repeat: Infinity,
      repeatType: "mirror",
    });
  }, []);

  const backgroundImage = useMotionTemplate`
    radial-gradient(125% 125% at 50% 0%, #020617 50%, ${color})
  `;

  const backgroundImage1 = useMotionTemplate`
    radial-gradient(125% 125% at 50% 100%, #020617 50%, ${color})
  `;

  return (
    <>
      <motion.section
        style={{
          backgroundImage,
          marginBottom: "0.1px",
        }}
        className="relative grid min-h-screen place-content-center overflow-hidden bg-gray-950 px-4 py-24 text-gray-200"
      >
        <div className="relative z-10 flex flex-col items-center">
          <h1 className="max-w-3xl flex flex-row gap-2 items-center bg-gradient-to-br from-white to-gray-400 bg-clip-text text-center text-3xl font-medium leading-tight text-transparent sm:text-5xl sm:leading-tight md:text-7xl md:leading-tight">
            Dear Han <h2 className="text-4xl mt-1">🤍</h2>
          </h1>
          <p className="my-6 max-w-xl text-center text-base leading-relaxed md:text-lg md:leading-relaxed">
            You mean so much to me and this christmas I have something special
            for you. Scroll down to reveal your surprise
          </p>
        </div>
        <Stars />
      </motion.section>
      <motion.div
        style={{ backgroundImage: backgroundImage1 }}
        className="w-full h-full bg-gray-950 text-gray-200"
      >
        {children}
      </motion.div>
    </>
  );
};
