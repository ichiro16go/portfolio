"use client"

import { useEffect, useState } from "react"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Heart, MessageCircle } from "lucide-react"

interface QiitaTag {
  name: string
}

interface QiitaArticle {
  id: string
  title: string
  url: string
  likes_count: number
  comments_count: number
  created_at: string
  tags: QiitaTag[]
}

export function QiitaArticles({ username }: { username: string }) {
  const [articles, setArticles] = useState<QiitaArticle[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    fetch(`https://qiita.com/api/v2/users/${username}/items?per_page=20`)
      .then(res => {
        if (!res.ok) throw new Error()
        return res.json()
      })
      .then(setArticles)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [username])

  if (loading) {
    return (
      <div className="h-40 flex items-center justify-center text-[var(--text-slate)] font-logic text-sm tracking-widest animate-pulse">
        LOADING ARTICLES...
      </div>
    )
  }

  if (error) {
    return (
      <div className="h-40 flex items-center justify-center text-[var(--text-slate)] font-logic text-sm tracking-widest">
        FAILED TO LOAD ARTICLES
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="h-40 flex items-center justify-center text-[var(--text-slate)] font-logic text-sm tracking-widest">
        NO ARTICLES FOUND
      </div>
    )
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {articles.map(article => (
        <a
          key={article.id}
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group glass rounded-lg p-4 border border-white/5 hover:border-[var(--brand-cyber)]/30 transition-all duration-300 block"
        >
          <div className="flex items-start justify-between gap-2 mb-3">
            <h3 className="font-logic text-sm font-bold text-[var(--text-white)] group-hover:text-[var(--brand-cyber)] transition-colors line-clamp-2 leading-snug">
              {article.title}
            </h3>
            <ExternalLink
              size={14}
              className="shrink-0 text-[var(--text-slate)] group-hover:text-[var(--brand-cyber)] transition-colors mt-0.5"
            />
          </div>

          <div className="flex flex-wrap gap-1.5 mb-3">
            {article.tags.slice(0, 4).map(tag => (
              <Badge
                key={tag.name}
                variant="outline"
                className="text-[9px] px-1.5 py-0 text-[var(--text-slate)] border-white/10"
              >
                {tag.name}
              </Badge>
            ))}
          </div>

          <div className="flex items-center justify-between text-[10px] text-[var(--text-slate)] font-logic">
            <span>{new Date(article.created_at).toLocaleDateString("ja-JP")}</span>
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1">
                <Heart size={10} className="text-[var(--brand-prism)]" />
                {article.likes_count}
              </span>
              <span className="flex items-center gap-1">
                <MessageCircle size={10} />
                {article.comments_count}
              </span>
            </div>
          </div>
        </a>
      ))}
    </div>
  )
}
