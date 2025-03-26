import Link from "next/link";
import Image from "next/image";

export default function VideosPage() {
  // 動画のサンプルデータ
  const videos = [
    {
      id: 1,
      title: "AWS Lambda 完全解説 - サーバーレスアプリケーション開発入門",
      thumbnail: "https://placehold.co/640x360/1e40af/ffffff?text=AWS+Lambda",
      url: "https://youtube.com/watch?v=sample1",
      date: "2025-03-10",
      duration: "32:15",
      views: "12,345",
      description:
        "AWS Lambda を使ったサーバーレスアプリケーション開発の基礎から応用までを解説します。実際のデモを交えながら、関数の作成、API Gateway との連携、デプロイ方法などを紹介します。",
    },
    {
      id: 2,
      title: "Docker & Kubernetes 入門 - コンテナオーケストレーションの基礎",
      thumbnail:
        "https://placehold.co/640x360/047857/ffffff?text=Docker+%26+K8s",
      url: "https://youtube.com/watch?v=sample2",
      date: "2025-02-20",
      duration: "45:30",
      views: "8,721",
      description:
        "Docker コンテナの基本から Kubernetes によるオーケストレーションまでを解説します。マイクロサービスアーキテクチャの実装方法や、本番環境での運用ポイントも紹介します。",
    },
    {
      id: 3,
      title: "Terraform ハンズオン - コードでインフラを構築する",
      thumbnail: "https://placehold.co/640x360/7c3aed/ffffff?text=Terraform",
      url: "https://youtube.com/watch?v=sample3",
      date: "2025-01-15",
      duration: "38:45",
      views: "6,892",
      description:
        "Terraform を使ったインフラストラクチャのコード化（IaC）について解説します。AWS 環境を例に、VPC、EC2、RDS などのリソースをコードで管理する方法を紹介します。",
    },
    {
      id: 4,
      title: "CI/CD パイプライン構築 - GitHub Actions 実践ガイド",
      thumbnail: "https://placehold.co/640x360/db2777/ffffff?text=CI%2FCD",
      url: "https://youtube.com/watch?v=sample4",
      date: "2024-12-05",
      duration: "41:20",
      views: "5,437",
      description:
        "GitHub Actions を使った CI/CD パイプラインの構築方法を解説します。テスト自動化、ビルド、デプロイの一連の流れを自動化する方法を、実際のプロジェクトを例に紹介します。",
    },
    {
      id: 5,
      title: "クラウドネイティブ監視入門 - Prometheus & Grafana 実践ガイド",
      thumbnail: "https://placehold.co/640x360/ea580c/ffffff?text=Monitoring",
      url: "https://youtube.com/watch?v=sample5",
      date: "2024-11-20",
      duration: "36:50",
      views: "4,218",
      description:
        "Prometheus と Grafana を使ったクラウドネイティブな監視システムの構築方法を解説します。メトリクスの収集、アラート設定、ダッシュボード作成のノウハウを紹介します。",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-5">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          動画
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          YouTube
          にアップロードした技術解説動画の一覧です。実践的なチュートリアルやデモを提供しています。
        </p>
      </div>

      <div className="grid gap-8">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <div className="sm:flex">
              <div className="sm:w-64 flex-shrink-0 relative h-48 sm:h-auto">
                <div className="w-full h-full relative">
                  <Image
                    src={video.thumbnail}
                    alt={video.title}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-t-lg sm:rounded-l-lg sm:rounded-t-none"
                  />
                  <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1 py-0.5 rounded">
                    {video.duration}
                  </div>
                </div>
              </div>
              <div className="p-6 flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <time className="text-sm text-gray-500 dark:text-gray-400">
                    {video.date}
                  </time>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    • {video.views} 回視聴
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {video.title}
                  </a>
                </h2>
                <p className="text-gray-700 dark:text-gray-300">
                  {video.description}
                </p>
                <div className="mt-4">
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700"
                  >
                    YouTube で視聴
                  </a>
                </div>
              </div>
            </div>
          </div>
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
