import { useState } from "react";
import "./App.css";
import { SmoothScrollHero } from "./pages/BottomSection";
import ScrollGiftReveal from "./pages/ScrollGiftReveal";

function App() {
  const [showHero, setShowHero] = useState(false);

  console.log(showHero);

  return (
    <div className="scrollbar-hide w-full h-full">
      <ScrollGiftReveal onFlip={setShowHero} />
      {showHero && <SmoothScrollHero />}
    </div>
  );
}

export default App;
