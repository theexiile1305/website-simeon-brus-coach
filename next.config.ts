import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const securityHeaders = [
  { key: "X-Frame-Options", value: "DENY" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=()",
  },
  {
    key: "Strict-Transport-Security",
    value: "max-age=63072000; includeSubDomains; preload",
  },
  {
    key: "Content-Security-Policy",
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline'",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data:",
      "font-src 'self'",
      "connect-src 'self'",
      "frame-src 'self'",
      "frame-ancestors 'none'",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self'",
    ].join("; "),
  },
];

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/de/therapie",
        destination: "/de#therapie",
        permanent: true,
      },
      { source: "/en/therapy", destination: "/en#therapie", permanent: true },
      { source: "/de/mma", destination: "/de#mma", permanent: true },
      { source: "/en/mma", destination: "/en#mma", permanent: true },
      { source: "/de/faq", destination: "/de#faq", permanent: true },
      { source: "/en/faq", destination: "/en#faq", permanent: true },
      { source: "/de/kontakt", destination: "/de#kontakt", permanent: true },
      { source: "/en/contact", destination: "/en#kontakt", permanent: true },
    ];
  },
};

const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);
