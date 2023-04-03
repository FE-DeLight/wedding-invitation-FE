/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

const nextConfig = {
  experimental: {
    appDir: false,
  },
  reactStrictMode: true,

  async rewrites() {
    return [
      {
        source: '/api/:path*',
        destination: 'https://openapi.naver.com/:path*',
      },
    ];
  },

  async devServer() {
    return {
      port: 3000,
      middleware: [
        createProxyMiddleware({
          target: 'https://openapi.naver.com',
          changeOrigin: true,
          pathRewrite: {
            '^/api': '',
          },
        }),
      ],
    };
  },
};

module.exports = nextConfig;
