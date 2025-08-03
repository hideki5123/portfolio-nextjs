import createMDX from '@next/mdx';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'md', 'mdx'],
  
  // 静的エクスポート
  output: 'export',

  // GitHub Pages のベースパス
  basePath: '/portfolio-nextjs',
  assetPrefix: '/portfolio-nextjs',

  // ファイル名にスラッシュ末尾を付与
  trailingSlash: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
});

export default withMDX(nextConfig);
