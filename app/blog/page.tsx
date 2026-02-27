// ===== app/blog/page.tsx =====
// Page Blog – Liste des articles techniques

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { blogPosts } from "@/data/blog";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export default function BlogPage() {
  const featured = blogPosts.filter((p) => p.featured);
  const rest = blogPosts.filter((p) => !p.featured);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionTitle
        title="Blog Technique"
        subtitle="Articles sur le Data Engineering, le Cloud AWS, l'Administration de Bases de Données et l'Intelligence Artificielle"
      />

      {/* Articles en vedette */}
      {featured.length > 0 && (
        <div className="mb-12">
          <h2 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-6">
            Articles à la une
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featured.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
              >
                <Link href={`/blog/${post.slug}`} className="block h-full">
                  <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/20 text-blue-300 border border-blue-500/30">
                        {post.category}
                      </span>
                      <span className="text-gray-600 text-xs">{post.readTime} min de lecture</span>
                    </div>
                    <h2 className="text-white font-bold text-lg mb-3 leading-tight">{post.title}</h2>
                    <p className="text-gray-400 text-sm leading-relaxed mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-wrap gap-1.5">
                        {post.tags.slice(0, 3).map((tag) => (
                          <Badge key={tag} label={tag} size="sm" />
                        ))}
                      </div>
                      <span className="text-gray-600 text-xs">
                        {new Date(post.date).toLocaleDateString("fr-FR", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* Autres articles */}
      {rest.length > 0 && (
        <div>
          <h2 className="text-gray-500 text-xs font-semibold uppercase tracking-widest mb-6">
            Tous les articles
          </h2>
          <div className="space-y-4">
            {rest.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 hover:bg-white/8 transition-all duration-200 flex flex-col sm:flex-row sm:items-center gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                          {post.category}
                        </span>
                        <span className="text-gray-600 text-xs">{post.readTime} min</span>
                      </div>
                      <h3 className="text-white font-semibold">{post.title}</h3>
                      <p className="text-gray-500 text-sm mt-1 line-clamp-2">{post.excerpt}</p>
                    </div>
                    <div className="text-gray-600 text-xs whitespace-nowrap">
                      {new Date(post.date).toLocaleDateString("fr-FR", { year: "numeric", month: "long" })}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {/* CTA newsletter */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-white/10 rounded-2xl p-8 text-center"
      >
        <h3 className="text-white font-bold text-xl mb-3">
          Prochains articles en préparation
        </h3>
        <p className="text-gray-400 mb-2">
          Analyse de churn avec Scikit-learn · Optimisation PostgreSQL avancée · Déploiement MLOps sur AWS
        </p>
        <p className="text-gray-500 text-sm">
          Retrouvez mes articles techniques sur{" "}
          <a href="https://tinyurl.ee/RJeIW" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">
            mon portfolio
          </a>
        </p>
      </motion.div>
    </div>
  );
}
