// ===== data/skills.ts =====
// Compétences techniques catégorisées

export interface Skill {
  name: string;
  level: number; // 0-100
  icon?: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  icon: string;
  color: string;
  skills: Skill[];
}

export const skillCategories: SkillCategory[] = [
  {
    id: "databases",
    title: "Bases de données",
    icon: "database",
    color: "#3B82F6",
    skills: [
      { name: "PostgreSQL", level: 90 },
      { name: "MySQL", level: 85 },
      { name: "SQL Server", level: 75 },
      { name: "Oracle", level: 65 },
      { name: "MongoDB", level: 60 },
      { name: "PL/SQL", level: 75 },
      { name: "SQL Avancé", level: 90 },
    ],
  },
  {
    id: "cloud",
    title: "Cloud & AWS",
    icon: "cloud",
    color: "#F59E0B",
    skills: [
      { name: "AWS RDS", level: 85 },
      { name: "AWS EC2", level: 75 },
      { name: "AWS S3", level: 80 },
      { name: "AWS CloudWatch", level: 80 },
      { name: "AWS DMS", level: 85 },
      { name: "AWS IAM", level: 80 },
      { name: "AWS CLI", level: 75 },
    ],
  },
  {
    id: "data-science",
    title: "Data Science & IA",
    icon: "brain",
    color: "#8B5CF6",
    skills: [
      { name: "Python", level: 90 },
      { name: "Machine Learning", level: 75 },
      { name: "YOLOv8", level: 80 },
      { name: "OpenCV", level: 75 },
      { name: "Streamlit", level: 85 },
      { name: "IA Générative", level: 65 },
      { name: "Feature Engineering", level: 80 },
    ],
  },
  {
    id: "bi",
    title: "BI & Visualisation",
    icon: "chart",
    color: "#10B981",
    skills: [
      { name: "Tableau Public", level: 85 },
      { name: "Power BI", level: 80 },
      { name: "Pandas", level: 85 },
      { name: "Modélisation données", level: 85 },
      { name: "UML / Merise", level: 80 },
      { name: "Dashboards décisionnels", level: 85 },
    ],
  },
  {
    id: "web",
    title: "Développement Web",
    icon: "code",
    color: "#EF4444",
    skills: [
      { name: "Django", level: 80 },
      { name: "ASP.NET", level: 60 },
      { name: "PHP Objet", level: 65 },
      { name: "Flutter", level: 55 },
      { name: "HTML/CSS", level: 80 },
      { name: "JavaScript", level: 70 },
    ],
  },
  {
    id: "devops",
    title: "DevOps & Systèmes",
    icon: "terminal",
    color: "#6366F1",
    skills: [
      { name: "PowerShell", level: 85 },
      { name: "C", level: 65 },
      { name: "Automatisation", level: 85 },
      { name: "Administration BDD", level: 85 },
      { name: "Git", level: 75 },
      { name: "Linux", level: 65 },
    ],
  },
];
