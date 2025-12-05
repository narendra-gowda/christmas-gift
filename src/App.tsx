// import { useState } from "react";
import "./App.css";
import ScrollGiftReveal from "./pages/ScrollGiftReveal";

function App() {
  // const [open, setOpen] = useState(false);

  return (
    //     <div className="items-center justify-center p-4  overflow-hidden">
    //       {/* Snow effect */}
    //       <div className="pointer-events-none absolute inset-0">
    //         {Array.from({ length: 60 }).map((_, i) => (
    //           <div
    //             key={i}
    //             className="absolute bg-white rounded-full opacity-80 animate-fall"
    //             style={{
    //               width: Math.random() * 4 + 2 + "px",
    //               height: Math.random() * 4 + 2 + "px",
    //               top: -10,
    //               left: Math.random() * 100 + "%",
    //               animationDuration: Math.random() * 3 + 2 + "s",
    //               animationDelay: Math.random() * 5 + "s",
    //             }}
    //           ></div>
    //         ))}
    //       </div>

    //       <div className="relative z-10 text-center">
    //         {!open && (
    //           <div
    //             onClick={() => setOpen(true)}
    //             className="cursor-pointer select-none"
    //           >
    //             <div className="text-6xl">🎁</div>
    //           </div>
    //         )}

    //         {open && (
    //           <div className="animate-fade-in p-6 bg-white/90 rounded-2xl shadow-xl max-w-xs mx-auto">
    //             <h1 className="text-2xl font-bold text-red-700 mb-2">
    //               Your Christmas Gift 🎄
    //             </h1>
    //             <p className="text-gray-800 mb-4">
    //               Han, we're going to a concert! ❤️
    //             </p>
    //             <div className="bg-gray-100 rounded-lg p-4 shadow-inner">
    //               <p className="text-gray-900 font-semibold">🎫 Concert Tickets</p>
    //               <p className="text-sm text-gray-700">
    //                 (Insert artist name, date & venue here)
    //               </p>
    //             </div>
    //           </div>
    //         )}
    //       </div>

    //       {/* Confetti */}
    //       {open && (
    //         <div className="pointer-events-none absolute inset-0 overflow-hidden">
    //           {Array.from({ length: 40 }).map((_, i) => (
    //             <div
    //               key={i}
    //               className="absolute w-2 h-2 bg-white animate-confetti"
    //               style={{
    //                 left: Math.random() * 100 + "%",
    //                 animationDuration: Math.random() * 2 + 2 + "s",
    //                 animationDelay: Math.random() * 2 + "s",
    //                 backgroundColor: ["#FFD700", "#FF0000", "#00FF00", "#00BFFF"][
    //                   Math.floor(Math.random() * 4)
    //                 ],
    //               }}
    //             ></div>
    //           ))}
    //         </div>
    //       )}

    //       <style>{`
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
    //     </div>
    <ScrollGiftReveal />
    // <ScrollToFlip />
  );
}

export default App;
