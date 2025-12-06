import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import ticket from "../assets/ticket.png";
import confetti from "canvas-confetti";

export default function FlipCard() {
  const [flipped, setFlipped] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // swipe detection threshold
  const swipeConfidence = 50;

  useEffect(() => {
    if (flipped) {
      launchConfetti();
      playMusic();
    }
  }, [flipped]);

  const launchConfetti = () => {
    confetti({
      particleCount: 200,
      spread: 100,
      origin: { y: 0.5 },
      startVelocity: 35,
      ticks: 1000,
    });
  };

  const playMusic = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.play().catch((e) => {
        console.log("Audio play prevented: ", e);
      });
    }
  };

  return (
    <div className="flex items-center justify-center">
      <audio ref={audioRef} src="/the-holiday-theme.mp3" preload="auto" />
      <motion.div className="relative w-72 h-75" style={{ perspective: 1000 }}>
        {/* Gesture Layer */}
        <motion.div
          className="absolute inset-0 z-20"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          dragElastic={0.6}
          onDragEnd={(_e, info) => {
            if (info.offset.x > swipeConfidence) setFlipped(true); // swipe right
            if (info.offset.x < -swipeConfidence) setFlipped(true); // swipe left
          }}
          onTap={() => setFlipped(!flipped)}
        />

        {/* Flipping Card */}
        <motion.div
          className="w-full h-full "
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          {/* FRONT */}
          {/* <div
            className="absolute inset-0 flex flex-col items-center justify-center bg-white rounded-xl shadow-xl text-lg font-bold px-4"
            style={{ backfaceVisibility: "hidden" }}
          >
            <span className="text-base">You, me, and a night of music 🎶</span>
            <span className="text-base mt-10">Can you guess where?</span>
          </div> */}
          <motion.div
            className={`w-full h-full rounded-2xl shadow-2xl bg-[linear-gradient(135deg,#b9935a,#f5ecd7,#d4af37,#a67834,#f5ecd7,#b9935a)] text-center p-6 flex flex-col items-center justify-center absolute backface-hidden`}
          >
            <motion.div
              className="text-xl font-bold text-amber-800"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              You, me, and a night of music
            </motion.div>
            {/* Small musical notes */}
            <motion.div
              className="mt-4 text-2xl text-yellow-400"
              animate={{ y: [0, -5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              🎵 🎶 🎼
            </motion.div>
            <span className="text-base mt-10">Can you guess where? 😁</span>
          </motion.div>

          {/* BACK */}
          <div
            className="absolute inset-0 rounded-xl shadow-xl bg-white overflow-hidden"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <img
              src={ticket} // <- your ticket image here
              alt="Concert Ticket"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
