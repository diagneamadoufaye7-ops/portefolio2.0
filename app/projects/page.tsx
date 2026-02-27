// ===== app/projects/page.tsx =====
// Liste de tous les projets avec filtres par catégorie

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import SectionTitle from "@/components/ui/SectionTitle";

// Catégories disponibles pour le filtre
const categories = ["Tous", "Cloud Engineering", "Intelligence Artificielle", "Data Science", "Web Development", "Database Administration"];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("Tous");

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionTitle
        title="Mes Projets"
        subtitle="Réalisations en Data Engineering, Cloud Computing, Intelligence Artificielle et Administration de Bases de Données"
      />

      {/* Filtres de catégories */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="flex flex-wrap gap-2 justify-center mb-10"
      >
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveFilter(cat)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeFilter === cat
                ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-500/20"
                : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grille de projets */}
      <motion.div
        key={activeFilter}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {filtered.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="text-center text-gray-500 py-16">Aucun projet dans cette catégorie.</p>
      )}
    </div>
  );
}
