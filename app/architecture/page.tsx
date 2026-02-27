// ===== app/architecture/page.tsx =====
// Page Architecture – Explications détaillées des architectures techniques

"use client";

import { motion } from "framer-motion";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";

// Définition des architectures à détailler
const architectures = [
  {
    id: "aws-migration",
    title: "Migration PostgreSQL → AWS RDS",
    subtitle: "Architecture Cloud Migration avec zero-downtime",
    color: "#F59E0B",
    overview:
      "Architecture de migration d'une base de données PostgreSQL on-premise vers AWS RDS, en garantissant la continuité de service, la sécurité des données et l'automatisation du monitoring.",
    layers: [
      {
        name: "Couche Source",
        color: "#3B82F6",
        components: ["PostgreSQL Local", "pg_dump / logical replication", "AWS CLI"],
      },
      {
        name: "Couche Migration",
        color: "#F59E0B",
        components: ["AWS DMS (Database Migration Service)", "Replication Instance", "Endpoints Source/Cible"],
      },
      {
        name: "Couche Destination",
        color: "#10B981",
        components: ["AWS RDS PostgreSQL Multi-AZ", "Amazon VPC", "Security Groups"],
      },
      {
        name: "Couche Sécurité",
        color: "#EF4444",
        components: ["AWS IAM Roles & Policies", "KMS (Chiffrement)", "SSL/TLS"],
      },
      {
        name: "Couche Monitoring",
        color: "#8B5CF6",
        components: ["Amazon CloudWatch Metrics", "CloudWatch Alarms", "SNS Notifications"],
      },
      {
        name: "Couche Automatisation",
        color: "#6366F1",
        components: ["PowerShell Scripts", "AWS Lambda (optionnel)", "S3 Backup Storage"],
      },
    ],
    keyDecisions: [
      "Choix de DMS pour la migration en ligne (zéro downtime)",
      "Multi-AZ pour la haute disponibilité (99.95% SLA)",
      "IAM avec principe du moindre privilège",
      "Chiffrement KMS au repos et SSL en transit",
      "CloudWatch pour alertes proactives",
    ],
    tags: ["AWS", "PostgreSQL", "RDS", "DMS", "CloudWatch", "IAM", "PowerShell"],
  },
  {
    id: "ml-pipeline",
    title: "Pipeline Machine Learning – Détection EPI",
    subtitle: "Architecture Computer Vision en temps réel",
    color: "#8B5CF6",
    overview:
      "Pipeline complet de détection d'objets en temps réel basé sur YOLOv8 pour identifier le port des équipements de protection individuelle, avec interface Streamlit et système d'alertes.",
    layers: [
      {
        name: "Couche Ingestion",
        color: "#3B82F6",
        components: ["Flux Vidéo (Webcam / RTSP)", "OpenCV VideoCapture", "Frame Buffer"],
      },
      {
        name: "Couche Prétraitement",
        color: "#F59E0B",
        components: ["Redimensionnement (640x640)", "Normalisation RGB", "Batch Processing"],
      },
      {
        name: "Couche Inférence",
        color: "#8B5CF6",
        components: ["YOLOv8 Model (.pt)", "NMS (Non-Maximum Suppression)", "Confidence Filtering (>0.5)"],
      },
      {
        name: "Couche Post-traitement",
        color: "#10B981",
        components: ["Bounding Box Drawing", "Class Classification", "Non-compliance Detection"],
      },
      {
        name: "Couche Interface",
        color: "#EF4444",
        components: ["Streamlit Dashboard", "Real-time Frame Display", "Alert Panel"],
      },
      {
        name: "Couche Alertes",
        color: "#F59E0B",
        components: ["Violation Logger", "Automatic Notifications", "Incident Reports"],
      },
    ],
    keyDecisions: [
      "YOLOv8 pour le meilleur équilibre vitesse/précision",
      "Streamlit pour un déploiement rapide sans front-end dédié",
      "Seuil de confiance à 0.5 pour réduire les faux positifs",
      "Processing frame-by-frame pour la latence temps réel",
      "Architecture modulaire permettant le remplacement du modèle",
    ],
    tags: ["Python", "YOLOv8", "OpenCV", "Streamlit", "Computer Vision", "Deep Learning"],
  },
  {
    id: "monitoring-security",
    title: "Monitoring & Sécurité AWS",
    subtitle: "Architecture observabilité cloud-native",
    color: "#10B981",
    overview:
      "Architecture de monitoring complète sur AWS combinant CloudWatch, IAM et bonnes pratiques de sécurité pour une infrastructure de base de données cloud résiliente et auditable.",
    layers: [
      {
        name: "Couche Ressources",
        color: "#3B82F6",
        components: ["AWS RDS (PostgreSQL)", "AWS EC2 (Optionnel)", "AWS S3 (Backups)"],
      },
      {
        name: "Couche Collecte",
        color: "#F59E0B",
        components: ["CloudWatch Agent", "RDS Enhanced Monitoring", "VPC Flow Logs"],
      },
      {
        name: "Couche Métriques",
        color: "#10B981",
        components: ["CPU / Memory Utilization", "DB Connections", "Read/Write IOPS", "Free Storage Space"],
      },
      {
        name: "Couche Alertes",
        color: "#EF4444",
        components: ["CloudWatch Alarms", "SNS Topics", "Email / SMS Notifications"],
      },
      {
        name: "Couche Sécurité",
        color: "#8B5CF6",
        components: ["IAM Roles & Policies", "AWS CloudTrail (Audit)", "AWS Config (Conformité)"],
      },
      {
        name: "Couche Visualisation",
        color: "#6366F1",
        components: ["CloudWatch Dashboards", "Custom Metrics", "Log Insights Queries"],
      },
    ],
    keyDecisions: [
      "CloudWatch comme single source of truth pour les métriques",
      "IAM granulaire – un rôle par service applicatif",
      "CloudTrail pour l'auditabilité complète des actions",
      "Seuils d'alerte calibrés sur les patterns de charge",
      "Rétention des logs à 30 jours minimum",
    ],
    tags: ["AWS", "CloudWatch", "IAM", "CloudTrail", "RDS", "Monitoring", "Security"],
  },
];

