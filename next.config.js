/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/api/',
        headers: [
          {
            key: "Cache-Control",
            value: "no-store" 
         }
        ]
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image-service.onefootball.com',
        pathname: '/'
      }
    ]
  }
};

module.exports = nextConfig;
