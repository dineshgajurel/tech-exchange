import { mkdir, writeFile } from 'node:fs/promises';

const siteUrl = 'https://www.techexchange.dev';
const productionReady = process.env.VITE_PRODUCTION_READY === 'true';
const today = new Date().toISOString().slice(0, 10);
const stablePages = [
  ['/', 'daily', '1.0'],
  ['/about', 'monthly', '0.9'],
  ['/services', 'monthly', '0.9'],
  ['/privacy', 'yearly', '0.3'],
  ['/terms', 'yearly', '0.3'],
];
const productionPages = [
  ['/podcast', 'weekly', '0.8'],
  ['/courses', 'weekly', '0.8'],
  ['/tutorials', 'weekly', '0.8'],
  ['/news', 'daily', '0.7'],
  ['/jobs', 'weekly', '0.7'],
  ['/forum', 'daily', '0.7'],
  ['/portfolio', 'monthly', '0.6'],
];
const pages = productionReady ? [...stablePages, ...productionPages] : stablePages;

const sitemapEntries = pages.map(([path, changefreq, priority]) => `  <url>
    <loc>${siteUrl}${path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`).join('\n');

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries}
</urlset>
`;

const descriptions = new Map([
  ['/', 'Overview of the Tech Exchange community and engineering studio.'],
  ['/about', 'Mission, culture, and remote career opportunities at Tech Exchange. See the careers section at /about#careers.'],
  ['/about#careers', 'Open remote engineering and media roles at Tech Exchange.'],
  ['/services', 'Software engineering, AI agent, web application, and consulting services.'],
  ['/podcast', 'Podcasts and technology conversations.'],
  ['/courses', 'Practical programming and software engineering courses.'],
  ['/tutorials', 'Guides and explainers for builders.'],
  ['/news', 'Technology and engineering news.'],
  ['/jobs', 'Software engineering opportunities.'],
  ['/forum', 'Questions, projects, and developer discussion.'],
  ['/portfolio', 'Selected software products and engineering work.'],
  ['/privacy', 'Privacy policy.'],
  ['/terms', 'Terms of service.'],
]);
const llmsSections = [
  ['Primary pages', ['/', '/about', '/services']],
  ['Careers', ['/about#careers']],
  ['Community and learning', ['/podcast', '/courses', '/tutorials', '/forum']],
  ['Other pages', ['/news', '/jobs', '/portfolio', '/privacy', '/terms']],
];
const llms = `# Tech Exchange

> Tech Exchange is Nepal's developer community and engineering studio for practical learning, thoughtful collaboration, and software services.

${llmsSections.map(([heading, paths]) => {
  const availablePaths = paths.filter((path) => pages.some(([page]) => page === path.split('#')[0]));
  return `## ${heading}\n\n${availablePaths.map((path) => `- [${path === '/' ? 'Home' : path.slice(1)}](${siteUrl}${path}): ${descriptions.get(path)}`).join('\n')}`;
}).join('\n\n')}

For the complete URL list and crawl guidance, see [sitemap.xml](${siteUrl}/sitemap.xml) and [robots.txt](${siteUrl}/robots.txt).
`;

await mkdir('public', { recursive: true });
await writeFile('public/sitemap.xml', sitemap);
await writeFile('public/llms.txt', llms);
