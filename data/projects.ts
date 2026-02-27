// ===== data/projects.ts =====
// Projets réalisés – données complètes

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  tags: string[];
  status: "completed" | "in-progress";
  featured: boolean;
  github?: string;
  context: string;
  problem: string;
  solution: string;
  results: string[];
  architecture: {
    title: string;
    description: string;
    components: string[];
  };
}

export const projects: Project[] = [
  {
    slug: "migration-postgresql-aws-rds",
    title: "Migration PostgreSQL → AWS RDS",
    shortDescription:
      "Migration d'une base de données PostgreSQL locale vers AWS RDS avec automatisation des sauvegardes, monitoring CloudWatch et configuration IAM sécurisée.",
    category: "Cloud Engineering",
    tags: ["AWS", "PostgreSQL", "RDS", "DMS", "CloudWatch", "IAM", "PowerShell"],
    status: "completed",
    featured: true,
    github: "https://github.com/amadoufaye-diagne",
    context:
      "Une organisation avait besoin de migrer son infrastructure de base de données on-premise vers le cloud AWS pour améliorer la disponibilité, la sécurité et automatiser les sauvegardes.",
    problem:
      "La base PostgreSQL locale présentait des risques de perte de données, un manque de monitoring en temps réel et une absence d'automatisation des sauvegardes. La scalabilité était limitée.",
    solution:
      "Mise en place d'une migration complète via AWS DMS (Database Migration Service), configuration d'AWS RDS PostgreSQL Multi-AZ, déploiement de CloudWatch pour le monitoring, et automatisation des sauvegardes avec des scripts PowerShell.",
    results: [
      "Migration réussie avec 0% de perte de données",
      "Réduction du RTO (Recovery Time Objective) de 4h à 15 minutes",
      "Automatisation des sauvegardes quotidiennes via PowerShell",
      "Monitoring en temps réel avec alertes CloudWatch",
      "Configuration IAM avec principe du moindre privilège",
      "Disponibilité améliorée à 99.95% avec Multi-AZ",
    ],
    architecture: {
      title: "Architecture Cloud AWS – Migration BDD",
      description:
        "Architecture multi-couches avec séparation des responsabilités entre réseau, sécurité, données et monitoring.",
      components: [
        "AWS DMS – Migration des données",
        "AWS RDS PostgreSQL Multi-AZ",
        "Amazon CloudWatch – Monitoring & Alertes",
        "AWS IAM – Contrôle d'accès",
        "Amazon S3 – Stockage des sauvegardes",
        "Amazon VPC – Isolation réseau",
        "PowerShell – Automatisation",
      ],
    },
  },
  {
    slug: "detection-epi-yolov8",
    title: "Détection EPI avec YOLOv8",
    shortDescription:
      "Système de détection en temps réel du port des équipements de protection individuelle (casque, gilet, lunettes) avec alertes automatiques via YOLOv8 et Streamlit.",
    category: "Intelligence Artificielle",
    tags: ["Python", "YOLOv8", "OpenCV", "Streamlit", "Computer Vision", "Deep Learning"],
    status: "in-progress",
    featured: true,
    github: "https://github.com/amadoufaye-diagne",
    context:
      "Les accidents du travail liés au non-port des EPI représentent une problématique majeure dans les environnements industriels. Une solution automatisée de surveillance était nécessaire.",
    problem:
      "La vérification manuelle du port des EPI est inefficace, coûteuse et ne peut pas fonctionner en continu. Les incidents surviennent souvent en l'absence de supervision humaine.",
    solution:
      "Développement d'un modèle YOLOv8 fine-tuné pour détecter les EPI (casque, gilet de sécurité, lunettes de protection) sur flux vidéo en temps réel, avec une interface Streamlit et un système d'alertes automatiques.",
    results: [
      "Précision de détection supérieure à 85% (mAP@0.5)",
      "Traitement en temps réel à 25+ FPS",
      "Alertes automatiques en cas de non-conformité",
      "Interface Streamlit intuitive pour le monitoring",
      "Support multi-caméras simultanées",
      "Réduction estimée à 60% des incidents EPI non détectés",
    ],
    architecture: {
      title: "Pipeline de Détection Computer Vision",
      description: "Pipeline de vision par ordinateur en temps réel avec inférence YOLOv8 et interface web Streamlit.",
      components: [
        "YOLOv8 – Modèle de détection d'objets",
        "OpenCV – Capture et traitement vidéo",
        "Streamlit – Interface web en temps réel",
        "Python – Backend et logique métier",
        "Système d'alertes – Notifications automatiques",
        "Dataset personnalisé – EPI annotés",
      ],
    },
  },
  {
    slug: "analyse-churn-client",
    title: "Analyse Churn Client",
    shortDescription:
      "Analyse du taux d'attrition client par pays, genre, âge et produits souscrits. Visualisation via Tableau et Power BI, identification des segments à risque.",
    category: "Data Science",
    tags: ["Python", "Tableau", "Power BI", "Feature Engineering", "Machine Learning", "SQL"],
    status: "completed",
    featured: true,
    github: "https://github.com/amadoufaye-diagne",
    context:
      "Une entreprise financière cherchait à comprendre pourquoi ses clients résiliaient leurs contrats et à identifier les segments les plus à risque pour mettre en place des actions de rétention ciblées.",
    problem:
      "Taux de churn élevé sans compréhension claire des drivers. Absence de tableau de bord centralisé pour le suivi des indicateurs de rétention. Données dispersées dans plusieurs systèmes.",
    solution:
      "Nettoyage et préparation des données, feature engineering avancé, analyse multidimensionnelle du churn (pays, âge, genre, produits), création de dashboards interactifs Tableau et Power BI.",
    results: [
      "Identification de 3 segments clients à risque élevé (>40% de churn)",
      "Corrélation forte entre nombre de produits et probabilité de churn",
      "Dashboard Tableau interactif avec 15+ KPIs",
      "Recommandations actionnables pour réduire l'attrition de 25%",
      "Contrôle de conformité des données réalisé",
      "Rapport exécutif avec insights business",
    ],
    architecture: {
      title: "Pipeline d'Analyse Data – Churn",
      description: "Pipeline ETL complet depuis l'ingestion jusqu'à la visualisation et la prise de décision.",
      components: [
        "Python / Pandas – Nettoyage et préparation des données",
        "Feature Engineering – Variables dérivées",
        "Scikit-learn – Modèle prédictif de churn",
        "Tableau Public – Dashboard interactif",
        "Power BI – Reporting exécutif",
        "SQL – Requêtage des données sources",
      ],
    },
  },
  {
    slug: "dossier-patient-informatise",
    title: "Dossier Patient Informatisé (DPI)",
    shortDescription:
      "Prototype de DPI intelligent avec base de données centralisée, interface sécurisée et conformité aux standards de santé numérique.",
    category: "Web Development",
    tags: ["Django", "PostgreSQL", "Python", "Healthcare", "Security"],
    status: "completed",
    featured: false,
    github: "https://github.com/amadoufaye-diagne",
    context:
      "Le projet Santeh visait à digitaliser la gestion des dossiers médicaux dans des établissements de santé africains, en remplaçant les dossiers papier par une solution numérique sécurisée.",
    problem:
      "Les dossiers papier entraînent des pertes d'informations, des erreurs médicales et une difficulté de partage entre professionnels de santé. Absence de traçabilité des actes médicaux.",
    solution:
      "Développement d'un prototype DPI avec Django, base de données centralisée PostgreSQL, authentification sécurisée, gestion des rôles (médecin, infirmier, administrateur) et conformité aux standards de santé numérique.",
    results: [
      "Interface utilisateur intuitive et responsive",
      "Gestion sécurisée des données médicales",
      "Système de rôles et permissions granulaires",
      "Historique complet des actes médicaux",
      "Conformité aux standards de protection des données de santé",
      "Prototype fonctionnel présenté en soutenance",
    ],
    architecture: {
      title: "Architecture DPI – Santé Numérique",
      description: "Architecture MVC Django avec séparation claire des responsabilités et sécurité renforcée.",
      components: [
        "Django – Framework web backend",
        "PostgreSQL – Base de données centralisée",
        "Django ORM – Gestion des données",
        "JWT – Authentification sécurisée",
        "HTML/CSS/JS – Interface utilisateur",
        "Role-Based Access Control – Gestion des droits",
      ],
    },
  },
  {
    slug: "optimisation-mysql-iam",
    title: "Optimisation MySQL – IAM",
    shortDescription:
      "Analyse et optimisation des requêtes lentes sur la base MySQL de l'IAM, ajout d'index stratégiques et automatisation des tâches DBA avec PowerShell.",
    category: "Database Administration",
    tags: ["MySQL", "SQL", "DBA", "PowerShell", "Performance", "Index"],
    status: "completed",
    featured: false,
    github: "https://github.com/amadoufaye-diagne",
    context:
      "L'Institut Africain de Management rencontrait des problèmes de performance sur sa base de données MySQL, avec des requêtes critiques dépassant les temps d'exécution acceptables.",
    problem:
      "Requêtes lentes impactant l'expérience utilisateur, absence d'index sur les colonnes fréquemment interrogées, tâches d'administration non automatisées.",
    solution:
      "Analyse des slow query logs MySQL, identification des requêtes critiques, ajout d'index composites et simples, réécriture de requêtes SQL, automatisation des sauvegardes avec PowerShell.",
    results: [
      "Réduction du temps d'exécution moyen des requêtes de 70%",
      "Identification et optimisation de 12 requêtes critiques",
      "Ajout de 8 index stratégiques",
      "Automatisation des sauvegardes quotidiennes",
      "Documentation complète des optimisations réalisées",
      "Formation de l'équipe aux bonnes pratiques SQL",
    ],
    architecture: {
      title: "Workflow DBA – Optimisation MySQL",
      description: "Processus systématique d'analyse, optimisation et monitoring des performances base de données.",
      components: [
        "MySQL Slow Query Log – Identification des goulots",
        "EXPLAIN / EXPLAIN ANALYZE – Analyse des plans d'exécution",
        "Index MySQL – Optimisation des accès",
        "PowerShell – Automatisation des tâches DBA",
        "MySQL Workbench – Administration visuelle",
        "Monitoring des métriques – Suivi des performances",
      ],
    },
  },
];
