# Anti-Gravity — Interactive 3D Product Landing

> صفحة هبوط ثلاثية الأبعاد تفاعلية تعرض نموذجاً عائماً مع تحكّم مداري وإضاءة بيئية، مبنية بـ Three.js.

![Three.js](https://img.shields.io/badge/Three.js-0.165-000000?logo=three.js&logoColor=white)
![WebGL](https://img.shields.io/badge/WebGL-rendering-990000?logo=webgl&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-static%20server-339933?logo=node.js&logoColor=white)
![License](https://img.shields.io/badge/status-portfolio%20demo-blue)

## Overview

Anti-Gravity is a dark, futuristic single-page landing site that showcases an
interactive floating 3D GLB model rendered in real time with WebGL. The hero
model supports orbit controls and an idle float animation, and is lit with
PMREM room-environment lighting for clean, physically grounded reflections. The
page is structured into hero, features, and call-to-action sections and is built
with Three.js.

## Key Features

- **Interactive WebGL hero** — orbit controls and a continuous idle float animation
- **DRACO-compressed GLB loading** — efficient mesh delivery via `GLTFLoader` + `DRACOLoader`
- **Cinematic lighting** — ACES Filmic tone mapping with PMREM `RoomEnvironment` image-based lighting
- **Responsive layout** — hero / features / CTA sections that adapt across screen sizes

## Tech Stack

- **Static HTML / CSS** — self-contained `index.html` with all markup, styling, and scene logic
- **Three.js 0.165** — `GLTFLoader`, `DRACOLoader`, `OrbitControls`, and `RoomEnvironment` (via `PMREMGenerator`), loaded through an ES module import map from a CDN
- **Node.js** — a tiny dependency-free static file server (`server.js`)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (any recent LTS) to run the bundled static server, **or** any static file server of your choice.

### Install

No build step or dependencies are required for the shipped page — clone the repository and you are ready to run:

```bash
git clone https://github.com/ZaidAbuAlshaar/anti-gravity-3d.git
cd anti-gravity-3d
```

### Run

```bash
node server.js
# then open http://localhost:3000
```

On Windows you can also double-click `START SERVER.bat`.

Prefer your own server? Any static host works:

```bash
npx serve .
```

> Note: open the page through a local HTTP server rather than the `file://`
> protocol, so the GLB asset and ES modules load correctly.

## Testing

N/A — this is a static site with no automated test suite. The page has been
verified to build and load: the GLB model imports successfully and the scene
renders with orbit controls and environment lighting.

## Project Structure

```
anti-gravity-3d/
├── index.html          # Self-contained landing page (markup, styles, Three.js scene)
├── server.js           # Minimal Node static file server (port 3000)
├── freedom-model.glb   # Hero 3D asset, loaded via GLTFLoader + DRACO
├── START SERVER.bat    # Windows convenience launcher for server.js
├── setup.ps1           # PowerShell helper (asset copy + dependency setup)
└── antigravity/        # Earlier Next.js / react-three-fiber port (reference only)
    ├── package.json
    └── src/
        ├── app/        # layout, page, global styles
        └── components/ # HeroSection, FeaturesSection, CTASection, ModelCanvas
```

## Status / Notes

- The shipped, production page is the self-contained `index.html`.
- `freedom-model.glb` (~45 MB) is the hero asset; it is loaded at runtime via
  `GLTFLoader` with DRACO decompression.
- The `antigravity/` directory is an earlier, incomplete Next.js port kept for
  reference and is not required to run the live page.
- This repository is published as a portfolio / demo project.
