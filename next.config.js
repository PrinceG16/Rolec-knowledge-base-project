import "./src/env.js";
import { withSentryConfig } from "@sentry/nextjs";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "5coxtwhehm.ufs.sh",
      },
    ],
    dangerouslyAllowSVG: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

const sentryConfig = {
  org: "rolec",
  project: "rolec-onboarding-project",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  // tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
};

export default withSentryConfig(config, sentryConfig);
