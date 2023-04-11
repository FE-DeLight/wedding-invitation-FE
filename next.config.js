/** @type {import('next').NextConfig} */
const { createProxyMiddleware } = require('http-proxy-middleware');

const path = require('path');

const nextConfig = {
  experimental: {
    appDir: false,
  },
  reactStrictMode: true,

  // 브라우저에서 들어온 요청을 Next.js 애플리케이션 내부에서 처리하도록 변경
  async rewrites() {
    return [
      {
        source: '/api/naverlogin/:path*',
        destination: 'https://openapi.naver.com/:path*', // 네이버 회원 프로필 조회 API
      },
      {
        source: '/api/navermap/:path*',
        destination: 'https://naveropenapi.apigw.ntruss.com/map-geocode/v2/:path*', // 네이버 지도 API 주소
      },
    ];
  },

  // 개발 환경에서 API 요청을 프록시
  async devServer() {
    return {
      port: 3000,
      middleware: [
        createProxyMiddleware('/api/naverlogin', {
          target: 'https://openapi.naver.com',
          changeOrigin: true,
        }),
        createProxyMiddleware('/api/navermap', {
          target: 'https://naveropenapi.apigw.ntruss.com',
          changeOrigin: true,
        }),
      ],
    };
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
};

module.exports = nextConfig;
