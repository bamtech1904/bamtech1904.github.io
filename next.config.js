/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages のリポジトリ名がユーザー名と同じ場合は basePath は不要
  // basePath: '/bamtech1904.github.io',
  images: {
    unoptimized: true,
  },
  // トレイリングスラッシュを追加
  trailingSlash: true,
};

module.exports = nextConfig;
