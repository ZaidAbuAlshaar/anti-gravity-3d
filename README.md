# Anti-Gravity — Freedom Model

A dark, futuristic single-page landing site that showcases an interactive 3D
GLB model (orbit controls, idle float, PMREM room-environment lighting) built
with **Three.js 0.165**. Hero + features + CTA sections.

## Run
```bash
# any static server works; this repo ships a tiny Node one:
node server.js          # http://localhost:3000
# or:  npx serve .
```

## Notes
- `freedom-model.glb` (~45 MB) is the hero asset, loaded via GLTFLoader (+DRACO).
- Environment lighting uses `RoomEnvironment` (three/addons) through a PMREM generator.
- `antigravity/` is an earlier, incomplete Next.js port kept for reference — the
  shipped page is the self-contained `index.html`.
