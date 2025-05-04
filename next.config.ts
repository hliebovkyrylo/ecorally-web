import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    defaultLocale: "uk-UK",
    locales: ["uk-UK", "en-US"],
  },
  reactStrictMode: true,
};

export default nextConfig;
