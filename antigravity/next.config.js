/** @type {import('next').NextConfig} */
const nextConfig = {
  // GLB files in /public are served statically — no special config needed.
  // Transpile Three.js ecosystem for compatibility
  transpilePackages: ['three', '@react-three/fiber', '@react-three/drei'],
};

module.exports = nextConfig;
