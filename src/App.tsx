import { useState } from "react";
import "./App.css";
import ScrollGiftReveal from "./pages/ScrollGiftReveal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <ScrollGiftReveal />
    // <div className="sticky top-0 h-screen flex items-center justify-center">
    //   Snow effect
    //   <div className="pointer-events-none absolute inset-0">
    //     {Array.from({ length: 60 }).map((_, i) => (
    //       <div
    //         key={i}
    //         className="absolute bg-white rounded-full opacity-80 animate-fall"
    //         style={{
    //           width: Math.random() * 4 + 2 + "px",
    //           height: Math.random() * 4 + 2 + "px",
    //           top: -10,
    //           left: Math.random() * 100 + "%",
    //           animationDuration: Math.random() * 3 + 2 + "s",
    //           animationDelay: Math.random() * 5 + "s",
    //         }}
    //       ></div>
    //     ))}
    //   </div>

    //   <style>{`
    // @keyframes fall {
    // from { transform: translateY(-10px); }
    // to { transform: translateY(110vh); }
    // }
    // .animate-fall {
    // animation-name: fall;
    // animation-timing-function: linear;
    // animation-iteration-count: infinite;
    // }

    // @keyframes confettiFall {
    // 0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
    // 100% { transform: translateY(120vh) rotate(360deg); opacity: 0; }
    // }
    // .animate-confetti {
    // animation-name: confettiFall;
    // animation-timing-function: ease-in;
    // animation-iteration-count: infinite;
    // }

    // @keyframes fadeIn {
    // from { opacity: 0; transform: translateY(20px); }
    // to { opacity: 1; transform: translateY(0); }
    // }
    // .animate-fade-in {
    // animation: fadeIn 0.8s ease-out;
    // }

    // @keyframes slowBounce {
    // 0%, 100% { transform: translateY(0); }
    // 50% { transform: translateY(-8px); }
    // }
    // .animate-bounce-slow {
    // animation: slowBounce 2.2s infinite;
    // }
    // `}</style>
    // </div>
  );
}

export default App;
