import { Canvas } from "@react-three/fiber";
import { Stars as Star } from "@react-three/drei";

export const Stars = () => (
  <div className="absolute inset-0 h-full z-0">
    <Canvas>
      <Star radius={50} count={2700} factor={4} fade speed={2} />
    </Canvas>
  </div>
);
