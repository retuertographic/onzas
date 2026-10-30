import type { NextConfig } from "next";

// GitHub Pages: export estático servido bajo /<repo>. Sin la variable, build normal (standalone/Docker).
const basePath = process.env.NEXT_PUBLIC_BASE_PATH;

const nextConfig: NextConfig = basePath
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
