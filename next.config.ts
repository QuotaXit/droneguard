import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(process.cwd()),
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "droneguard.it",
          },
        ],
        destination: "https://www.droneguard.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;