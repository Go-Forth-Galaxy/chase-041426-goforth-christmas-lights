import type { NextConfig } from "next";

const basePath = "/chase-041426-goforth-christmas-lights";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_PUBLIC_CACHE_BUST: Date.now().toString(),
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
