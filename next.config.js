/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
    async rewrites() {
      return [
        {
          source: '/',
          destination: 'http://localhost:8000', // 실제 백엔드 서버 주소로 변경
        },
      ];
    },
  };

module.exports = nextConfig
