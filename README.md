# 🎁 Christmas Gift

An interactive, scroll-driven Christmas gift reveal built with React, Three.js, and Framer Motion. Scroll to unwrap a present, reveal a concert ticket, swipe to flip it open — and enjoy confetti, snow, an aurora backdrop, and a festive soundtrack along the way.

The gift in this build is a pair of tickets to **The Holiday in Concert** at **Bradford Live** (19th Dec, 7:30 pm).

## ✨ Features

- **Scroll gift reveal** — a wrapped box shakes, opens, and reveals a ticket as you scroll.
- **Swipe-to-flip card** — drag the ticket to flip it and unveil the details.
- **Confetti & music** — flipping the card fires confetti and plays the holiday theme.
- **Ambient effects** — animated aurora background, falling snow, and a starfield.
- **Details section** — event, venue (with a Google Maps link), date, time, and ticket link.

## 🛠️ Tech Stack

- [React 19](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/) (with the SWC React plugin)
- [Tailwind CSS 4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/) — scroll and gesture animations
- [Three.js](https://threejs.org/) via [@react-three/fiber](https://github.com/pmndrs/react-three-fiber) & [drei](https://github.com/pmndrs/drei) — background effects
- [canvas-confetti](https://github.com/catdad/canvas-confetti) — confetti burst
- [react-icons](https://react-icons.github.io/react-icons/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) 18+ and npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Then open the URL Vite prints (default [http://localhost:5173](http://localhost:5173)). The dev server runs with `--host`, so it's also reachable from other devices on your network.

### Build

```bash
npm run build
```

The production build is output to `dist/`. Preview it locally with:

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── App.tsx                  # Root — composes the reveal and details sections
├── main.tsx                 # React entry point
├── pages/
│   ├── ScrollGiftReveal.tsx # Scroll-driven box-opening + ticket animation
│   ├── FlipCard.tsx         # Swipe-to-flip ticket, confetti, and music
│   └── BottomSection.tsx    # Event details (venue, date, time, links)
├── components/
│   ├── Aurora.tsx           # Animated aurora background wrapper
│   ├── SnowFall.tsx         # Falling snow effect
│   ├── Stars.tsx            # Starfield
│   └── SwipeHint.tsx        # Hint prompting the user to swipe
└── assets/                  # Gift box and ticket images
public/
└── the-holiday-theme.mp3    # Soundtrack played on card flip
```

## 🎨 Customizing the Gift

To repurpose this for your own gift:

- Update the event details in [src/pages/BottomSection.tsx](src/pages/BottomSection.tsx) (event, venue, date, time, and links).
- Replace `public/the-holiday-theme.mp3` with your own track.
- Swap the ticket and box artwork in [src/assets/](src/assets/).
