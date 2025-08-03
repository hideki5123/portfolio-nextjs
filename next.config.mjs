import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // Static export
  output: 'export',

  // GitHub Pages のベースパス
  basePath: '/portfolio-nextjs',
  assetPrefix: '/portfolio-nextjs',

  // Add trailing slash to file names
  trailingSlash: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
