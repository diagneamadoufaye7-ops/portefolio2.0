// ===== app/head.tsx =====
// Meta globales et SEO (Open Graph)

export default function Head() {
  return (
    <>
      <title>Amadou Faye Diagne — Data Analyst · DBA · Cloud Engineer</title>
      <meta name="description" content="Portfolio professionnel d'Amadou Faye Diagne — Data Engineering, Cloud (AWS), DBA, IA. Projets, architecture, blog et contact." />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph / Social */}
      <meta property="og:title" content="Amadou Faye Diagne — Data Engineer & DBA" />
      <meta property="og:description" content="Portfolio professionnel — Migration PostgreSQL→AWS RDS, Détection EPI YOLOv8, Analyse Churn, Optimisation MySQL." />
      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="Amadou Faye Diagne" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Amadou Faye Diagne — Data Engineer & DBA" />

      {/* Canonical (default) */}
      <link rel="canonical" href="/" />
    </>
  );
}
