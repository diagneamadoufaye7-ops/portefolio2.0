// ===== components/ui/SectionTitle.tsx =====
// Titre de section avec animation et ligne décorative

"use client";

import { motion } from "framer-motion";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionTitle({
  title,
  subtitle,
  align = "center",
}: SectionTitleProps) {
  const alignClasses = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col ${alignClasses} mb-12`}
    >
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">
        {title}
      </h2>
      <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mb-4" />
      {subtitle && (
        <p className="text-gray-400 text-lg max-w-2xl">{subtitle}</p>
      )}
    </motion.div>
  );
}
