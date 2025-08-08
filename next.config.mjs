import createMDX from 'fumadocs-mdx/config';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/form-builder',
        destination: 'https://formcn.dev',
        permanent: true,
      }
    ]
  }
};

export default withMDX(config);
