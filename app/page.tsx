// ===== app/page.tsx =====
// Page d'accueil – Hero section avec animations Framer Motion

"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { personalInfo } from "@/data/cv";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import Badge from "@/components/ui/Badge";
import SectionTitle from "@/components/ui/SectionTitle";

// Stack technique principale à afficher sur la hero
const techStack = [
  "Python", "PostgreSQL", "MySQL", "AWS RDS", "AWS DMS",
  "CloudWatch", "IAM", "YOLOv8", "Power BI", "Tableau",
  "Django", "Machine Learning", "PowerShell", "SQL",
];

// Statistiques clés pour la crédibilité
const stats = [
  { value: "5+", label: "Projets réalisés" },
  { value: "3+", label: "Ans d'expérience" },
  { value: "AWS", label: "Certifié Cloud" },
  { value: "2", label: "Certifications" },
];

export default function HomePage() {
  const featuredProjects = projects.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center overflow-hidden">
        {/* Fond avec gradients décoratifs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-500/10 rounded-full blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/5 rounded-full blur-3xl" />
        </div>

        {/* Grille de points décorative */}
        <div
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff18 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 py-20">
          <div className="max-w-3xl">
            {/* Statut disponible */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Disponible pour de nouvelles opportunités
            </motion.div>

            {/* Titre principal */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-4"
            >
              {personalInfo.name}
            </motion.h1>

            {/* Sous-titre avec gradient */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl sm:text-2xl font-semibold mb-6"
            >
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Data Analyst · DBA · Cloud Engineer
              </span>
            </motion.p>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-gray-400 text-lg leading-relaxed mb-8 max-w-2xl"
            >
              Spécialisé en bases de données, cloud AWS et intelligence artificielle.
              Je transforme des données complexes en solutions concrètes et mesurables.
              Basé à {personalInfo.location}.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <Link
                href="/projects"
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
              >
                Voir mes projets
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 bg-white/10 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/15 transition-colors"
              >
                Me contacter
              </Link>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white/5 border border-white/10 text-gray-300 font-medium rounded-xl hover:bg-white/10 transition-colors"
              >
                LinkedIn / Portfolio
              </a>
            </motion.div>

            {/* Stack technique */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <p className="text-gray-600 text-xs font-medium uppercase tracking-widest mb-3">
                Stack technique
              </p>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, i) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.04 }}
                  >
                    <Badge label={tech} variant="default" size="sm" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ===== STATS SECTION ===== */}
      <section className="border-y border-white/5 bg-white/2">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJETS EN VEDETTE ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 py-20">
        <SectionTitle
          title="Projets en vedette"
          subtitle="Mes réalisations les plus significatives en Data Engineering, Cloud et IA"
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.slug} project={project} index={i} />
          ))}
        </div>
        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 border border-white/20 text-gray-300 rounded-xl hover:bg-white/5 transition-colors"
          >
            Voir tous les projets
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-blue-600/20 to-violet-600/20 border border-white/10 p-10 text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-violet-600/10 pointer-events-none" />
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Prêt à collaborer sur votre prochain projet data ?
          </h2>
          <p className="text-gray-400 mb-8 max-w-xl mx-auto">
            Que ce soit pour une migration cloud, un pipeline ML ou l&apos;optimisation de vos bases de données, 
            discutons de vos besoins.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3 bg-white text-gray-900 font-semibold rounded-xl hover:bg-gray-100 transition-colors"
            >
              Démarrer une conversation
            </Link>
            <Link
              href="/about"
              className="px-8 py-3 bg-white/10 border border-white/20 text-white font-medium rounded-xl hover:bg-white/15 transition-colors"
            >
              En savoir plus sur moi
            </Link>
          </div>
        </motion.div>
      </section>
    </>
  );
}
