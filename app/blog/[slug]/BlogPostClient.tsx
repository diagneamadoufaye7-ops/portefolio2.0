// ===== app/blog/[slug]/BlogPostClient.tsx =====
// Composant client pour l'affichage d'un article de blog

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import type { BlogPost } from "@/data/blog";
import Badge from "@/components/ui/Badge";

interface Props {
  post: BlogPost;
}

// Transforme le markdown simplifié en HTML pour l'affichage
function renderContent(content: string): string {
  return content
    .replace(/^## (.+)$/gm, '<h2>$1</h2>')
    .replace(/^### (.+)$/gm, '<h3>$1</h3>')
    .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
    .replace(/`([^`]+)`/g, '<code>$1</code>')
    .replace(/^- (.+)$/gm, '<li>$1</li>')
    .replace(/(<li>.*<\/li>\n?)+/g, '<ul>$&</ul>')
    .replace(/```[\w]*\n([\s\S]*?)```/g, '<pre><code>$1</code></pre>')
    .replace(/\n\n/g, '</p><p>')
    .replace(/^(.+)$/gm, (line) =>
      line.startsWith('<') ? line : `<p>${line}</p>`
    );
}

export default function BlogPostClient({ post }: Props) {
  const formattedDate = new Date(post.date).toLocaleDateString("fr-FR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 py-16">
      {/* Breadcrumb */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center gap-2 text-sm text-gray-500 mb-8"
      >
        <Link href="/blog" className="hover:text-gray-300 transition-colors">Blog</Link>
        <span>/</span>
        <span className="text-gray-400 truncate max-w-xs">{post.title}</span>
      </motion.div>

      {/* Header de l'article */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-10"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
            {post.category}
          </span>
          <span className="text-gray-600 text-xs">{post.readTime} min de lecture</span>
          <span className="text-gray-600 text-xs">{formattedDate}</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
          {post.title}
        </h1>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">{post.excerpt}</p>

        <div className="flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <Badge key={tag} label={tag} size="sm" />
          ))}
        </div>
      </motion.header>

      {/* Séparateur */}
      <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-10" />

      {/* Corps de l'article */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="prose-dark"
        dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
      />

      {/* Footer de l'article */}
      <div className="mt-12 pt-8 border-t border-white/10">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-gray-500 text-sm">Écrit par</p>
            <p className="text-white font-semibold">Amadou Faye Diagne</p>
            <p className="text-gray-500 text-xs">Data Analyst · DBA · Cloud Engineer</p>
          </div>
          <Link
            href="/blog"
            className="flex items-center gap-2 px-5 py-2.5 border border-white/10 text-gray-400 rounded-xl hover:bg-white/5 transition-colors text-sm"
          >
            ← Tous les articles
          </Link>
        </div>
      </div>
    </div>
  );
}
