// ===== app/about/page.tsx =====
// Page À propos – Parcours académique, expériences, certifications

"use client";

import { motion } from "framer-motion";
import { personalInfo, experiences, education, certifications, languages, interests } from "@/data/cv";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

export default function AboutPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-16"
      >
        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="flex-shrink-0">
            <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white text-3xl font-bold shadow-lg shadow-blue-500/25">
              AF
            </div>
          </div>

          {/* Bio */}
          <div className="flex-1">
            <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
              {personalInfo.name}
            </h1>
            <p className="text-lg bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent font-semibold mb-4">
              {personalInfo.title}
            </p>
            <p className="text-gray-400 leading-relaxed mb-4">{personalInfo.bio}</p>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 text-sm text-gray-500">
              <span className="flex items-center gap-1.5">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                {personalInfo.location}
              </span>
              <a href={`mailto:${personalInfo.email}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                {personalInfo.email}
              </a>
              <a href={`tel:${personalInfo.phone}`} className="flex items-center gap-1.5 hover:text-blue-400 transition-colors">
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                {personalInfo.phone}
              </a>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ===== EXPÉRIENCES ===== */}
      <section className="mb-16">
        <SectionTitle title="Parcours professionnel" align="left" />
        <div className="relative">
          {/* Ligne verticale de timeline */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 to-transparent" />

          <div className="space-y-6">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative pl-12"
              >
                {/* Point de timeline */}
                <div className={`absolute left-2 top-2 w-5 h-5 rounded-full border-2 flex items-center justify-center ${exp.current ? "border-blue-500 bg-blue-500/20" : "border-gray-700 bg-gray-900"}`}>
                  {exp.current && <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />}
                </div>

                <div className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-white font-semibold text-base">{exp.title}</h3>
                      <p className="text-gray-400 text-sm">{exp.company} · {exp.location} · {exp.type}</p>
                    </div>
                    <span className={`text-xs px-2.5 py-1 rounded-full whitespace-nowrap ${exp.current ? "bg-blue-500/20 text-blue-300 border border-blue-500/30" : "bg-white/5 text-gray-500 border border-white/10"}`}>
                      {exp.startDate} – {exp.endDate}
                    </span>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {exp.tags.map((tag) => (
                      <Badge key={tag} label={tag} size="sm" />
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FORMATION ===== */}
      <section className="mb-16">
        <SectionTitle title="Formation académique" align="left" />
        <div className="space-y-4">
          {education.map((edu, i) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 hover:border-white/20 transition-colors"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs px-2 py-0.5 rounded-full bg-violet-500/20 text-violet-300 border border-violet-500/30">
                      {edu.degree}
                    </span>
                    {edu.grade && (
                      <span className="text-xs px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                  <h3 className="text-white font-semibold">{edu.field}</h3>
                  <p className="text-gray-400 text-sm">{edu.school} · {edu.location}</p>
                </div>
                <span className="text-gray-500 text-sm whitespace-nowrap">
                  {edu.startYear} – {edu.endYear}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CERTIFICATIONS ===== */}
      <section className="mb-16">
        <SectionTitle title="Certifications" align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 flex items-center gap-4 hover:border-white/20 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-500/20 border border-amber-500/30 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                </svg>
              </div>
              <div>
                <p className="text-white font-medium text-sm">{cert.name}</p>
                <p className="text-gray-500 text-xs">{cert.issuer} · {cert.year}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== LANGUES ===== */}
      <section className="mb-16">
        <SectionTitle title="Langues" align="left" />
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {languages.map((lang, i) => (
            <motion.div
              key={lang.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-white/5 border border-white/10 rounded-xl p-5 text-center"
            >
              <p className="text-white font-semibold mb-1">{lang.name}</p>
              <p className="text-gray-400 text-sm mb-3">{lang.level}</p>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${lang.percentage}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 + i * 0.1 }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-500 to-violet-500"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== CENTRES D'INTÉRÊT ===== */}
      <section className="mb-16">
        <SectionTitle title="Centres d'intérêt" align="left" />
        <div className="flex flex-wrap gap-4">
          {intere          cd portfolio
          git init
          git add .
          git commit -m "Initial commit: Portfolio Next.js avec CV intégré"sts.map((i) => (
            <span
              key={i}
              className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300"
            >
              {i}
            </span>
          ))}
        </div>
      </section>

      {/* ===== VISION PROFESSIONNELLE ===== */}
      <section>
        <SectionTitle title="Vision professionnelle" align="left" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-blue-600/10 to-violet-600/10 border border-white/10 rounded-2xl p-8"
        >
          <p className="text-gray-300 leading-relaxed text-lg mb-6">
            Mon objectif est de contribuer à des projets data ambitieux au niveau international, 
            en alliant rigueur technique et impact business. Je m&apos;intéresse particulièrement 
            aux architectures cloud-native, aux pipelines de données à grande échelle et à 
            l&apos;application de l&apos;IA pour résoudre des problèmes concrets.
          </p>
          <p className="text-gray-400 leading-relaxed">
            En tant que professionnel basé en Afrique de l&apos;Ouest, je suis également passionné 
            par la démocratisation des technologies de données sur le continent africain, 
            convaincu que la maîtrise des données est un levier de développement majeur.
          </p>
        </motion.div>
      </section>
    </div>
  );
}
