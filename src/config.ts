/**
 * Site-wide configuration derived from environment variables.
 *
 * VITE_PRODUCTION_READY controls whether content-heavy sections
 * (podcasts, courses, tutorials, news, jobs, forum, services, portfolio)
 * are visible or replaced with a "Coming Soon" placeholder.
 *
 * Sections that remain visible regardless:
 *   - Hero / Home banner
 *   - About Us
 *   - Header & Footer (with nav items filtered)
 *   - Privacy Policy & Terms of Service
 *   - Consultation Modal
 */
export const IS_PRODUCTION_READY =
  import.meta.env.VITE_PRODUCTION_READY === 'true';

/** Sections that should be gated behind the production-ready flag */
export const GATED_SECTIONS = [
  'podcast',
  'forum',
  'tutorials',
  'courses',
  'news',
  'portfolio',
  'jobs',
] as const;
