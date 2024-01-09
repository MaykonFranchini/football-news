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
  }
};

module.exports = nextConfig;
