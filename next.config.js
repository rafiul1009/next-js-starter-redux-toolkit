const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  productionBrowserSourceMaps: true,
  images: {
    domains: ['localhost', 'api.example.com', 'img.example.com', 'example.com', 'www.example.com', 'images.example.com', 'sa.example.com', 'admin.example.com', 'app.example.com'],
  },
  reactStrictMode: false, /* Set false to prevent duplicate api calls */
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  async headers() {
    return [
      {
        source: '/:all*(eot|woff|woff2|ttf|svg|png|jpg|gif|webp|jpeg|js|css)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=9999999999, must-revalidate',
          }
        ],
      },
    ]
  },
};

module.exports = nextConfig;
