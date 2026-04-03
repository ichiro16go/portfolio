/**
 * @file site.ts
 * @description サイト全体の構成情報を管理する設定ファイル。
 * サイト名、説明、ナビゲーションメニューのリンク先などを一括管理します。
 */

export const siteConfig = {
  name: "Ichiro's Portfolio",
  description: "宮本一路のポートフォリオサイト — 数学的思考でスケーラブルなシステムを構築するソフトウェアエンジニア・時々イベンター",
  url: "https://example.com",
  
  // Navigation Links
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Activity", href: "#activity" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    greeting: "こんにちは、",
    name: "Ichiro",
    role: "フルスタックエンジニア",
    tagline: "数学的思考でスケーラブルなシステムを構築するソフトウェアエンジニア・時々イベンター",
    description: "要件定義からデプロイまで一気通貫で携わり、抽象化による課題解決力とプロダクト全工程を完遂する実装力で、拡張性の高いシステムを設計しています。",
    ctaText: "プロジェクトを見る",
  },

  // About Section
  about: {
    paragraphs: [
      "早大数学科に在籍しつつ、エンジニアとして3年間、要件定義からデプロイまで一貫して現場を動かしてきました。受託での課題解決と、自社開発でのプロダクト成長、その両方の視点から「技術で事業をどう伸ばすか」を考えてきました。",
      "数学的な思考プロセスを設計に活かし、複雑な要求をシンプルかつ堅牢なコードに落とし込むのが私のスタイルです。単に動くものを作るのではなく、保守性とスピードを両立させた「構造としての美しさ」と、全体最適を常に追求しています。",
      // "単に開発をするのではなく、システム全体における最適解と、課題に対しての最適解を常に試行しているのが、私のアイデンティティです。"
    ],
    quickFacts: [
      { label: "Education", value: "早稲田大学 基幹理工学部 数学科" },
      { label: "Focus", value: "モバイルアプリ / Webアプリ 設計・開発" },
      { label: "Location", value: "東京都" },
      { label: "Background", value: "麻布学園 卒" },
    ]
  },

  // Experience Section
  experience: [
    {
      title: "エンジニアインターン",
      company: "株式会社光通信",
      period: "2025.03 - 2026.03",
      description: "エンジニアインターンとして、社内プロジェクトの企画業務・開発業務・プロジェクトマネジメントに従事しました。",
      highlights: [
        "グループ会社内で足りないものを考え、システムで解決できるよう企画",
        "実装フェーズでは、フロントエンドからバックエンドまで幅広く担当。一時的にプロジェクトマネージャーも兼任し、タスク管理や進捗報告を実施",
        "AIや新規クラウド技術など、技術のキャッチアップも欠かさず、プロジェクトに積極的に取り入れることで、開発の効率化と品質向上を実現"
      ]
    },
    {
      title: "システムエンジニア（業務委託）",
      company: "株式会社変幻自在",
      period: "2024.04 - 2025.01",
      description: "業務委託契約にてシステムエンジニアとして開発業務に従事しました。",
      highlights: [
        "受託開発においてヒアリングから要件定義、設計、実装、デプロイまでの全工程を一気通貫で担当",
        "自社開発では企画段階から参画し、ビジネス目的と技術的実現性の両面を調整",
        "数学科で培ったモデル化思考を活用し、拡張性の高いアーキテクチャを設計"
      ]
    },
    {
      title: "学生AIインターン",
      company: "株式会社AI tech institute",
      period: "2023.11 - 2024.03",
      description: "インターン生としてAI技術に関連する開発業務に携わりました。",
      highlights: [
        "AI技術を活用したプロダクト開発に参画",
        "チーム開発を通じて実務レベルの開発フローを経験"
      ]
    }
  ],

  // Skills Section
  skills: [
    {
      category: "実務・主要スキル",
      subtitle: "Projects & Internships",
      items: ["TypeScript", "React", "Next.js", "HTML/CSS", "SQL", "Docker", "Firebase", "AWS","Flutter", "React Native","python"],
      variant: "secondary" as const,
    },
    {
      category: "個人開発・基礎",
      subtitle: "Personal Projects",
      items: ["TypeScript", "React", "Next.js", "HTML/CSS", "SQL", "Docker", "Firebase", "AWS","Flutter", "React Native","python"],
      variant: "secondary" as const,
    },
    {
      category: "現在学習中",
      subtitle: "Currently Exploring",
      items: ["PyTorch","Kaggle", "AWS / Cloudflare", "Three.js"],
      variant: "outline" as const,
    }
  ],

  // Projects Section
  projects: [
    {
      title: "Talk Analyser",
      description: "録音・文字起こし・要約、会議の書記や授業のノートをワンボタンで",
      tags: ["Flutter", "Rust"],
      image: "/projects/talk-analyser.png",
      type: "app",
      // downloadRef: "/apps/focus-app-v1.apk",
      // downloadText: "APKをダウンロード",
      // repoUrl: "https://github.com/ichiro16go",
    },
    {
      title: "ScanMate",
      description: "業務効率を飛躍させるAI OCRソリューション",
      tags: ["Next.js", "React",],
      image: "/projects/scanmate.png",
      type: "app",
      repoUrl:"https://github.com/mplantsconsulting/scanmate"
    },
    {
      title: "Azabu Esports Fes",
      description:"日本最高峰の頭脳を持つ高校生たちによるe-sports大会",
      tags:["e-sports","event"],
      image: "/projects/azabu-esports-fes.png",
      type:"event",
      repoUrl:"https://www.youtube.com/@azabue-sportsfesaef9091"
    },
    {
      title: "sprash festival 2024",
      description:"都内取り壊し予定のマンションを貸切って、インクで好きなように落書きできるフェスを開催",
      tags:["event","art"],
      image: "/projects/splash-fes.png",
      type:"event",
      repoUrl:"https://ichiro16go.github.io/splash_festival2024/"
    }
  ],

  // Contact Section
  contact: {
    message: "新しい機会やインターンシップについて、あるいは技術的な話題についてなど、いつでもお気軽にご連絡ください！",
    email: "ichil.9adgjm@gmail.com",
    twitter: "https://twitter.com/ichiro16go",
    github: "https://github.com/ichiro16go",
    instagram: "https://instagram.com/ichiro16go"
  }
};
