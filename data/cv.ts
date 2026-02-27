// ===== data/cv.ts =====
// Données centralisées du CV - Amadou Faye Diagne

export const personalInfo = {
  name: "Amadou Faye Diagne",
  title: "Data Analyst | DBA | Cloud Engineer",
  subtitle: "Spécialiste en bases de données, cloud computing et intelligence artificielle",
  email: "diagneamadoufaye7@gmail.com",
  phone: "+221 77 863 94 55",
  location: "Dakar, Sénégal",
  linkedin: "https://tinyurl.ee/RJeIW",
  github: "https://github.com/amadoufaye-diagne",
  bio: `Titulaire d'une Licence en Informatique de Gestion, je travaille sur des projets alliant 
  bases de données, développement et intelligence artificielle. Je maîtrise Python, SQL, 
  PostgreSQL/MySQL, AWS et Django, avec une forte appétence pour l'optimisation, 
  l'automatisation et la création de valeur à partir des données.`,
};

// intérêts personnels et extras (issus du CV PDF)
export const interests = [
  "Football",
  "Lecture",
  "Voyages",
];

export const experiences = [
  {
    id: "dev-ia",
    title: "Développeur IA",
    company: "Projet académique",
    location: "Dakar",
    type: "Freelance",
    startDate: "10/2025",
    endDate: "Présent",
    current: true,
    description: "Développement de systèmes intelligents basés sur YOLOv8 et Python pour la détection en temps réel.",
    tags: ["Python", "YOLOv8", "OpenCV", "Streamlit"],
  },
  {
    id: "dev-web",
    title: "Développeur Web",
    company: "Projet soutenance",
    location: "Dakar",
    type: "Freelance",
    startDate: "10/2025",
    endDate: "12/2025",
    current: false,
    description: "Développement d'une application web full-stack pour la gestion du Dossier Patient Informatisé.",
    tags: ["Django", "PostgreSQL", "Python", "HTML/CSS"],
  },
  {
    id: "data-scientist",
    title: "Data Scientist",
    company: "Projet académique",
    location: "Dakar",
    type: "Freelance",
    startDate: "10/2025",
    endDate: "11/2025",
    current: false,
    description: "Analyse du churn client, feature engineering et visualisation des données avec Tableau et Power BI.",
    tags: ["Python", "Tableau", "Power BI", "Machine Learning"],
  },
  {
    id: "cloud-migration",
    title: "Ingénieur Cloud – Migration BDD",
    company: "Projet",
    location: "Diamniadio",
    type: "Freelance",
    startDate: "07/2024",
    endDate: "12/2024",
    current: false,
    description: "Migration d'une base PostgreSQL locale vers AWS RDS avec automatisation des sauvegardes et configuration IAM.",
    tags: ["AWS", "PostgreSQL", "RDS", "DMS", "CloudWatch", "PowerShell"],
  },
  {
    id: "billetterie",
    title: "Agent de Billetterie",
    company: "3D Prod Events",
    location: "Dakar",
    type: "Contrat temporaire",
    startDate: "12/2024",
    endDate: "12/2024",
    current: false,
    description: "Suivi des transactions financières liées aux ventes de billets, gestion quotidienne de la caisse.",
    tags: ["Gestion", "Finance"],
  },
  {
    id: "dba-junior",
    title: "DBA Junior – Optimisation MySQL",
    company: "Institut Africain de Management (IAM)",
    location: "Dakar",
    type: "Projet académique",
    startDate: "03/2024",
    endDate: "04/2024",
    current: false,
    description: "Analyse des requêtes lentes, ajout d'index, optimisation SQL et automatisation des tâches d'administration.",
    tags: ["MySQL", "SQL", "PowerShell", "DBA"],
  },
];

export const education = [
  {
    id: "licence",
    degree: "Licence Professionnelle",
    field: "Informatique de Gestion – Option Sciences de données",
    school: "Institut Africain de Management (IAM)",
    location: "Dakar",
    startYear: "2025",
    endYear: "2025",
    grade: "Très bien",
    current: true,
  },
  {
    id: "bts",
    degree: "BTS",
    field: "Administration des Bases de Données",
    school: "ISEP Diamniadio",
    location: "Dakar",
    startYear: "2022",
    endYear: "2024",
    grade: "Bien",
    current: false,
  },
  {
    id: "bac",
    degree: "Baccalauréat",
    field: "Sciences Sociales et Humaines",
    school: "Institut d'Education Amadou Sow Ndiaye",
    location: "Saint-Louis",
    startYear: "2021",
    endYear: "2022",
    grade: "",
    current: false,
  },
];

export const certifications = [
  {
    id: "aws-migration",
    name: "Migration de bases de données vers AWS",
    issuer: "Amazon Web Services",
    year: "2024",
    icon: "aws",
  },
  {
    id: "csharp-foundational",
    name: "Certification Foundational C# avec Microsoft",
    issuer: "Microsoft",
    year: "2024",
    icon: "microsoft",
  },
];

export const languages = [
  { name: "Français", level: "Courant", percentage: 95 },
  { name: "Wolof", level: "Bilingue", percentage: 100 },
  { name: "Anglais", level: "Notions", percentage: 35 },
];

// export pour faciliter l'affichage si besoin
export type Interest = string;
