import { projects } from "@/data/projects";

export const revalidate = 86400; // 24h

export default function Sitemap() {
  const baseUrl = "https://amadou-faye-diagne.vercel.app"; // replace with actual domain

  const staticUrls = ["/", "/about", "/projects", "/skills", "/architecture", "/blog", "/contact"];

  const projectUrls = projects.map((p) => `/projects/${p.slug}`);

  const urls = [...staticUrls, ...projectUrls];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
    .map((url) => {
      return `<url><loc>${baseUrl}${url}</loc></url>`;
    })
    .join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
