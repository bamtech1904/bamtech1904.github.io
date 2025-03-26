import Link from "next/link";

export default function ProjectsPage() {
  // プロジェクトのサンプルデータ
  const projects = [
    {
      id: 1,
      name: "terraform-aws-microservices",
      description:
        "AWS 上にマイクロサービスアーキテクチャを Terraform で構築するためのモジュール集。ECS、API Gateway、Lambda、DynamoDB などのリソースを組み合わせた本番環境向けの構成を提供します。",
      technologies: [
        "Terraform",
        "AWS",
        "ECS",
        "API Gateway",
        "Lambda",
        "DynamoDB",
      ],
      stars: 342,
      forks: 87,
      url: "https://github.com/bamtech1904/terraform-aws-microservices",
    },
    {
      id: 2,
      name: "kubernetes-monitoring-stack",
      description:
        "Kubernetes クラスタ向けの包括的なモニタリングスタック。Prometheus、Grafana、Alertmanager、Loki を Helm チャートで簡単にデプロイできます。カスタムダッシュボードとアラートルールも含まれています。",
      technologies: [
        "Kubernetes",
        "Prometheus",
        "Grafana",
        "Helm",
        "Go",
        "Docker",
      ],
      stars: 256,
      forks: 62,
      url: "https://github.com/bamtech1904/kubernetes-monitoring-stack",
    },
    {
      id: 3,
      name: "serverless-image-processor",
      description:
        "AWS Lambda と S3 を使った画像処理サービス。アップロードされた画像のリサイズ、圧縮、フォーマット変換を自動的に行います。API Gateway を通じて RESTful API も提供しています。",
      technologies: [
        "AWS Lambda",
        "S3",
        "API Gateway",
        "Node.js",
        "TypeScript",
        "Serverless Framework",
      ],
      stars: 189,
      forks: 43,
      url: "https://github.com/bamtech1904/serverless-image-processor",
    },
    {
      id: 4,
      name: "cloud-cost-optimizer",
      description:
        "複数のクラウドプロバイダ（AWS、GCP、Azure）のコスト最適化を自動化するツール。未使用リソースの特定、リザーブドインスタンスの推奨、自動スケーリングの最適化などの機能を提供します。",
      technologies: [
        "Python",
        "AWS",
        "GCP",
        "Azure",
        "Terraform",
        "GitHub Actions",
      ],
      stars: 175,
      forks: 38,
      url: "https://github.com/bamtech1904/cloud-cost-optimizer",
    },
    {
      id: 5,
      name: "devops-toolkit",
      description:
        "DevOps エンジニア向けの CLI ツールキット。CI/CD パイプラインの設定、インフラのプロビジョニング、セキュリティスキャン、パフォーマンステストなど、日常的なタスクを自動化します。",
      technologies: [
        "Go",
        "Docker",
        "Kubernetes",
        "GitHub Actions",
        "Terraform",
        "Ansible",
      ],
      stars: 132,
      forks: 29,
      url: "https://github.com/bamtech1904/devops-toolkit",
    },
    {
      id: 6,
      name: "iac-best-practices",
      description:
        "Infrastructure as Code のベストプラクティス集。Terraform、CloudFormation、Pulumi などの IaC ツールを使った実践的なパターンとアンチパターンを紹介しています。",
      technologies: [
        "Terraform",
        "CloudFormation",
        "Pulumi",
        "AWS",
        "GCP",
        "Azure",
      ],
      stars: 118,
      forks: 25,
      url: "https://github.com/bamtech1904/iac-best-practices",
    },
  ];

  return (
    <div className="space-y-8">
      <div className="border-b pb-5">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          プロジェクト
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          開発したアプリケーションやツール、ライブラリなどのリポジトリ一覧です。実際のコードをご覧いただけます。
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg transition-all duration-300 hover:shadow-lg"
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 dark:hover:text-indigo-400"
                  >
                    {project.name}
                  </a>
                </h2>
                <div className="flex items-center space-x-3 text-sm text-gray-500 dark:text-gray-400">
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .25a.75.75 0 01.673.418l3.058 6.197 6.839.994a.75.75 0 01.415 1.279l-4.948 4.823 1.168 6.811a.75.75 0 01-1.088.791L12 18.347l-6.117 3.216a.75.75 0 01-1.088-.79l1.168-6.812-4.948-4.823a.75.75 0 01.416-1.28l6.838-.993L11.328.668A.75.75 0 0112 .25z" />
                    </svg>
                    {project.stars}
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="h-4 w-4 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.5 4.75c0 .688-.56 1.25-1.25 1.25s-1.25-.562-1.25-1.25S13.56 3.5 14.25 3.5s1.25.562 1.25 1.25zM12 10a2 2 0 100-4 2 2 0 000 4zm-8 6a2 2 0 100-4 2 2 0 000 4zm16 0a2 2 0 100-4 2 2 0 000 4zm-8 6a2 2 0 100-4 2 2 0 000 4z" />
                    </svg>
                    {project.forks}
                  </div>
                </div>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-4">
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-3 py-1.5 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-700 dark:bg-gray-700 dark:hover:bg-gray-600"
                >
                  <svg
                    className="h-4 w-4 mr-1.5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub で見る
                </a>
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
