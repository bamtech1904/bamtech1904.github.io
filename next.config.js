/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // GitHub Pages のリポジトリ名がユーザー名と同じ場合は basePath は不要
  basePath: "",
  // 静的アセットのプレフィックスを設定
  assetPrefix: "",
  images: {
    unoptimized: true,
  },
  // トレイリングスラッシュを追加
  trailingSlash: true,
};

module.exports = nextConfig;
