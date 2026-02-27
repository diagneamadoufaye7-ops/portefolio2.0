// ===== app/skills/page.tsx =====
// Page Compétences – Catégories avec barres de progression animées

"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SkillBar from "@/components/ui/SkillBar";
import SectionTitle from "@/components/ui/SectionTitle";

// Icônes SVG pour chaque catégorie
const CategoryIcon = ({ icon, color }: { icon: string; color: string }) => {
  const icons: Record<string, React.ReactNode> = {
    database: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    cloud: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    brain: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
    chart: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    code: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
      </svg>
    ),
    terminal: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  };

  return (
    <div
      className="w-10 h-10 rounded-xl flex items-center justify-center"
      style={{ backgroundColor: `${color}20`, color }}
    >
      {icons[icon]}
    </div>
  );
};

export default function SkillsPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16">
      <SectionTitle
        title="Compétences Techniques"
        subtitle="Maîtrise des technologies clés en Data Engineering, Cloud, IA et développement – avec niveaux de compétence évalués"
      />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, catIndex) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: catIndex * 0.1 }}
            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-colors"
          >
            {/* Header de catégorie */}
            <div className="flex items-center gap-3 mb-6">
              <CategoryIcon icon={category.icon} color={category.color} />
              <h2 className="text-white font-bold text-lg">{category.title}</h2>
            </div>

            {/* Barres de compétences */}
            <div className="space-y-1">
              {category.skills.map((skill, skillIndex) => (
                <SkillBar
                  key={skill.name}
                  name={skill.name}
                  level={skill.level}
                  color={category.color}
                  delay={catIndex * 0.1 + skillIndex * 0.05}
                />
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Légende des niveaux */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 bg-white/5 border border-white/10 rounded-xl p-6"
      >
        <h3 className="text-white font-semibold mb-4">Légende des niveaux</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { range: "90-100%", label: "Expert", color: "#10B981" },
            { range: "75-89%", label: "Avancé", color: "#3B82F6" },
            { range: "60-74%", label: "Intermédiaire", color: "#F59E0B" },
            { range: "< 60%", label: "Notions", color: "#6B7280" },
          ].map((level) => (
            <div key={level.label} className="flex items-center gap-2">
              <div
                className="w-3 h-3 rounded-full flex-shrink-0"
                style={{ backgroundColor: level.color }}
              />
              <div>
                <p className="text-white text-xs font-medium">{level.label}</p>
                <p className="text-gray-600 text-xs">{level.range}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
