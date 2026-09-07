import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IS_PRODUCTION_READY } from '../config';

const SITE_URL = 'https://www.techexchange.dev';
const DEFAULT_IMAGE = `${SITE_URL}/logo.png`;

type PageMetadata = {
  title: string;
  description: string;
  type?: 'WebPage' | 'CollectionPage' | 'AboutPage';
  index?: boolean;
};

const PAGE_METADATA: Record<string, PageMetadata> = {
  '/': {
    title: 'Tech Exchange | Talk, Learn, Build',
    description: 'Tech Exchange is Nepal\'s developer community and engineering studio for practical learning, thoughtful collaboration, and software services.',
    type: 'WebPage',
  },
  '/about': {
    title: 'About & Careers | Tech Exchange',
    description: 'Learn about Tech Exchange, a Nepal-based developer community and engineering studio hiring remote full-time and part-time engineering and media talent.',
    type: 'AboutPage',
  },
  '/services': {
    title: 'Software Services | Tech Exchange',
    description: 'Get practical software engineering, AI agent, web application, and technical consulting support from Tech Exchange.',
    type: 'CollectionPage',
  },
  '/podcast': {
    title: 'Tech Talk Podcasts | Tech Exchange',
    description: 'Explore conversations and events about software engineering, product building, AI, and the people shaping technology in Nepal and beyond.',
    type: 'CollectionPage',
  },
  '/courses': {
    title: 'Programming Courses | Tech Exchange',
    description: 'Build practical programming and software engineering skills with courses designed for developers and aspiring builders.',
    type: 'CollectionPage',
  },
  '/tutorials': {
    title: 'Developer Tutorials | Tech Exchange',
    description: 'Read practical developer tutorials and explainers covering modern web development, AI, Python, DevOps, and software engineering.',
    type: 'CollectionPage',
  },
  '/news': {
    title: 'Technology News | Tech Exchange',
    description: 'Keep up with useful technology news, engineering trends, and developments relevant to builders and the developer community.',
    type: 'CollectionPage',
  },
  '/jobs': {
    title: 'Tech Jobs | Tech Exchange',
    description: 'Find software engineering and technology opportunities for developers in Nepal and remote teams.',
    type: 'CollectionPage',
  },
  '/forum': {
    title: 'Developer Community Forum | Tech Exchange',
    description: 'Ask questions, share projects, and discuss software engineering, technology, and building in the Tech Exchange community.',
    type: 'CollectionPage',
  },
  '/portfolio': {
    title: 'Build Showcase | Tech Exchange',
    description: 'See selected software products and engineering work created by Tech Exchange.',
    type: 'CollectionPage',
  },
  '/privacy': {
    title: 'Privacy Policy | Tech Exchange',
    description: 'Read the Tech Exchange privacy policy and learn how information is handled on techexchange.dev.',
  },
  '/terms': {
    title: 'Terms of Service | Tech Exchange',
    description: 'Read the terms that govern use of the Tech Exchange website, community, and services.',
  },
};

const GATED_PATHS = new Set(['/podcast', '/courses', '/tutorials', '/news', '/jobs', '/forum', '/portfolio']);

function setMeta(name: string, content: string, attribute = 'name') {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attribute}="${name}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

function setLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]`);
  if (!element) {
    element = document.createElement('link');
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function SEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    const metadata = PAGE_METADATA[pathname] ?? {
      title: 'Page Not Found | Tech Exchange',
      description: 'The requested Tech Exchange page could not be found.',
      index: false,
    };
    const canonicalPath = PAGE_METADATA[pathname] ? pathname : '/';
    const canonicalUrl = `${SITE_URL}${canonicalPath === '/' ? '/' : canonicalPath}`;
    const isGatedPlaceholder = GATED_PATHS.has(pathname) && !IS_PRODUCTION_READY;
    const shouldIndex = metadata.index !== false && !isGatedPlaceholder;

    document.title = metadata.title;
    setMeta('description', metadata.description);
    setMeta('robots', shouldIndex ? 'index, follow' : 'noindex, follow');
    setMeta('googlebot', shouldIndex ? 'index, follow' : 'noindex, follow');
    setMeta('author', 'Tech Exchange', 'name');
    setLink('canonical', canonicalUrl);

    setMeta('og:site_name', 'Tech Exchange', 'property');
    setMeta(metadata.title, 'og:title', 'property');
    setMeta(metadata.description, 'og:description', 'property');
    setMeta(metadata.type ?? 'website', 'og:type', 'property');
    setMeta(canonicalUrl, 'og:url', 'property');
    setMeta(DEFAULT_IMAGE, 'og:image', 'property');
    setMeta('Tech Exchange logo', 'og:image:alt', 'property');
    setMeta(metadata.title, 'twitter:title');
    setMeta(metadata.description, 'twitter:description');
    setMeta(DEFAULT_IMAGE, 'twitter:image');
    setMeta('Tech Exchange logo', 'twitter:image:alt');

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': metadata.type ?? 'WebPage',
      name: metadata.title,
      description: metadata.description,
      url: canonicalUrl,
      isPartOf: { '@type': 'WebSite', name: 'Tech Exchange', url: SITE_URL },
      inLanguage: 'en',
    };
    let script = document.head.querySelector<HTMLScriptElement>('script[data-seo-page]');
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.dataset.seoPage = 'true';
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(structuredData);
  }, [pathname]);

  return null;
}