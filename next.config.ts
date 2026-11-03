import type { NextConfig } from "next";

// STATIC_EXPORT=1: export estático para GitHub Pages. NEXT_PUBLIC_BASE_PATH solo si se sirve bajo /<repo>
// (sin dominio propio). Sin STATIC_EXPORT, build normal (standalone/Docker).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH || undefined;

const nextConfig: NextConfig = process.env.STATIC_EXPORT
  ? {
      output: "export",
      basePath,
      trailingSlash: true,
      images: { unoptimized: true },
    }
  : {
      output: "standalone",
    };

export default nextConfig;