export default function ArchitecturePage() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-16">
      <SectionTitle
        title="Architectures Techniques"
        subtitle="Conception et documentation des architectures cloud, data et IA réalisées dans mes projets"
      />

      <div className="space-y-16">
        {architectures.map((arch, archIndex) => (
          <motion.section
            key={arch.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: archIndex * 0.1 }}
          >
            {/* Header de l'architecture */}
            <div className="mb-8">
              <div
                className="inline-block text-xs font-semibold px-3 py-1 rounded-full mb-3"
                style={{ backgroundColor: `${arch.color}20`, color: arch.color, border: `1px solid ${arch.color}40` }}
              >
                Architecture #{archIndex + 1}
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{arch.title}</h2>
              <p className="text-gray-400 mb-4">{arch.subtitle}</p>
              <p className="text-gray-400 leading-relaxed max-w-3xl">{arch.overview}</p>
            </div>

            {/* Diagramme des couches */}
            <div className="bg-gray-900 border border-white/10 rounded-2xl p-6 mb-6">
              <p className="text-gray-600 text-xs uppercase tracking-widest mb-6 text-center">
                Vue en couches de l&apos;architecture
              </p>
              <div className="space-y-3">
                {arch.layers.map((layer, layerIndex) => (
                  <motion.div
                    key={layer.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: layerIndex * 0.07 }}
                    className="flex flex-col sm:flex-row gap-3 items-start sm:items-center"
                  >
                    {/* Label de couche */}
                    <div
                      className="flex-shrink-0 w-full sm:w-36 text-xs font-medium px-3 py-1.5 rounded-lg text-center"
                      style={{ backgroundColor: `${layer.color}15`, color: layer.color, border: `1px solid ${layer.color}30` }}
                    >
                      {layer.name}
                    </div>

                    {/* Flèche */}
                    <svg className="hidden sm:block w-4 h-4 text-gray-700 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>

                    {/* Composants */}
                    <div className="flex flex-wrap gap-2 flex-1">
                      {layer.components.map((comp) => (
                        <span
                          key={comp}
                          className="text-xs px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 text-gray-300"
                        >
                          {comp}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Décisions clés */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
                  <svg className="w-4 h-4 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  Décisions d&apos;architecture
                </h3>
                <ul className="space-y-2">
                  {arch.keyDecisions.map((decision, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                      <span className="text-amber-400 mt-0.5 flex-shrink-0">→</span>
                      {decision}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-xl p-5">
                <h3 className="text-white font-semibold mb-4">Stack technique</h3>
                <div className="flex flex-wrap gap-2">
                  {arch.tags.map((tag) => (
                    <Badge key={tag} label={tag} size="sm" />
                  ))}
                </div>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  );
}
