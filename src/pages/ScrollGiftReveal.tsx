import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import boxClosed from "../assets/box-closed.png";
import boxOpen from "../assets/box-open.png";
import boxFullOpen from "../assets/box-full-opened.png";
import FlipCard from "./FlipCard";
import SwipeHint from "../components/SwipeHint";
import { Text } from "../components/Text";

export default function ScrollGiftReveal() {
  const ref = useRef(null);

  // Scroll progress across the entire section
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Box shake (0–10% scroll)
  const shake = useTransform(scrollYProgress, [0, 0.1], [-5, -5]);

  // Box opens (10–40% scroll)
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

  // Ticket rises (40–70% scroll)
  const ticketY = useTransform(
    scrollYProgress,
    [0.2, 0.5, 0.74, 0.76],
    [90, -150, 50, 50]
  );
  const ticketX = useTransform(
    scrollYProgress,
    [0.4, 0.4, 0.6],
    [-50, -50, -40]
  );
  const ticketOpacity = useTransform(scrollYProgress, [0.3, 0.35], [-1, 1]);

  // Ticket grows fullscreen (70–100% scroll)
  const ticketScale = useTransform(scrollYProgress, [0.63, 1], [0.1, 2.1]);

  return (
    <div ref={ref} className="h-[400vh]">
      {/* Sticky container */}
      <div className="sticky top-0 h-screen flex items-center flex-col justify-center">
        {/* Snow effect */}
        <div className="pointer-events-none absolute inset-0">
          {Array.from({ length: 60 }).map((_, i) => (
            <div
              key={i}
              className="absolute bg-white rounded-full opacity-80 animate-fall"
              style={{
                width: Math.random() * 4 + 2 + "px",
                height: Math.random() * 4 + 2 + "px",
                top: -10,
                left: Math.random() * 100 + "%",
                animationDuration: Math.random() * 3 + 2 + "s",
                animationDelay: Math.random() * 5 + "s",
              }}
            ></div>
          ))}
          <Text text="To my Han ♥️" />
        </div>
        <div className="relative w-64 h-64 flex items-center justify-center ml-20">
          {/* Ticket */}
          {/* <motion.img
            src={ticket}
            alt="ticket"
            className="absolute z-20"
            style={{
              y: ticketY,
              x: ticketX,
              opacity: ticketOpacity,
              scale: ticketScale,
            }}
          /> */}

          <motion.div
            className="absolute z-20"
            children={<FlipCard />}
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
              opacity: useTransform(scrollYProgress, [0.2, 0.26], [4, 0]), // fade away when opening
            }}
          />

          {/* Box open */}
          <motion.img
            src={boxOpen}
            alt="box open"
            className="absolute z-10"
            style={{
              opacity: openProgress, // fades in as scroll progresses
            }}
          />
          {/* Box fully open */}
          <motion.img
            src={boxFullOpen}
            alt="box open"
            className="absolute z-10"
            style={{
              marginTop: 57,
              marginRight: 30,
              height: "122px",
              width: "235px",
              opacity: openProgressFullOpen, // fades in as scroll progresses
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
