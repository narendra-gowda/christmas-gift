import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import boxClosed from "../assets/box-closed.png";
import boxOpen from "../assets/box-open.png";
import boxFullOpen from "../assets/box-full-opened.png";
import FlipCard from "./FlipCard";
import SwipeHint from "../components/SwipeHint";
import { SnowFall } from "../components/SnowFall";
import { Stars } from "../components/Stars";

export default function ScrollGiftReveal({ onFlip }: any) {
  const ref = useRef(null);
  const [enableSnow, setEnableSnow] = useState(false);

  // Scroll progress across the entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const getIsFlipped = (value: boolean) => {
    onFlip(value);
  };

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setEnableSnow(value >= 0.2);
  });

  // Box shake (0–10% scroll)
  const shake = useTransform(scrollYProgress, [0, 0.1], [-5, -5]);

  const openProgress = useTransform(
    scrollYProgress,
    [0.23, 0.27, 0.3],
    [-1, 2.5, -1]
  );

  const openProgressFullOpen = useTransform(
    scrollYProgress,
    [0.27, 0.3],
    [-1, 2.5]
  );

  // Ticket animation
  const ticketY = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.74, 0.76],
    [40, -100, 50, 50]
  );
  const ticketX = useTransform(
    scrollYProgress,
    [0.4, 0.4, 0.6],
    [-50, -50, -40]
  );
  const ticketOpacity = useTransform(scrollYProgress, [0.3, 0.35], [-1, 1]);
  const ticketScale = useTransform(scrollYProgress, [0.63, 0.8], [0.1, 1.2]);

  return (
    <div ref={ref} className="h-[400vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center flex-col justify-center">
        <div className="pointer-events-none absolute inset-0">
          <Stars />
          <SnowFall isVisible={enableSnow} />
        </div>

        <div className="relative w-64 h-64 flex items-center justify-center ml-20 -mt-30">
          <motion.div
            className="absolute z-20"
            children={<FlipCard onFlip={getIsFlipped} />}
            style={{
              color: "black",
              borderRadius: 5,
              y: ticketY,
              x: ticketX,
              opacity: ticketOpacity,
              scale: ticketScale,
            }}
          />

          {/* Box closed */}
          <motion.img
            src={boxClosed}
            alt="box closed"
            className="absolute z-10"
            style={{
              rotate: shake,
              width: "160px",
              height: "130px",
              marginRight: 108,
              marginBottom: 11,
              rotateZ: 5,
              opacity: useTransform(scrollYProgress, [0.2, 0.26], [4, 0]),
            }}
          />

          {/* Box partially opened */}
          <motion.img
            src={boxOpen}
            alt="box open"
            className="absolute z-10"
            style={{
              opacity: openProgress,
            }}
          />
          {/* Box fully opened */}
          <motion.img
            src={boxFullOpen}
            alt="box open"
            className="absolute z-10"
            style={{
              marginTop: 57,
              marginRight: 30,
              height: "122px",
              width: "235px",
              opacity: openProgressFullOpen,
            }}
          />
        </div>
        <SwipeHint />
      </div>
      <style>{`
    @keyframes fall {
    from { transform: translateY(-10px); }
    to { transform: translateY(110vh); }
    }
    .animate-fall {
    animation-name: fall;
    animation-timing-function: linear;
    animation-iteration-count: infinite;
    }

    @keyframes confettiFall {
    0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
    100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
    }
    .animate-confetti {
    animation-name: confettiFall;
    animation-timing-function: ease-in;
    animation-iteration-count: infinite;
    }

    @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
    }
    .animate-fade-in {
    animation: fadeIn 0.8s ease-out;
    }

    @keyframes slowBounce {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-8px); }
    }
    .animate-bounce-slow {
    animation: slowBounce 2.2s infinite;
    }
    `}</style>
    </div>
  );
}
