import type { FC } from "react";

interface ISnowFallProps {
  isVisible: boolean;
}

export const SnowFall: FC<ISnowFallProps> = ({ isVisible }) => {
  const snowParticles = Array.from({ length: 60 });

  if (!isVisible) return null;

  return snowParticles.map((_, i) => (
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
    />
  ));
};
