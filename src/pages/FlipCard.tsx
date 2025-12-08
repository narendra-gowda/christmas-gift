import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import ticket from "../assets/ticket.png";
import confetti from "canvas-confetti";

export default function FlipCard({ onFlip }: any) {
  const [flipped, setFlipped] = useState(false);
  const [isFullView, setIsFullView] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  // swipe detection threshold
  const swipeConfidence = 50;

  useEffect(() => {
    if (flipped) {
      launchConfetti();
      playMusic();
      onFlip(flipped);
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

  const { scrollYProgress } = useScroll();

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    if (value >= 0.95) {
      setIsFullView(true);
    } else {
      setIsFullView(false);
    }
  });

  const notes = ["🎵", "🎶", "🎼"];

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
            if (info.offset.x > swipeConfidence) isFullView && setFlipped(true); // swipe right
            if (info.offset.x < -swipeConfidence) setFlipped(false); // swipe left
          }}
        />

        {/* Flipping Card */}
        <motion.div
          className="w-full h-full"
          style={{ transformStyle: "preserve-3d" }}
          animate={{ rotateY: flipped ? 180 : 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <motion.div
            style={{ color: "#845f03ff" }}
            className={`w-full h-full rounded-2xl shadow-2xl golden-ticket text-center p-4 pt-10 flex flex-col items-center justify-start gap-10 absolute backface-hidden`}
          >
            <motion.div
              className="text-xl font-extrabold drop-shadow-md"
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              You, me, and a night of music
            </motion.div>
            {/* Small musical notes */}
            <div className="flex gap-2 text-xl justify-center">
              {notes.map((note, i) => (
                <motion.div
                  key={i}
                  animate={{ scale: [1, 1.3, 1] }} // 🔥 zoom in → zoom out
                  transition={{
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "easeInOut",
                    delay: i * 0.4, // staggered wave effect
                  }}
                >
                  {note}
                </motion.div>
              ))}
            </div>
            <span className="text-base">Can you guess where? {isFullView}</span>
            {isFullView ? (
              <span className="text-xs absolute bottom-5 text-zinc-600">
                flip over to find out
              </span>
            ) : null}
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
              src={ticket}
              alt="Concert Ticket"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
