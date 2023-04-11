/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en", "tr", "fr"],
    defaultLocale: "tr",
  },
};

module.exports = nextConfig;
