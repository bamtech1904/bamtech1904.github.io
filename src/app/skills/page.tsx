import Link from "next/link";

export default function SkillsPage() {
  // スキルのカテゴリとスキルのサンプルデータ
  const skillCategories = [
    {
      id: 1,
      name: "クラウドプラットフォーム",
      skills: [
        {
          name: "Amazon Web Services (AWS)",
          level: 90,
          description:
            "EC2, S3, Lambda, ECS, EKS, RDS, DynamoDB, CloudFormation, CloudWatch など、幅広いサービスの設計・構築・運用経験があります。AWS 認定ソリューションアーキテクト プロフェッショナル資格保有。",
        },
        {
          name: "Google Cloud Platform (GCP)",
          level: 80,
          description:
            "Compute Engine, GKE, Cloud Functions, Cloud Storage, BigQuery, Cloud Pub/Sub などのサービスを活用したシステム構築経験があります。データ分析基盤の構築も得意としています。",
        },
        {
          name: "Microsoft Azure",
          level: 75,
          description:
            "Virtual Machines, AKS, Functions, Blob Storage, Cosmos DB などのサービスを使用したシステム開発経験があります。特にハイブリッドクラウド環境の構築に強みがあります。",
        },
      ],
    },
    {
      id: 2,
      name: "コンテナ技術",
      skills: [
        {
          name: "Docker",
          level: 95,
          description:
            "コンテナ化されたアプリケーションの開発・デプロイに精通しています。最適化されたDockerfileの作成、マルチステージビルド、セキュリティベストプラクティスの適用などが得意です。",
        },
        {
          name: "Kubernetes",
          level: 85,
          description:
            "本番環境での Kubernetes クラスタの設計・構築・運用経験が豊富です。カスタムリソース、オペレーター開発、Helm チャートの作成なども行っています。",
        },
        {
          name: "Istio / Service Mesh",
          level: 70,
          description:
            "マイクロサービスアーキテクチャにおけるサービスメッシュの導入経験があります。トラフィック管理、セキュリティ、可観測性の向上に取り組んでいます。",
        },
      ],
    },
    {
      id: 3,
      name: "Infrastructure as Code",
      skills: [
        {
          name: "Terraform",
          level: 90,
          description:
            "複数のクラウドプロバイダにまたがるインフラのコード化に Terraform を活用しています。モジュール化、ワークスペース管理、CI/CD との統合など、大規模環境での運用経験があります。",
        },
        {
          name: "AWS CloudFormation",
          level: 85,
          description:
            "AWS リソースの管理に CloudFormation を使用した経験が豊富です。複雑なスタックの設計、カスタムリソースの開発、ネストされたスタックの管理などを行っています。",
        },
        {
          name: "Ansible",
          level: 80,
          description:
            "サーバー構成管理やアプリケーションデプロイに Ansible を活用しています。カスタムモジュールの開発、ロールの作成、大規模環境での実行戦略の最適化などの経験があります。",
        },
      ],
    },
    {
      id: 4,
      name: "CI/CD & DevOps",
      skills: [
        {
          name: "GitHub Actions",
          level: 90,
          description:
            "GitHub Actions を使用した CI/CD パイプラインの構築に精通しています。複雑なワークフローの設計、カスタムアクションの開発、セキュリティ対策の実装などを行っています。",
        },
        {
          name: "Jenkins",
          level: 85,
          description:
            "Jenkins を使用した CI/CD パイプラインの構築・運用経験があります。共有ライブラリの開発、分散ビルド環境の構築、プラグイン開発なども行っています。",
        },
        {
          name: "ArgoCD",
          level: 80,
          description:
            "Kubernetes 環境での GitOps 実践のために ArgoCD を活用しています。マルチクラスタ管理、カスタム健全性チェック、プログレッシブデリバリーの実装などの経験があります。",
        },
      ],
    },
    {
      id: 5,
      name: "モニタリング & ロギング",
      skills: [
        {
          name: "Prometheus & Grafana",
          level: 90,
          description:
            "Prometheus と Grafana を使用したモニタリングシステムの構築に精通しています。カスタムエクスポーター開発、アラートルール設計、ダッシュボード作成などを行っています。",
        },
        {
          name: "ELK Stack",
          level: 85,
          description:
            "Elasticsearch, Logstash, Kibana を使用したログ分析基盤の構築経験があります。カスタムパイプライン開発、クエリ最適化、可視化ダッシュボード作成などを行っています。",
        },
        {
          name: "Datadog",
          level: 80,
          description:
            "Datadog を使用したクラウドスケールのモニタリングと可観測性の実現に取り組んでいます。APM, ログ管理, インフラモニタリングの統合的な活用経験があります。",
        },
      ],
    },
    {
      id: 6,
      name: "プログラミング言語",
      skills: [
        {
          name: "Python",
          level: 85,
          description:
            "自動化スクリプト、データ処理、バックエンドサービス開発などに Python を活用しています。AWS SDK, Kubernetes クライアント, データ分析ライブラリなどの使用経験があります。",
        },
        {
          name: "JavaScript/TypeScript",
          level: 80,
          description:
            "フロントエンド開発、Node.js バックエンド、AWS Lambda 関数などに JavaScript/TypeScript を使用しています。React, Express, Serverless Framework などの経験があります。",
        },
        {
          name: "Go",
          level: 75,
          description:
            "マイクロサービス、CLI ツール、Kubernetes オペレーターなどの開発に Go を使用しています。並行処理、パフォーマンス最適化、クラウドネイティブアプリケーション開発の経験があります。",
        },
      ],
    },
  ];

  return (
    <div className="space-y-12">
      <div className="border-b pb-5">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
          スキル
        </h1>
        <p className="mt-2 text-lg text-gray-600 dark:text-gray-300">
          クラウドエンジニアとして習得したスキルと経験の一覧です。各技術の専門性と実務経験を紹介しています。
        </p>
      </div>

      {skillCategories.map((category) => (
        <div key={category.id} className="space-y-6">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            {category.name}
          </h2>
          <div className="space-y-6">
            {category.skills.map((skill, index) => (
              <div
                key={index}
                className="bg-white dark:bg-gray-800 shadow overflow-hidden rounded-lg p-6"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h3>
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    熟練度: {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 mb-4">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full dark:bg-indigo-500"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <p className="text-gray-700 dark:text-gray-300">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

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
