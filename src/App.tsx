import { useState } from "react";
import "./App.css";
import { SmoothScrollHero } from "./pages/BottomSection";
import ScrollGiftReveal from "./pages/ScrollGiftReveal";
import { AuroraBackground } from "./components/Aurora";

function App() {
  const [showHero, setShowHero] = useState(false);
  return (
    <AuroraBackground>
      <ScrollGiftReveal onFlip={setShowHero} />
      {showHero && <SmoothScrollHero />}
    </AuroraBackground>
  );
}

export default App;
