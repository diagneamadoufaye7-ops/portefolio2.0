// ===== app/api/contact/route.ts =====
// API serverless pour recevoir les messages du formulaire de contact

import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body as {
      name?: string;
      email?: string;
      subject?: string;
      message?: string;
    };

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Champs manquants" }, { status: 400 });
    }

    // Vérification basique d'email
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: "Email invalide" }, { status: 400 });
    }

    // Si des variables SMTP sont configurées, tenter d'envoyer un e-mail (nodemailer optionnel)
    if (process.env.SMTP_HOST && process.env.SMTP_USER && process.env.SMTP_PASS) {
      try {
        // import nodemailer dynamiquement pour ne pas casser l'environnement local
        // si le paquet n'est pas installé. En production installez-le :
        // npm install nodemailer
        const { default: nodemailer } = await import("nodemailer");
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: parseInt(process.env.SMTP_PORT || "587", 10),
          secure: process.env.SMTP_SECURE === "true",
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });

        await transporter.sendMail({
          from: process.env.SMTP_FROM || process.env.SMTP_USER,
          to: process.env.CONTACT_RECEIVER || process.env.SMTP_USER,
          subject: `[Portfolio] ${subject} — ${name}`,
          text: `Message envoyé depuis le portfolio\n\nNom: ${name}\nEmail: ${email}\nSujet: ${subject}\n\n${message}`,
        });
      } catch (err) {
        console.error("Erreur envoi mail:", err);
        return NextResponse.json({ error: "Échec envoi e-mail" }, { status: 500 });
      }
    } else {
      // Pas de SMTP configuré : journaliser côté serveur (pour débogage en local)
      // Les logs apparaîtront dans la sortie serveur (Vercel logs / local terminal)
      // Vous pouvez remplacer ce bloc par un push vers un service tiers (Notion, Google Sheets, etc.)
      // pour récupérer les messages en production si vous ne souhaitez pas configurer SMTP.
      // ATTENTION: Ne pas laisser les logs publics contenant des informations privées.
      console.log("Contact form (no SMTP configured):", { name, email, subject, message });
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}
