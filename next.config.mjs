import "./src/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  async rewrites() {
    return [
      {
        source: "/console",
        destination: `/console/personal`,
      },
    ];
  },
};

export default config;
