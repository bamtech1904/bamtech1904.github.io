import Link from "next/link";

export default function ArticlesPage() {
  // 技術記事のサンプルデータ
  const articles = [
    {
      id: 1,
      title: "AWS Lambda と API Gateway を使ったサーバーレスAPI構築入門",
      platform: "Qiita",
      url: "https://qiita.com/sample/items/1",
      date: "2025-02-15",
      tags: ["AWS", "サーバーレス", "Lambda", "API Gateway"],
      excerpt:
        "AWS Lambda と API Gateway を組み合わせて、スケーラブルなサーバーレスAPIを構築する方法を解説します。認証やデプロイの自動化についても触れています。",
    },
    {
      id: 2,
      title: "Terraform で実現するマルチクラウド環境の IaC 戦略",
      platform: "Zenn",
      url: "https://zenn.dev/sample/articles/2",
      date: "2025-01-20",
      tags: ["Terraform", "IaC", "AWS", "GCP", "Azure"],
      excerpt:
        "複数のクラウドプロバイダを利用する環境で、Terraform を使って効率的にインフラを管理する方法を紹介します。モジュール化やワークスペース分割のベストプラクティスも解説。",
    },
    {
      id: 3,
      title: "Kubernetes 運用で役立つ Prometheus + Grafana モニタリング設定",
      platform: "Qiita",
      url: "https://qiita.com/sample/items/3",
      date: "2024-12-05",
      tags: ["Kubernetes", "Prometheus", "Grafana", "モニタリング"],
      excerpt:
        "Kubernetes クラスタのモニタリングに Prometheus と Grafana を導入する方法と、実用的なダッシュボード設定を紹介します。アラート設定や長期保存の方法も解説。",
    },
    {
      id: 4,
      title: "GitHub Actions で実現する効率的な CI/CD パイプライン",
      platform: "Zenn",
      url: "https://zenn.dev/sample/articles/4",
      date: "2024-11-10",
      tags: ["GitHub Actions", "CI/CD", "DevOps"],
      excerpt:
        "GitHub Actions を使って、テスト、ビルド、デプロイを自動化する CI/CD パイプラインの構築方法を解説します。マトリックスビルドやキャッシュの活用法も紹介。",
    },
    {
      id: 5,
      title: "コンテナセキュリティ強化のためのベストプラクティス",
      platform: "Qiita",
      url: "https://qiita.com/sample/items/5",
      date: "2024-10-22",
      tags: ["Docker", "Kubernetes", "セキュリティ", "DevSecOps"],
      excerpt:
        "コンテナ環境におけるセキュリティリスクと対策について解説します。イメージスキャン、ランタイム保護、ネットワークポリシーなど、実践的な対策を紹介。",
    },
    {
      id: 6,
      title: "AWS コスト最適化のための実践テクニック",
      platform: "Zenn",
      url: "https://zenn.dev/sample/articles/6",
      date: "2024-09-15",
      tags: ["AWS", "コスト最適化", "クラウド"],
      excerpt:
        "AWS の利用コストを削減するための実践的なテクニックを紹介します。リザーブドインスタンス、Savings Plans、オートスケーリングの最適化など、すぐに実践できる方法を解説。",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-5">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          技術記事
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Qiita や Zenn に投稿した技術記事の一覧です。クラウド技術や DevOps
          に関する知識を共有しています。
        </p>
      </div>

      <div className="grid gap-8">
        {articles.map((article) => (
          <article
            key={article.id}
            className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                  {article.platform}
                </span>
                <time className="text-sm text-gray-500 dark:text-gray-400">
                  {article.date}
                </time>
              </div>
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-indigo-600 dark:hover:text-indigo-400"
                >
                  {article.title}
                </a>
              </h2>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {article.excerpt}
              </p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 dark:text-indigo-200 dark:bg-indigo-900 dark:hover:bg-indigo-800"
        >
          ホームに戻る
        </Link>
      </div>
    </div>
  );
}
