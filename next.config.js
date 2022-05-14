/* @type {import('next').NextConfig} */
/*const nextConfig = {
  reactStrictMode: true,
}

module.exports = nextConfig*/
module.exports = {
  async redirects() {
    return [
      {
        source: '/pages/api',
        destination: '/',
        permanent: false,
      },
    ];
  },
};