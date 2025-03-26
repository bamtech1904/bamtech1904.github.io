import Link from "next/link";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* ヒーローセクション */}
      <section className="text-center py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-lg">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-5xl md:text-6xl">
            <span className="block">クラウドエンジニア</span>
            <span className="block text-indigo-600 dark:text-indigo-400">
              bamtech1904
            </span>
          </h1>
          <p className="mt-6 text-xl text-gray-500 dark:text-gray-300 max-w-2xl mx-auto">
            都内のIT企業で働いてる、クラウドインフラを専門とするエンジニアです。
            技術の共有と継続的な学習を行なっています。
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <a
              href="https://github.com/bamtech1904"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700"
            >
              GitHub
            </a>
            <a
              href="https://x.com/TakeAction1994"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-gray-50"
            >
              X (旧Twitter)
            </a>
          </div>
        </div>
      </section>

      {/* 自己紹介セクション */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          自己紹介
        </h2>
        <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg">
          <div className="px-4 py-5 sm:px-6">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              クラウドインフラストラクチャとDevOpsの分野で経験を積んできました。AWS、Azure、GCPなどのクラウドプラットフォームを活用したインフラ設計・構築・運用に携わり、
              Infrastructure as
              Code（IaC）やCI/CDパイプラインの構築、コンテナ技術の導入などを行ってきました。
              <br />
              <br />
              技術的な知識を深めるだけでなく、それを他のエンジニアと共有することも大切にしています。
              Qiitaやブログでの技術記事の執筆、YouTubeでの解説動画の公開を通じて、
              クラウド技術やDevOpsの知識を広めることに貢献しています。
            </p>
          </div>
        </div>
      </section>

      {/* 技術スタックセクション */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          技術スタック
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              クラウドプラットフォーム
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>AWS (EC2, S3, Lambda, ECS, CloudFormation)</li>
              <li>Google Cloud Platform (GCE, GKE, Cloud Functions)</li>
              <li>Microsoft Azure (VM, AKS, Functions)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              インフラストラクチャ
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Terraform, CloudFormation, ARM Templates</li>
              <li>Docker, Kubernetes</li>
              <li>Ansible, Chef</li>
              <li>Linux (Ubuntu, CentOS, Amazon Linux)</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              CI/CD & DevOps
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>GitHub Actions, CircleCI, Jenkins</li>
              <li>ArgoCD, Flux</li>
              <li>Prometheus, Grafana</li>
              <li>ELK Stack, Datadog</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              プログラミング言語
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>Python</li>
              <li>JavaScript/TypeScript</li>
              <li>Go</li>
              <li>Bash</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              データベース
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>MySQL, PostgreSQL</li>
              <li>MongoDB</li>
              <li>DynamoDB, Firestore</li>
              <li>Redis</li>
            </ul>
          </div>
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              その他
            </h3>
            <ul className="space-y-2 text-gray-700 dark:text-gray-300">
              <li>サーバーレスアーキテクチャ</li>
              <li>マイクロサービス設計</li>
              <li>セキュリティベストプラクティス</li>
              <li>コスト最適化</li>
            </ul>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="py-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
          コンテンツ
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Link href="/articles" className="group">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg transition-all duration-300 transform group-hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  技術記事
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Qiita や Zenn
                  に投稿した技術記事の一覧です。クラウド技術やDevOpsに関する知識を共有しています。
                </p>
              </div>
            </div>
          </Link>
          <Link href="/videos" className="group">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg transition-all duration-300 transform group-hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  動画
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  YouTube
                  にアップロードした技術解説動画の一覧です。実践的なチュートリアルやデモを提供しています。
                </p>
              </div>
            </div>
          </Link>
          <Link href="/projects" className="group">
            <div className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg transition-all duration-300 transform group-hover:scale-105">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400">
                  プロジェクト
                </h3>
                <p className="text-gray-700 dark:text-gray-300">
                  開発したアプリケーションやツール、ライブラリなどのリポジトリ一覧です。実際のコードをご覧いただけます。
                </p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
