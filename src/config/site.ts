export const siteConfig = {
  name: "Ichiro's Portfolio",
  description: "宮本一路のポートフォリオサイト — 数学的思考でスケーラブルなシステムを構築するソフトウェアエンジニア",
  url: "https://example.com",
  
  // Navigation Links
  navLinks: [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ],

  // Hero Section
  hero: {
    greeting: "こんにちは、",
    name: "Ichiro",
    role: "ソフトウェアエンジニア",
    tagline: "数学的思考で、スケーラブルなWeb体験を構築する",
    description: "要件定義からデプロイまで一気通貫で携わり、抽象化による課題解決力とプロダクト全工程を完遂する実装力で、拡張性の高いシステムを設計しています。",
    ctaText: "プロジェクトを見る",
  },

  // About Section
  about: {
    paragraphs: [
      "早稲田大学基幹理工学部数学科に在学中の学生エンジニアです。大学在学中の3年間、受託および自社開発の両面で、要件定義からデプロイまで一気通貫で携わってきました。",
      "受託開発ではヒアリングを通じて顧客の曖昧な要求を整理し、自社開発では企画段階から参画することで、ビジネス上の目的と技術的実現性を調整する経験を積みました。数学科で培った事象をモデル化（定式化）する思考を開発に転用し、拡張性の高いアーキテクチャを設計し、開発のスピードと保守性を両立させています。",
      "単に開発をするのではなく、システム全体における最適解と、課題に対しての最適解を常に試行しているのが、私のアイデンティティです。"
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
      title: "インターン",
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
      items: ["TypeScript", "React", "Next.js", "HTML/CSS"],
      variant: "secondary" as const,
    },
    {
      category: "個人開発・基礎",
      subtitle: "Personal Projects",
      items: ["Node.js", "Framer Motion", "Git/GitHub", "Tailwind CSS"],
      variant: "secondary" as const,
    },
    {
      category: "現在学習中",
      subtitle: "Currently Exploring",
      items: ["Go", "AWS / Cloudflare", "Three.js"],
      variant: "outline" as const,
    }
  ],

  // Projects Section
  projects: [
    {
      title: "Focus Productivity App",
      description: "最大限の集中力を生み出すために設計されたタスク管理アプリです。ポモドーロタイマーと分析ダッシュボードを搭載しています。",
      tags: ["React Native", "Expo"],
      imagePlaceholder: "[App Demo / Screenshot]",
      type: "app",
      downloadRef: "/apps/focus-app-v1.apk",
      downloadText: "APKをダウンロード",
      repoUrl: "https://github.com/ichiro16go",
    },
    {
      title: "Reactにおけるハイドレーションの理解",
      description: "Next.jsにおいて、サーバーサイドレンダリング（SSR）とハイドレーションが内部でどのように機能しているのかを深く掘り下げた技術記事です。",
      tags: ["Next.js", "React", "Tech Blog"],
      imagePlaceholder: "[Zenn / Qiita Cover Image]",
      type: "article",
      articleUrl: "#",
      articleText: "記事を読む",
      isGradientBg: true,
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
