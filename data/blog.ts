// ===== data/blog.ts =====
// Articles de blog techniques

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  date: string;
  readTime: number;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "migration-postgresql-aws-rds-guide",
    title: "Migrer PostgreSQL vers AWS RDS : Guide Complet",
    excerpt:
      "Retour d'expérience sur la migration d'une base de données PostgreSQL on-premise vers AWS RDS avec DMS, zero-downtime et automatisation des sauvegardes.",
    content: `
## Introduction

La migration de bases de données vers le cloud est devenue une nécessité pour les entreprises souhaitant améliorer leur résilience, automatiser leurs opérations et bénéficier de la scalabilité du cloud.

## Pourquoi AWS RDS ?

AWS RDS offre plusieurs avantages par rapport à une gestion on-premise :

- **Haute disponibilité** : Multi-AZ avec basculement automatique
- **Sauvegardes automatiques** : Rétention configurable jusqu'à 35 jours
- **Scalabilité** : Modification des ressources sans interruption (storage autoscaling)
- **Sécurité** : Chiffrement au repos et en transit, intégration IAM
- **Monitoring** : Métriques CloudWatch natives

## Étapes de Migration avec AWS DMS

### 1. Préparer l'environnement source

\`\`\`sql
-- Créer un utilisateur dédié à la réplication
CREATE USER dms_user WITH REPLICATION PASSWORD 'secure_password';
GRANT SELECT ON ALL TABLES IN SCHEMA public TO dms_user;
ALTER USER dms_user REPLICATION;
\`\`\`

### 2. Configurer AWS DMS

\`\`\`bash
# Créer l'instance de réplication
aws dms create-replication-instance \\
  --replication-instance-identifier migration-instance \\
  --replication-instance-class dms.t3.medium \\
  --allocated-storage 50
\`\`\`

### 3. Automatisation des sauvegardes avec PowerShell

\`\`\`powershell
# Script de sauvegarde automatique RDS
$RDSInstance = "mydb-instance"
$SnapshotId = "backup-$(Get-Date -Format 'yyyyMMdd-HHmm')"

aws rds create-db-snapshot \`
  --db-instance-identifier $RDSInstance \`
  --db-snapshot-identifier $SnapshotId
\`\`\`

## Résultats Obtenus

Après migration :
- **RTO réduit** de 4h à 15 minutes
- **0% de perte de données** lors de la migration
- **Disponibilité 99.95%** avec Multi-AZ
- **Monitoring continu** via CloudWatch avec alertes SMS

## Conclusion

La migration vers AWS RDS représente un investissement technique qui se traduit par une résilience accrue et une réduction significative de la charge opérationnelle pour l'équipe DBA.
    `,
    category: "Cloud Engineering",
    tags: ["AWS", "PostgreSQL", "RDS", "DMS", "Cloud Migration"],
    date: "2024-12-15",
    readTime: 8,
    featured: true,
  },
  {
    slug: "yolov8-epi-detection-temps-reel",
    title: "Détection EPI en Temps Réel avec YOLOv8",
    excerpt:
      "Comment j'ai développé un système de détection du port des équipements de protection individuelle avec YOLOv8, OpenCV et Streamlit pour un déploiement industriel.",
    content: `
## Le Problème de Sécurité Industrielle

Dans les environnements industriels, le non-port des EPI est responsable d'une large part des accidents du travail. La surveillance manuelle est impossible à grande échelle.

## Architecture de la Solution

### Choix de YOLOv8

YOLOv8 de Ultralytics s'impose comme le meilleur choix pour la détection en temps réel :

- **Vitesse** : 25+ FPS sur GPU standard
- **Précision** : mAP@0.5 > 85% avec fine-tuning
- **Facilité de déploiement** : Export ONNX, TensorRT, CoreML
- **API Python intuitive**

### Pipeline de Détection

\`\`\`python
from ultralytics import YOLO
import cv2
import streamlit as st

# Chargement du modèle fine-tuné
model = YOLO("models/epi_detection.pt")

def detect_epi(frame):
    results = model(frame, conf=0.5, iou=0.45)
    
    non_compliance = []
    for result in results:
        for box in result.boxes:
            class_name = model.names[int(box.cls)]
            confidence = float(box.conf)
            
            if class_name in ["no_helmet", "no_vest", "no_goggles"]:
                non_compliance.append({
                    "type": class_name,
                    "confidence": confidence,
                    "bbox": box.xyxy.tolist()
                })
    
    return results[0].plot(), non_compliance
\`\`\`

### Interface Streamlit

\`\`\`python
st.title("Système de Détection EPI")
video_source = st.selectbox("Source", ["Webcam", "Fichier vidéo", "RTSP"])

if video_source == "Webcam":
    cap = cv2.VideoCapture(0)
    placeholder = st.empty()
    
    while True:
        ret, frame = cap.read()
        if not ret:
            break
        
        annotated_frame, violations = detect_epi(frame)
        
        if violations:
            st.error(f"Violation détectée : {len(violations)} EPI manquant(s)")
        
        placeholder.image(annotated_frame, channels="BGR")
\`\`\`

## Résultats

- **mAP@0.5 : 87.3%** sur dataset de test
- **Latence : 38ms** par frame (GPU RTX 3060)
- **Taux de fausses alertes : < 5%**

## Perspectives

Intégration d'un système de notification Slack/SMS pour alertes critiques en production.
    `,
    category: "Intelligence Artificielle",
    tags: ["YOLOv8", "Python", "Computer Vision", "Streamlit", "OpenCV"],
    date: "2025-02-10",
    readTime: 10,
    featured: true,
  },
  {
    slug: "optimisation-sql-index-strategies",
    title: "Stratégies d'Optimisation SQL : Index et Query Tuning",
    excerpt:
      "Guide pratique d'optimisation des requêtes SQL : analyse des slow queries, choix des index, et mesure des gains de performance. Retour d'expérience DBA sur MySQL.",
    content: `
## Introduction

L'optimisation des requêtes SQL est l'une des compétences les plus valorisées pour un DBA. Une requête mal écrite peut consommer des dizaines de fois plus de ressources qu'une requête optimisée.

## Analyse des Slow Queries

### Configuration du Slow Query Log MySQL

\`\`\`sql
-- Activer le slow query log
SET GLOBAL slow_query_log = 'ON';
SET GLOBAL long_query_time = 1; -- seuil en secondes
SET GLOBAL slow_query_log_file = '/var/log/mysql/slow.log';
\`\`\`

### Lecture du Plan d'Exécution

\`\`\`sql
-- Analyser une requête problématique
EXPLAIN ANALYZE
SELECT u.name, COUNT(o.id) as total_orders
FROM users u
JOIN orders o ON u.id = o.user_id
WHERE o.created_at > '2024-01-01'
GROUP BY u.id, u.name
ORDER BY total_orders DESC;
\`\`\`

## Stratégies d'Index

### Index Composites

\`\`\`sql
-- Mauvais : index séparés
CREATE INDEX idx_user_id ON orders(user_id);
CREATE INDEX idx_created_at ON orders(created_at);

-- Bon : index composite respectant l'ordre de sélectivité
CREATE INDEX idx_orders_user_date 
ON orders(user_id, created_at) 
INCLUDE (total_amount, status);
\`\`\`

### Règle ESR (Equality, Sort, Range)

L'ordre des colonnes dans un index composite suit la règle ESR :
1. Colonnes avec conditions **Equality** (=)
2. Colonnes de **Sort** (ORDER BY)  
3. Colonnes de **Range** (>, <, BETWEEN)

## Résultats de l'Optimisation à l'IAM

| Requête | Avant | Après | Gain |
|---------|-------|-------|------|
| Liste étudiants | 2.3s | 0.08s | -96% |
| Rapport notes | 5.1s | 0.21s | -96% |
| Stats globales | 12.7s | 0.45s | -96% |

## Automatisation avec PowerShell

\`\`\`powershell
# Script de détection des tables sans index
$query = @"
SELECT table_name, table_rows 
FROM information_schema.tables 
WHERE table_schema = 'database_name'
AND table_rows > 10000
"@

$result = Invoke-MySqlQuery -Query $query
$result | Where-Object { $_.table_name -notin (Get-IndexedTables) }
\`\`\`

## Conclusion

L'optimisation SQL combinant analyse des plans d'exécution et stratégies d'index ciblées permet des gains de performance spectaculaires avec un impact minimal sur la structure applicative.
    `,
    category: "Database Administration",
    tags: ["MySQL", "SQL", "DBA", "Performance", "Index", "PowerShell"],
    date: "2024-05-20",
    readTime: 12,
    featured: false,
  },
];
