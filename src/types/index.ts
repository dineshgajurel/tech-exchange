export type SectionTab = 'home' | 'podcast' | 'tutorials' | 'services' | 'portfolio' | 'news' | 'forum' | 'jobs' | 'about';

export interface PodcastEpisode {
  id: string;
  title: string;
  mediaType: 'podcast' | 'show' | 'video' | 'seminar' | 'event';
  episodeNumber?: number;
  duration: string;
  publishedDate: string;
  timeAgo?: string;
  description: string;
  location?: string; // e.g. "Kathmandu Tech Hub, Hattisar" or "YouTube Live"
  status?: 'upcoming' | 'live' | 'recorded';
  eventDate?: string;
  organizer?: string;
  registrationUrl?: string;
  audioUrl?: string;
  videoUrl?: string;
  spotifyUrl?: string;
  youtubeUrl?: string;
  guest?: {
    name: string;
    role: string;
    avatar: string;
  };
  speakers?: {
    name: string;
    role: string;
    avatar: string;
  }[];
  topics: string[];
  notes: string[];
}

export interface Tutorial {
  id: string;
  title: string;
  category: 'AI & Machine Learning' | 'Web Development' | 'DevOps & Cloud' | 'Systems Architecture';
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  summary: string;
  content: string;
  codeSnippet?: {
    language: string;
    code: string;
  };
  tags: string[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  client?: string;
  type: string;
  description: string;
  image: string;
  techStack: string[];
  demoUrl?: string;
  githubUrl?: string;
  impactMetrics: string[];
}

export interface TechService {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  icon: string;
  features: string[];
  deliverables: string[];
  badge: string;
}

export interface NewsItem {
  id: string;
  title: string;
  category: string;
  date: string;
  timeAgo: string;
  summary: string;
  source: string;
  link: string;
  isBreaking?: boolean;
  readTime?: string;
  tags?: string[];
}

export interface JobListing {
  id: string;
  title: string;
  company: string;
  companyLogo?: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  category: 'Frontend' | 'Backend' | 'Fullstack' | 'AI & ML' | 'DevOps & Cloud' | 'Mobile';
  experienceLevel: 'Entry Level' | 'Mid Level' | 'Senior' | 'Lead' | 'Executive';
  salaryRange: string;
  description: string;
  requirements: string[];
  skills: string[];
  postedDate: string;
  applyUrl?: string;
  featured?: boolean;
}

export type ChannelId = 'tech-talk' | 'tech-explained' | 'build-with-tech' | 'whats-happening';

export interface PostComment {
  id: string;
  author: string;
  avatar: string;
  timeAgo: string;
  content: string;
  upvotes: number;
}

export interface Post {
  id: string;
  channelId: ChannelId;
  title: string;
  content: string;
  author: {
    name: string;
    handle: string;
    avatar: string;
    role?: string;
  };
  timeAgo: string;
  upvotes: number;
  commentsCount: number;
  commentsList: PostComment[];
  tags: string[];
  isUpvoted?: boolean;
  isBookmarked?: boolean;
  codeSnippet?: {
    language: string;
    code: string;
  };
  buildDetails?: {
    demoUrl?: string;
    repoUrl?: string;
    techStack: string[];
  };
}

export interface LoungeMessage {
  id: string;
  author: string;
  role: string;
  avatar: string;
  location?: string;
  message: string;
  timestamp: string;
  likes: number;
}
