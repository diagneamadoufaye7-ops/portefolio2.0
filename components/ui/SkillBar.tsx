// ===== components/ui/SkillBar.tsx =====
// Barre de progression animée pour les compétences

"use client";

import { motion } from "framer-motion";

interface SkillBarProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
}

export default function SkillBar({
  name,
  level,
  color = "#3B82F6",
  delay = 0,
}: SkillBarProps) {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-sm font-medium text-gray-300">{name}</span>
        <span className="text-xs text-gray-500">{level}%</span>
      </div>
      <div className="h-2 bg-white/5 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay, ease: "easeOut" }}
          className="h-full rounded-full"
          style={{
            background: `linear-gradient(90deg, ${color}aa, ${color})`,
          }}
        />
      </div>
    </div>
  );
}
