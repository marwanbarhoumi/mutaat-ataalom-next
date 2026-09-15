import type { NextConfig } from "next";
import path from "path";

/**
 * GitHub Pages project site: https://USER.github.io/REPO/
 * Définir NEXT_PUBLIC_BASE_PATH=/REPO au build (voir .github/workflows/pages.yml).
 * Laisser vide pour un déploiement à la racine ou pour `npm run dev`.
 */
const basePath = (process.env.NEXT_PUBLIC_BASE_PATH || "").replace(/\/$/, "");

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  outputFileTracingRoot: path.join(__dirname),
  ...(basePath
    ? {
        basePath,
        assetPrefix: `${basePath}/`,
      }
    : {}),
};

export default nextConfig;
