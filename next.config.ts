import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Define headers to disable caching
  async headers() {
    return [
      {
        source: "/:path*", // Match all routes
        headers: [
          { key: "Cache-Control", value: "no-store, must-revalidate" },
        ],
      },
    ];
  },
  // Other config options here
};

export default nextConfig;
