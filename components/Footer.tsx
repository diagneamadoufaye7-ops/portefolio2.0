// ===== components/Footer.tsx =====
// Pied de page avec liens et informations de contact

import Link from "next/link";
import { personalInfo } from "@/data/cv";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center">
                <span className="text-white font-bold text-sm">AF</span>
              </div>
              <span className="text-white font-semibold">Amadou Faye Diagne</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Data Analyst · DBA · Cloud Engineer
              <br />
              Dakar, Sénégal
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Navigation</h3>
            <ul className="space-y-2">
              {[
                { href: "/about", label: "À propos" },
                { href: "/projects", label: "Projets" },
                { href: "/skills", label: "Compétences" },
                { href: "/architecture", label: "Architecture" },
                { href: "/blog", label: "Blog" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white text-sm font-semibold mb-3">Contact</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${personalInfo.phone}`}
                  className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
                >
                  {personalInfo.phone}
                </a>
              </li>
              <li>
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 text-sm hover:text-blue-400 transition-colors"
                >
                  LinkedIn / Portfolio
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-xs">
            © {currentYear} Amadou Faye Diagne. Tous droits réservés.
          </p>
          <p className="text-gray-600 text-xs">
            Built with Next.js 14 · TypeScript · Tailwind CSS · Framer Motion
          </p>
        </div>
      </div>
    </footer>
  );
}
