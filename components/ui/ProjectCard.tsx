// ===== components/ui/ProjectCard.tsx =====
// Carte de projet avec animation hover

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Badge from "./Badge";
import type { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  index?: number;
}

export default function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  const categoryColors: Record<string, string> = {
    "Cloud Engineering": "#F59E0B",
    "Intelligence Artificielle": "#8B5CF6",
    "Data Science": "#10B981",
    "Web Development": "#3B82F6",
    "Database Administration": "#EF4444",
  };

  const color = categoryColors[project.category] || "#3B82F6";

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
    >
      <Link href={`/projects/${project.slug}`} className="block h-full">
        <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 hover:bg-white/8 transition-all duration-300 flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <span
              className="text-xs font-semibold px-2.5 py-1 rounded-full"
              style={{
                backgroundColor: `${color}20`,
                color,
                border: `1px solid ${color}40`,
              }}
            >
              {project.category}
            </span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                project.status === "completed"
                  ? "bg-green-500/20 text-green-400 border border-green-500/30"
                  : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
              }`}
            >
              {project.status === "completed" ? "Terminé" : "En cours"}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-white mb-3 leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
            {project.shortDescription}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5">
            {project.tags.slice(0, 4).map((tag) => (
              <Badge key={tag} label={tag} size="sm" />
            ))}
            {project.tags.length > 4 && (
              <Badge label={`+${project.tags.length - 4}`} size="sm" />
            )}
          </div>

          {/* Arrow indicator */}
          <div className="mt-4 flex items-center text-sm font-medium" style={{ color }}>
            Voir le projet
            <svg className="ml-1 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
