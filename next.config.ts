import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    reactStrictMode: true,
    experimental: {
        optimizePackageImports: ["lucide-react", "recharts"],
        webpackBuildWorker: true,
    },
    // Optimize navigation and page transitions
    compiler: {
        removeConsole: process.env.NODE_ENV === "production",
    },
    poweredByHeader: false,
};

export default nextConfig;
