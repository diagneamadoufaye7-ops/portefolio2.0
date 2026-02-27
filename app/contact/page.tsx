// ===== app/contact/page.tsx =====
// Page Contact – Formulaire avec validation TypeScript

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { personalInfo } from "@/data/cv";
import SectionTitle from "@/components/ui/SectionTitle";

// Types stricts pour le formulaire
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

// Validation côté client
function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = "Le nom doit contenir au moins 2 caractères.";
  }

  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "Adresse e-mail invalide.";
  }

  if (!data.subject.trim() || data.subject.trim().length < 5) {
    errors.subject = "Le sujet doit contenir au moins 5 caractères.";
  }

  if (!data.message.trim() || data.message.trim().length < 20) {
    errors.message = "Le message doit contenir au moins 20 caractères.";
  }

  return errors;
}

// Informations de contact
const contactInfo = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: "E-mail",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: "Téléphone",
    value: personalInfo.phone,
    href: `tel:${personalInfo.phone}`,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: "Localisation",
    value: personalInfo.location,
    href: null,
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
      </svg>
    ),
    label: "Portfolio / LinkedIn",
    value: "Voir mon profil",
    href: personalInfo.linkedin,
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Mise à jour d'un champ du formulaire
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Effacer l'erreur du champ modifié
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  // Soumission du formulaire
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const validationErrors = validateForm(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        console.error("Contact API error", body);
        setStatus("error");
        return;
      }

      setStatus("success");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Contact submit failed:", err);
      setStatus("error");
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionTitle
        title="Contact"
        subtitle="Discutons de votre prochain projet data, cloud ou IA. Je réponds généralement sous 24h."
      />

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        {/* Infos de contact */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-4"
        >
          <h2 className="text-white font-semibold mb-6">Informations de contact</h2>

          {contactInfo.map((info, i) => (
            <motion.div
              key={info.label}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
              className="flex items-start gap-4 p-4 bg-white/5 border border-white/10 rounded-xl hover:border-white/20 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-blue-500/20 text-blue-400 flex items-center justify-center flex-shrink-0">
                {info.icon}
              </div>
              <div>
                <p className="text-gray-500 text-xs mb-0.5">{info.label}</p>
                {info.href ? (
                  <a
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="text-white text-sm hover:text-blue-400 transition-colors"
                  >
                    {info.value}
                  </a>
                ) : (
                  <p className="text-white text-sm">{info.value}</p>
                )}
              </div>
            </motion.div>
          ))}

          {/* Disponibilité */}
          <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-xl">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-green-400 text-sm font-medium">Disponible</span>
            </div>
            <p className="text-gray-400 text-xs leading-relaxed">
              Ouvert aux opportunités en Data Engineering, DBA, Cloud AWS et projets freelance.
            </p>
          </div>
        </motion.div>

        {/* Formulaire */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            {/* Nom */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1.5">
                Nom complet <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Jean Dupont"
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.name
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                }`}
              />
              {errors.name && <p className="mt-1 text-red-400 text-xs">{errors.name}</p>}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1.5">
                Adresse e-mail <span className="text-red-400">*</span>
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="jean@exemple.com"
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 transition-colors ${
                  errors.email
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                }`}
              />
              {errors.email && <p className="mt-1 text-red-400 text-xs">{errors.email}</p>}
            </div>

            {/* Sujet */}
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1.5">
                Sujet <span className="text-red-400">*</span>
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-sm focus:outline-none focus:ring-1 transition-colors appearance-none ${
                  formData.subject ? "text-white" : "text-gray-600"
                } ${
                  errors.subject
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                }`}
                style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              >
                <option value="" className="bg-gray-900 text-gray-400">Sélectionner un sujet</option>
                <option value="Opportunité de travail" className="bg-gray-900 text-white">Opportunité de travail</option>
                <option value="Projet freelance" className="bg-gray-900 text-white">Projet freelance</option>
                <option value="Collaboration" className="bg-gray-900 text-white">Collaboration</option>
                <option value="Migration Cloud / AWS" className="bg-gray-900 text-white">Migration Cloud / AWS</option>
                <option value="Analyse de données" className="bg-gray-900 text-white">Analyse de données</option>
                <option value="Autre" className="bg-gray-900 text-white">Autre</option>
              </select>
              {errors.subject && <p className="mt-1 text-red-400 text-xs">{errors.subject}</p>}
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={formData.message}
                onChange={handleChange}
                placeholder="Décrivez votre projet ou votre demande..."
                className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-600 text-sm focus:outline-none focus:ring-1 transition-colors resize-none ${
                  errors.message
                    ? "border-red-500/50 focus:border-red-500 focus:ring-red-500/20"
                    : "border-white/10 focus:border-blue-500/50 focus:ring-blue-500/20"
                }`}
              />
              <div className="flex justify-between mt-1">
                {errors.message ? (
                  <p className="text-red-400 text-xs">{errors.message}</p>
                ) : (
                  <span />
                )}
                <span className="text-gray-600 text-xs">{formData.message.length} / 1000</span>
              </div>
            </div>

            {/* Bouton d'envoi */}
            <button
              type="submit"
              disabled={status === "sending"}
              className="w-full py-3.5 px-6 bg-gradient-to-r from-blue-600 to-violet-600 text-white font-semibold rounded-xl hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed transition-opacity shadow-lg shadow-blue-500/20 flex items-center justify-center gap-2"
            >
              {status === "sending" ? (
                <>
                  <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer le message
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                  </svg>
                </>
              )}
            </button>

            {/* Messages de statut */}
            {status === "success" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-green-500/20 border border-green-500/30 rounded-xl text-green-400 text-sm flex items-center gap-2"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Message envoyé avec succès ! Je vous répondrai sous 24h.
              </motion.div>
            )}
            {status === "error" && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-400 text-sm"
              >
                Une erreur est survenue. Veuillez me contacter directement par e-mail.
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
}
