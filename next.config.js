/** @type {import('next').NextConfig} */
const nextConfig = {
    trailingSlash: false,
    async headers() {
        return [
          {
            source: "/_next/static/:path*",
            headers: [
              {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
              },
            ],
          },
        ];
      },
}

module.exports = nextConfig
