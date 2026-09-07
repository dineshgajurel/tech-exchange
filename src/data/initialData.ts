import { PodcastEpisode, Tutorial, PortfolioProject, TechService, NewsItem, Post, LoungeMessage, JobListing, Course } from '../types';

export interface Channel {
  id: 'tech-talk' | 'tech-explained' | 'build-with-tech' | 'whats-happening';
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  color: string;
  hashtag: string;
}

export const CHANNELS: Channel[] = [
  {
    id: 'tech-talk',
    title: 'Tech Talk',
    subtitle: 'Share what\'s on your mind',
    description: 'All takes welcome, no judgment. Discussions, debate & dev thoughts.',
    iconName: 'MessageSquare',
    color: 'from-blue-600 to-indigo-600',
    hashtag: '#TechTalk'
  },
  {
    id: 'tech-explained',
    title: 'Tech Explained',
    subtitle: 'Big ideas, explained simply',
    description: 'No degree needed. Tutorials, architecture deep dives & guide breakdowns.',
    iconName: 'Sparkles',
    color: 'from-emerald-500 to-teal-600',
    hashtag: '#TechExplained'
  },
  {
    id: 'build-with-tech',
    title: 'Build With Tech',
    subtitle: 'Show what you\'re making',
    description: 'Code, projects, software engineering demos & late-night wins.',
    iconName: 'Rocket',
    color: 'from-violet-600 to-purple-600',
    hashtag: '#BuildWithTech'
  },
  {
    id: 'whats-happening',
    title: 'What\'s Happening in Tech',
    subtitle: 'New tools, new trends',
    description: 'All in one spot. Daily news, frontier AI updates & releases.',
    iconName: 'Zap',
    color: 'from-amber-500 to-orange-600',
    hashtag: '#WhatsHappening'
  }
];

export const INITIAL_POSTS: Post[] = [
  {
    id: 'post-1',
    channelId: 'build-with-tech',
    title: 'Built an open-source lightweight SQLite visualizer in WebAssembly & React',
    content: 'Spent the weekend building SQL-Lens, a browser-based SQLite visualizer. It explores local queries, schema relationships, and the tradeoffs of keeping small datasets close to the user.',
    author: {
      name: 'Dinesh Gajurel',
      handle: '@dinesh',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      role: 'Fullstack Architect'
    },
    timeAgo: '2 hours ago',
    upvotes: 142,
    commentsCount: 28,
    tags: ['#BuildWithTech', '#WebAssembly', '#React', '#OpenSource'],
    codeSnippet: {
      language: 'typescript',
      code: `import { createSqliteEngine } from '@sql-lens/wasm';

const engine = await createSqliteEngine({
  storage: 'indexeddb',
  filename: 'my_app_data.db'
});

const results = await engine.query('SELECT * FROM users WHERE active = 1;');
console.log(results);`
    },
    buildDetails: {
      demoUrl: 'https://example.com',
      repoUrl: 'https://github.com',
      techStack: ['React', 'TypeScript', 'WebAssembly', 'SQLite', 'Tailwind']
    },
    commentsList: [
      {
        id: 'c1',
        author: 'Dinesh Gajurel',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        timeAgo: '1 hour ago',
        content: 'This is super clean! How are you persisting the sqlite database files across browser sessions?',
        upvotes: 12
      }
    ]
  },
  {
    id: 'post-2',
    channelId: 'tech-talk',
    title: 'Weekly Tech Chat: Are you using AI agents in your daily coding workflow?',
    content: 'A huge shift is happening from simple inline copilot auto-complete to autonomous multi-file agent workflows. What tools are actually saving you time vs causing hallucinated refactoring bugs?',
    author: {
      name: 'Dinesh Gajurel',
      handle: '@dinesh',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
      role: 'Tech Exchange Host'
    },
    timeAgo: '5 hours ago',
    upvotes: 198,
    commentsCount: 54,
    tags: ['#TechTalk', '#AI', '#DevTools', '#Workflows'],
    commentsList: [
      {
        id: 'c3',
        author: 'Dinesh Gajurel',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
        timeAgo: '3 hours ago',
        content: 'Cursor and Claude 3.5 Sonnet have completely changed how I prototype MVP features.',
        upvotes: 24
      }
    ]
  }
];

export const INITIAL_LOUNGE_MESSAGES: LoungeMessage[] = [
  {
    id: 'm1',
    author: 'Dinesh Gajurel',
    role: 'Software Architect',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    location: 'Remote Tech Hub',
    message: 'Hey everyone! Excited to be part of Tech Exchange. Working on an AI agent workflow framework 👋',
    timestamp: '10 mins ago',
    likes: 5
  },
  {
    id: 'm2',
    author: 'Dinesh Gajurel',
    role: 'Frontend Developer',
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
    location: 'Remote Tech Hub',
    message: 'Loving the ultra clean blue design here! Finally a comfortable tech forum without noise.',
    timestamp: '25 mins ago',
    likes: 8
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'talk-01',
    title: 'Tech Talk Show #42: Building Autonomous AI Agents & Local LLM Serving',
    mediaType: 'show',
    status: 'featured',
    duration: '45 mins',
    publishedDate: 'Sep 2026',
    timeAgo: 'Featured Episode',
    location: 'YouTube & Tech Exchange Studio',
    organizer: 'Tech Exchange Media',
    description: 'Join our interactive tech show discussing autonomous AI agent orchestration, local LLM serving with Ollama & vLLM, and real-world developer workflows.',
    youtubeUrl: 'https://youtube.com',
    guest: {
      name: 'Dinesh Gajurel',
      role: 'Host & Software Architect @ Tech Exchange',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#TechShow', '#AI', '#AgenticAI', '#Ollama', '#TechExchange'],
    notes: [
      '00:00 - Episode Kickoff & Q&A Setup',
      '12:30 - Autonomous Multi-Agent Workflows vs Simple Copilots',
      '25:40 - Running Local Llama-3 & DeepSeek Models on Apple Silicon & GPUs',
      '40:15 - Audience Code Reviews & Q&A'
    ]
  },
  {
    id: 'talk-02',
    title: 'Kathmandu Tech & AI Summit 2026',
    mediaType: 'event',
    status: 'upcoming',
    duration: 'Full Day Event',
    eventDate: 'Sep 25, 2026 @ 9:00 AM NPT',
    publishedDate: 'Sep 2026',
    timeAgo: 'Upcoming Event',
    location: 'Kathmandu Tech Hub (Hattisar) & Online Live Stream',
    organizer: 'Tech Exchange Community',
    registrationUrl: 'https://example.com/register',
    description: 'A community gathering for software engineers, AI practitioners, and tech founders in Nepal, with talks, workshops, and time to meet other builders.',
    speakers: [
      {
        name: 'Dinesh Gajurel',
        role: 'Host & Software Architect @ Tech Exchange',
        avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
      }
    ],
    topics: ['#Event', '#KathmanduTech', '#AIFellowship', '#Networking'],
    notes: [
      '09:00 AM - Opening Keynote: AI Transformation & Remote Tech in Nepal',
      '11:00 AM - High-Concurrency Web Systems Masterclass',
      '02:00 PM - Startups & VC Pitch Competition',
      '04:30 PM - Community Networking & Refreshments'
    ]
  },
  {
    id: 'talk-03',
    title: 'Hands-on Seminar: High-Concurrency Microservices & Redis Cache Architecture',
    mediaType: 'seminar',
    status: 'upcoming',
    duration: '2 Hours Masterclass',
    eventDate: 'Oct 02, 2026 @ 6:00 PM NPT',
    publishedDate: 'Oct 2026',
    timeAgo: 'Online Seminar',
    location: 'Virtual Masterclass Room (Zoom & YouTube)',
    organizer: 'Tech Exchange Lead',
    registrationUrl: 'https://example.com/seminar',
    description: 'A practical technical seminar covering cache invalidation, rate limiting, service reliability, and the tradeoffs behind real-time systems.',
    guest: {
      name: 'Dinesh Gajurel',
      role: 'Principal Systems Engineer @ Tech Exchange',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#Seminar', '#Microservices', '#Redis', '#SystemDesign'],
    notes: [
      '00:00 - Distributed Cache Invalidation Strategies',
      '30:00 - Redis Sentinel & Cluster Failover Deep Dive',
      '60:00 - Rate Limiting & Token Bucket Algorithms in Go',
      '90:00 - Interactive Code Refactoring & Q&A'
    ]
  },
  {
    id: 'talk-04',
    title: 'Video Demo: Building React 19 Fullstack Apps with Vite 6 & Tailwind',
    mediaType: 'video',
    status: 'recorded',
    duration: '26 mins',
    publishedDate: 'Sep 2026',
    timeAgo: 'Yesterday',
    location: 'Tech Exchange YouTube Channel',
    youtubeUrl: 'https://youtube.com',
    description: 'Step-by-step video code walkthrough demonstrating React 19 Server Actions, useActionState hook, and zero-bundle optimistic state updates.',
    guest: {
      name: 'Dinesh Gajurel',
      role: 'Senior UI Architect @ Tech Exchange',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#VideoDemo', '#React19', '#Vite', '#TailwindCSS'],
    notes: [
      '00:00 - React 19 Setup with Vite 6',
      '08:15 - Implementing useActionState & Server Actions',
      '18:30 - Optimistic Updates with useOptimistic',
      '24:00 - Production Build Benchmarks'
    ]
  },
  {
    id: 'talk-05',
    title: 'Podcast Ep 24: Tech Salaries in Nepal, Remote Engineering Contracts & Equity',
    mediaType: 'podcast',
    status: 'recorded',
    episodeNumber: 24,
    duration: '48 mins',
    publishedDate: 'Sep 2026',
    timeAgo: '3 days ago',
    description: 'A deep dive discussion on Nepali tech compensation benchmarks, navigating remote US/EU engineering contracts, and high-demand skillsets needed in 2026.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    spotifyUrl: 'https://spotify.com',
    youtubeUrl: 'https://youtube.com',
    guest: {
      name: 'Dinesh Gajurel',
      role: 'Engineering Lead @ Tech Exchange',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#Podcast', '#NepalTechSalaries', '#RemoteWork', '#Careers'],
    notes: [
      '00:00 - Current State of the Global Tech Market in 2026',
      '14:20 - Negotiating Remote Contracts & Equity Grants',
      '28:45 - High-Demand Skills: AI Agents, DevOps & Fullstack TypeScript',
      '42:10 - Advice for Junior & Mid-level Engineers'
    ]
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 'tut-1',
    title: 'Building a SQLite Database Tool in the Browser',
    category: 'Web Development',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    summary: 'Learn how browser-local databases can support offline features and reduce unnecessary server requests using SQLite and IndexedDB.',
    content: 'Running SQLite in the browser can be useful for local-first features and small datasets. This guide explains the tradeoffs, setup, and persistence model rather than treating browser storage as a replacement for every backend.\n\n### Step 1: Loading the WASM Module\nInitialize the SQLite binary in your application using a dynamic import.\n\n### Step 2: Persisting Tables to IndexedDB\nKeep local data across page reloads by connecting the database to browser storage.',
    codeSnippet: {
      language: 'typescript',
      code: `import { initSqliteWasm } from '@techexchange/wasm-sqlite';

const db = await initSqliteWasm({ filename: 'app_cache.db' });
await db.exec(\`
  CREATE TABLE IF NOT EXISTS projects (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
\`);`
    },
    tags: ['#TechExplained', '#WebAssembly', '#React', '#SQLite']
  },
  {
    id: 'tut-2',
    title: 'Understanding LLM Transformer Self-Attention from Scratch',
    category: 'AI & Machine Learning',
    readTime: '12 min read',
    difficulty: 'Beginner',
    summary: 'A beginner-friendly introduction to Query, Key, and Value vectors and how self-attention uses them to weigh relationships in text.',
    content: 'Self-attention acts like a dynamic relevance spotlight. Instead of processing text left-to-right linearly, Transformers evaluate every word pair simultaneously to build contextual embeddings.\n\n### Core Math Concept\nGiven input matrix X, we compute Query (Q), Key (K), and Value (V) projections using learned weights.',
    codeSnippet: {
      language: 'python',
      code: `import torch
import torch.nn.functional as F

def self_attention(query, key, value):
    d_k = query.size(-1)
    scores = torch.matmul(query, key.transpose(-2, -1)) / (d_k ** 0.5)
    p_attn = F.softmax(scores, dim=-1)
    return torch.matmul(p_attn, value), p_attn`
    },
    tags: ['#TechExplained', '#AI', '#DeepLearning', '#Python']
  },
  {
    id: 'tut-3',
    title: 'Zero-Downtime Blue/Green Deployments with Docker & Nginx',
    category: 'DevOps & Cloud',
    readTime: '10 min read',
    difficulty: 'Advanced',
    summary: 'A practical guide to switching between application versions with health checks and a rollback path during deployment.',
    content: 'Blue/Green deployment is a release management strategy that minimizes downtime and risk by running two identical production environments called Blue and Green.\n\n### Step 1: Upstream Proxy Swap\nNginx upstream directives allow instant reloading without dropping active HTTP connections.\n\n### Step 2: Healthcheck Signals\nAutomate rollbacks if new releases fail health signals within 30 seconds.',
    codeSnippet: {
      language: 'nginx',
      code: `upstream app_servers {
    server 127.0.0.1:8081 max_fails=2 fail_timeout=5s; # Blue
    server 127.0.0.1:8082 backup;                     # Green
}

server {
    listen 80;
    server_name api.techexchange.dev;

    location / {
        proxy_pass http://app_servers;
        proxy_set_header Host $host;
    }
}`
    },
    tags: ['#TechExplained', '#DevOps', '#Docker', '#Nginx']
  },
  {
    id: 'tut-4',
    title: 'Designing Real-Time WebSockets Architecture at Scale',
    category: 'Systems Architecture',
    readTime: '15 min read',
    difficulty: 'Advanced',
    summary: 'An example architecture for scaling WebSocket systems with shared state, connection health checks, and multiple workers.',
    content: 'Scaling WebSockets requires decoupling stateful connection sockets from stateless app business logic. Learn how Redis Pub/Sub channels enable multi-node horizontal scaling.\n\n### Connection Pooling\nDistribute socket handlers across worker CPU threads using cluster workers.\n\n### Heartbeat Ping/Pong\nPrevent dead connections from consuming RAM with automated keep-alive probes.',
    codeSnippet: {
      language: 'typescript',
      code: `import { createServer } from 'http';
import { WebSocketServer } from 'ws';
import { createClient } from 'redis';

const server = createServer();
const wss = new WebSocketServer({ server });
const pub = createClient();
const sub = pub.duplicate();

await pub.connect();
await sub.connect();

sub.subscribe('chat_events', (message) => {
  wss.clients.forEach(client => client.send(message));
});`
    },
    tags: ['#TechExplained', '#SystemDesign', '#WebSockets', '#Redis']
  }
];

export const SERVICES: TechService[] = [
  {
    id: 'srv-1',
    title: 'Custom Software, SaaS & AI Solutions',
    subtitle: 'Turn a business need into software your team and customers can rely on.',
    description: 'We build software solutions that help businesses launch products, improve daily operations, and serve customers more effectively. This includes web and mobile apps, internal tools, SaaS platforms, and practical AI automation.',
    icon: 'Code',
    badge: 'Business Software',
    features: [
      'Discovery, planning, and a clear path from idea to first release',
      'Customer-facing apps, internal tools, and business workflow systems',
      'AI-assisted workflows, knowledge search, and useful business automation',
      'Reliable integrations, authentication, data architecture, and deployment'
    ],
    deliverables: ['Working Product Increment', 'AI Workflow or Prototype', 'Architecture Documentation', 'Deployment Setup']
  },
  {
    id: 'srv-3',
    title: 'Technical Advisory & Code Review',
    subtitle: 'Make better technical decisions before they become expensive.',
    description: 'Get focused guidance for a codebase, pull request, system design, delivery plan, or production incident, with practical next steps your team can act on.',
    icon: 'Users',
    badge: 'Guidance & Review',
    features: [
      'Codebase quality, security, and performance reviews',
      'System architecture and scaling plans',
      'Cloud reliability, delivery workflow, and cost review',
      'Programming support, pair sessions, and engineering coaching'
    ],
    deliverables: ['Findings and Risk Report', 'Prioritized Technical Roadmap', 'Review or Advisory Session']
  },
  {
    id: 'srv-4',
    title: 'Developer Education & Tech Media',
    subtitle: 'Make useful technical ideas easier to learn and share.',
    description: 'We create and host practical developer content, from programming tutorials and documentation to architecture explainers, interviews, and Tech Talk episodes.',
    icon: 'BookOpen',
    badge: 'Learning & Content',
    features: [
      'Step-by-step programming tutorials and implementation guides',
      'API, product, and architecture documentation',
      'Technical articles, explainers, interviews, and podcast episodes',
      'Content shaped around your audience, product, and learning goals'
    ],
    deliverables: ['Published Tutorial or Episode', 'Documentation Outline', 'Technical Content Plan']
  },
  {
    id: 'srv-5',
    title: 'Developer Community & Events',
    subtitle: 'Build a stronger technical community around your idea.',
    description: 'We support developer communities through useful discussions, workshops, events, knowledge sharing, and partnerships that help people learn and build together.',
    icon: 'Users',
    badge: 'Events & Partnerships',
    features: [
      'Technical workshops, seminars, and community sessions',
      'Developer-focused event and discussion planning',
      'Partnerships with teams, tools, and local tech communities',
      'Practical programming and architecture topics for builders'
    ],
    deliverables: ['Event or Workshop Plan', 'Session Content', 'Community Collaboration Brief']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'NexusAI — Intelligent Developer Co-pilot & Code Search Engine',
    type: 'Full-Stack SaaS & AI Integration',
    client: 'FinTech Startup',
    description: 'A concept build for semantic code search that organizes a large codebase and helps developers understand unfamiliar files and dependencies.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    techStack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Pinecone', 'Tailwind'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    impactMetrics: ['Semantic Code Search', 'AI Explanations', 'Refactoring Suggestions']
  },
  {
    id: 'proj-2',
    title: 'PulseFlow — Real-Time Systems Monitoring Dashboard',
    type: 'High-Throughput Web App',
    client: 'Enterprise Logistics',
    description: 'A monitoring dashboard concept for exploring operational data, tracking system signals, and giving teams a clearer view of changing workloads.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    techStack: ['React', 'Go', 'WebSockets', 'TimescaleDB', 'Tailwind'],
    demoUrl: 'https://example.com',
    impactMetrics: ['Live Monitoring', 'Operational Signals', 'Custom Charts']
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'What early-stage software teams should prepare before seeking funding',
    category: 'Venture & Startups',
    date: 'Today, 7:15 PM NPT',
    timeAgo: '12 mins ago',
    summary: 'A practical overview of the product, customer, and delivery evidence that helps early-stage software teams explain what they are building.',
    source: 'Tech Exchange Newsdesk',
    link: '#',
    isBreaking: true,
    readTime: '3 min read',
    tags: ['#Venture', '#Startups', '#NepalTech', '#Funding']
  },
  {
    id: 'news-2',
    title: 'DeepSeek-R1 & Claude 3.7 Sonnet Push Autonomous Code Generation to New Highs',
    category: 'AI & Frontier Models',
    date: 'Today, 6:40 PM NPT',
    timeAgo: '45 mins ago',
    summary: 'Frontier AI models introduce novel chain-of-thought architectures that dramatically improve multi-file software engineering, bug diagnosis, and automated refactoring.',
    source: 'AI Engineering Dispatch',
    link: '#',
    isBreaking: true,
    readTime: '4 min read',
    tags: ['#AI', '#DeepSeek', '#Claude', '#LLM']
  },
  {
    id: 'news-3',
    title: 'React 19 Official Production Release Brings Native Server Actions & Zero-Bundle Async Hooks',
    category: 'Web & Mobile',
    date: 'Today, 5:15 PM NPT',
    timeAgo: '2 hours ago',
    summary: 'The React team announces general availability of React 19, featuring built-in form state actions, useActionState, and native asset preloading.',
    source: 'React Official Blog',
    link: '#',
    isBreaking: false,
    readTime: '5 min read',
    tags: ['#React19', '#WebDev', '#TypeScript', '#Frontend']
  },
  {
    id: 'news-4',
    title: 'Nepal Tech Fellowship Partners with Industry Leaders to Launch AI Engineering Grant',
    category: 'Education & Grants',
    date: 'Today, 3:30 PM NPT',
    timeAgo: '4 hours ago',
    summary: 'A look at how scholarships, equipment support, and mentorship can help more people in Nepal enter software and AI careers.',
    source: 'Nepal Tech Dispatch',
    link: '#',
    isBreaking: false,
    readTime: '3 min read',
    tags: ['#NepalTech', '#Education', '#AI', '#Fellowship']
  },
  {
    id: 'news-5',
    title: 'Go 1.24 Released with Native WebAssembly (WASM) Support & Multi-Core GC Optimizations',
    category: 'Systems & Cloud',
    date: 'Today, 1:10 PM NPT',
    timeAgo: '6 hours ago',
    summary: 'The Go core team releases version 1.24 featuring a 15% lower memory footprint, enhanced sync.Map performance under high concurrency, and direct WASM target tooling.',
    source: 'Go Release Notes',
    link: '#',
    isBreaking: false,
    readTime: '4 min read',
    tags: ['#Golang', '#WASM', '#Backend', '#Performance']
  },
  {
    id: 'news-6',
    title: 'Docker Introduces Micro-VM Container Isolation for Zero-Trust Local Microservices',
    category: 'DevOps & Security',
    date: 'Yesterday',
    timeAgo: '1 day ago',
    summary: 'New hypervisor-backed micro-VM runtime allows developers to test untrusted npm packages and multi-container environments locally with near-zero latency overhead.',
    source: 'DevOps Weekly',
    link: '#',
    isBreaking: false,
    readTime: '4 min read',
    tags: ['#Docker', '#DevOps', '#Security', '#Containers']
  }
];

export const INITIAL_JOBS: JobListing[] = [
  {
    id: 'job-1',
    title: 'Full-Stack Developer (React / Next.js / Node.js / TS)',
    company: 'Tech Exchange',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    location: '100% Remote',
    type: 'Remote',
    category: 'Fullstack',
    experienceLevel: 'Mid Level',
    salaryRange: 'Competitive Salary',
    description: 'We are looking for a Full-Stack Developer to build platform features, interactive web applications, developer utilities, and reliable backend services.',
    requirements: [
      'Strong proficiency in React, Next.js, TypeScript, and Node.js backend development.',
      'Experience with relational or NoSQL database design (PostgreSQL, MongoDB, Redis).',
      'Knowledge of responsive UI layouts, CSS, and modern API architecture (REST/GraphQL).',
      'Self-driven and comfortable collaborating in a 100% remote, async-first team.'
    ],
    skills: ['React', 'Next.js', 'TypeScript', 'Node.js', 'Tailwind CSS', 'PostgreSQL', 'REST API'],
    postedDate: 'Just now',
    applyUrl: 'https://techexchange.dev/apply',
    featured: true
  },
  {
    id: 'job-2',
    title: 'Content Creator & Media Manager',
    company: 'Tech Exchange',
    companyLogo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    location: '100% Remote',
    type: 'Remote',
    category: 'Media & Growth',
    experienceLevel: 'Mid Level',
    salaryRange: 'Competitive Salary',
    description: 'Lead content production for Tech Talk podcasts, write step-by-step developer tutorials, curate tech news updates, and foster developer community growth.',
    requirements: [
      'Experience in technical writing, podcast hosting/editing, or developer community management.',
      'Strong written and verbal communication skills with a focus on software engineering topics.',
      'Ability to independently plan content schedules, interview tech leaders, and publish developer guides.'
    ],
    skills: ['Technical Writing', 'Podcast Editing', 'Community Management', 'Content Strategy', 'Social Media'],
    postedDate: 'Just now',
    applyUrl: 'https://techexchange.dev/apply',
    featured: true
  }
];

export const COURSES: Course[] = [
  {
    id: 'course-1',
    title: 'Full-Stack Next.js 15 & React 19 Production Masterclass',
    slug: 'fullstack-nextjs-react19-masterclass',
    category: 'Fullstack Web',
    level: 'Intermediate',
    duration: '6 Weeks (Self-paced)',
    lessonsCount: 34,
    studentsEnrolled: 420,
    rating: 4.9,
    reviewsCount: 82,
    price: 'NPR 3,499',
    originalPrice: 'NPR 6,999',
    badge: 'Bestseller',
    description: 'Master enterprise modern web development. Build production-grade SaaS applications using Next.js 15 App Router, React 19 Server Actions, TypeScript, Tailwind CSS, Prisma, and PostgreSQL.',
    instructor: {
      name: 'Dinesh Gajurel',
      role: 'Host & Lead Architect @ Tech Exchange',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    syllabus: [
      {
        week: 1,
        title: 'React 19 Core Fundamentals & Async Server Actions',
        topics: ['useActionState & useOptimistic', 'Form Actions & Zero-Bundle Transitions', 'TypeScript Strict Typing'],
        duration: '5 Lessons • 3 hrs'
      },
      {
        week: 2,
        title: 'Next.js 15 App Router & Server Components Architecture',
        topics: ['Server vs Client Components', 'Streaming & Suspense Boundaries', 'Parallel & Intercepting Routes'],
        duration: '6 Lessons • 4 hrs'
      },
      {
        week: 3,
        title: 'Database Modeling with Prisma ORM & PostgreSQL',
        topics: ['Schema Design & Relational Joins', 'Database Migrations', 'Connection Pooling in Serverless'],
        duration: '6 Lessons • 4 hrs'
      },
      {
        week: 4,
        title: 'Authentication, Authorization & Security Best Practices',
        topics: ['NextAuth / Auth.js Integration', 'JWT vs Session Cookies', 'CSRF, XSS & Security Headers'],
        duration: '5 Lessons • 3.5 hrs'
      },
      {
        week: 5,
        title: 'Payment Gateway Integration (eSewa, Khalti & Stripe APIs)',
        topics: ['Webhook Handlers & Idempotency', 'Transaction Logging', 'Subscription Billing'],
        duration: '6 Lessons • 4 hrs'
      },
      {
        week: 6,
        title: 'CI/CD Deployment, Monitoring & Vercel Optimization',
        topics: ['GitHub Actions Workflows', 'Vercel Deployment & Custom Domains', 'Core Web Vitals & Analytics'],
        duration: '6 Lessons • 3.5 hrs'
      }
    ],
    prerequisites: ['Basic JavaScript (ES6+)', 'HTML & CSS Fundamentals', 'Familiarity with Git'],
    skillsLearned: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'eSewa / Khalti Integration'],
    certificateIncluded: true
  },
  {
    id: 'course-2',
    title: 'Autonomous AI Agents & RAG Pipelines with Python & Vector DBs',
    slug: 'ai-agents-rag-pipelines-python',
    category: 'AI & LLM Engineering',
    level: 'Advanced',
    duration: '5 Weeks (Hands-on)',
    lessonsCount: 28,
    studentsEnrolled: 380,
    rating: 4.95,
    reviewsCount: 74,
    price: 'NPR 4,999',
    originalPrice: 'NPR 8,999',
    badge: 'Popular',
    description: 'Build production multi-agent workflows, long-term memory stores, RAG document search engines, and function-calling bots using Python, LangChain, LlamaIndex, Qdrant, and OpenAI / Anthropic APIs.',
    instructor: {
      name: 'Dinesh Gajurel',
      role: 'Software Architect & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    syllabus: [
      {
        week: 1,
        title: 'LLM Foundations & Prompt Orchestration',
        topics: ['OpenAI & Anthropic API Architectures', 'Structured JSON Output Generation', 'Tokenizer Mechanics'],
        duration: '5 Lessons • 3.5 hrs'
      },
      {
        week: 2,
        title: 'Retrieval Augmented Generation (RAG) Systems',
        topics: ['Text Chunking & Embedding Models', 'Vector DB Indexing (Qdrant & Pinecone)', 'Hybrid Dense-Sparse Search'],
        duration: '6 Lessons • 4.5 hrs'
      },
      {
        week: 3,
        title: 'Autonomous Tool Execution & Function Calling',
        topics: ['Custom Python Tool Definition', 'Database Query Agents', 'Web Search & API Integration'],
        duration: '5 Lessons • 4 hrs'
      },
      {
        week: 4,
        title: 'Multi-Agent Systems & State Machines (LangGraph)',
        topics: ['Supervisor-Worker Multi-Agent Graphs', 'Human-in-the-Loop Approval Intercepts', 'Agent Memory Persistence'],
        duration: '6 Lessons • 5 hrs'
      },
      {
        week: 5,
        title: 'Production Local Serving & Cost Optimization',
        topics: ['Running Ollama & vLLM locally', 'Prompt Caching & Guardrails', 'Deployment on AWS / Modal'],
        duration: '6 Lessons • 4 hrs'
      }
    ],
    prerequisites: ['Intermediate Python', 'Basic understanding of REST APIs'],
    skillsLearned: ['Python', 'LangGraph', 'LangChain', 'Qdrant Vector DB', 'RAG Pipelines', 'Ollama', 'Function Calling'],
    certificateIncluded: true
  },
  {
    id: 'course-3',
    title: 'Modern Python for Beginners: From Zero to Data Structures',
    slug: 'modern-python-beginners-zero-to-hero',
    category: 'Data & Python',
    level: 'Beginner',
    duration: '4 Weeks (Foundational)',
    lessonsCount: 30,
    studentsEnrolled: 1250,
    rating: 4.85,
    reviewsCount: 140,
    price: 'FREE',
    badge: 'Free Course',
    description: 'A beginner-friendly Python course covering core syntax, data structures, object-oriented programming, file handling, and practical exercises.',
    instructor: {
      name: 'Dinesh Gajurel',
      role: 'Software Architect & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    syllabus: [
      {
        week: 1,
        title: 'Variables, Types & Flow Control',
        topics: ['Setup VS Code & Python Runtime', 'Conditionals & Loops', 'String Manipulation'],
        duration: '7 Lessons • 3 hrs'
      },
      {
        week: 2,
        title: 'Lists, Dictionaries & Sets',
        topics: ['List Comprehensions', 'Dictionary Operations', 'Set Operations & Performance'],
        duration: '7 Lessons • 3.5 hrs'
      },
      {
        week: 3,
        title: 'Functions & Object-Oriented Programming',
        topics: ['Function Parameters & Lambda', 'Classes & Inheritance', 'Dunder Methods'],
        duration: '8 Lessons • 4 hrs'
      },
      {
        week: 4,
        title: 'File Processing, API Requests & Final Project',
        topics: ['Reading JSON & CSV Files', 'Requests Library & REST APIs', 'Building a CLI Expense Tracker'],
        duration: '8 Lessons • 4 hrs'
      }
    ],
    prerequisites: ['No prior programming experience required!'],
    skillsLearned: ['Python 3.12', 'Data Structures', 'OOP', 'File Processing', 'CLI Applications'],
    certificateIncluded: true
  },
  {
    id: 'course-4',
    title: 'Production DevOps: Kubernetes, Docker, Terraform & AWS CI/CD',
    slug: 'production-devops-kubernetes-docker-terraform',
    category: 'DevOps & Cloud',
    level: 'Advanced',
    duration: '6 Weeks (Hands-on)',
    lessonsCount: 32,
    studentsEnrolled: 210,
    rating: 4.88,
    reviewsCount: 45,
    price: 'NPR 3,999',
    originalPrice: 'NPR 7,999',
    badge: 'Certificate Included',
    description: 'Architect, automate, and secure production cloud infrastructure. Containerize apps with Docker, manage Kubernetes clusters, provision AWS resources with Terraform, and build GitHub Actions pipelines.',
    instructor: {
      name: 'Dinesh Gajurel',
      role: 'Software Architect & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    syllabus: [
      {
        week: 1,
        title: 'Production Docker Containerization',
        topics: ['Multi-Stage Dockerfiles', 'Distroless & Micro Images', 'Docker Compose Orchestration'],
        duration: '5 Lessons • 3 hrs'
      },
      {
        week: 2,
        title: 'Infrastructure as Code (IaC) with Terraform',
        topics: ['HCL Syntax & Modules', 'AWS VPC, EC2 & RDS Provisioning', 'Remote State & Locking'],
        duration: '5 Lessons • 4 hrs'
      },
      {
        week: 3,
        title: 'Kubernetes Cluster Architecture & Deployments',
        topics: ['Pods, Services & Ingress Controllers', 'ConfigMaps & Secrets Management', 'Helm Charts'],
        duration: '6 Lessons • 4.5 hrs'
      },
      {
        week: 4,
        title: 'Automated CI/CD Workflows & GitOps',
        topics: ['GitHub Actions Production Pipelines', 'ArgoCD GitOps Deployment', 'Zero-Downtime Releases'],
        duration: '5 Lessons • 4 hrs'
      },
      {
        week: 5,
        title: 'Monitoring & Observability Stack',
        topics: ['Prometheus Metrics Collection', 'Grafana Dashboard Visualization', 'Loki Log Aggregation'],
        duration: '5 Lessons • 3.5 hrs'
      },
      {
        week: 6,
        title: 'Cloud Security & Disaster Recovery',
        topics: ['SOC2 Compliance & IAM Policies', 'TLS Certificate Auto-renewal', 'Database Backup Automation'],
        duration: '6 Lessons • 4 hrs'
      }
    ],
    prerequisites: ['Linux Terminal Basics', 'Understanding of Web Networking'],
    skillsLearned: ['Docker', 'Kubernetes', 'Terraform', 'AWS', 'GitHub Actions', 'Prometheus', 'Grafana'],
    certificateIncluded: true
  },
  {
    id: 'course-5',
    title: 'Cross-Platform Mobile App Development with React Native & Expo',
    slug: 'react-native-expo-cross-platform-mobile',
    category: 'Mobile Dev',
    level: 'Intermediate',
    duration: '4 Weeks (Project-based)',
    lessonsCount: 24,
    studentsEnrolled: 260,
    rating: 4.82,
    reviewsCount: 52,
    price: 'NPR 2,999',
    originalPrice: 'NPR 5,999',
    badge: 'New',
    description: 'Build native iOS and Android mobile apps from a single codebase. Learn Expo Router, React Native Reanimated gestures, offline SQLite storage, push notifications, and App Store publishing.',
    instructor: {
      name: 'Dinesh Gajurel',
      role: 'Software Architect & Tech Lead',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    syllabus: [
      {
        week: 1,
        title: 'React Native Fundamentals & Expo SDK',
        topics: ['Expo Router File-based Navigation', 'Flexbox Mobile Layouts', 'Native Paper & Styling'],
        duration: '6 Lessons • 3.5 hrs'
      },
      {
        week: 2,
        title: 'Fluid Animations & Touch Gestures',
        topics: ['React Native Reanimated 3', 'Gesture Handler Swipe Actions', 'Haptic Feedback'],
        duration: '6 Lessons • 4 hrs'
      },
      {
        week: 3,
        title: 'Offline Storage & Device Hardware Access',
        topics: ['Expo SQLite & Async Storage', 'Camera & Biometric Auth', 'Push Notifications'],
        duration: '6 Lessons • 4 hrs'
      },
      {
        week: 4,
        title: 'App Store & Google Play Publishing',
        topics: ['EAS Build & Submissions', 'App Icon & Splash Screen Setup', 'Over-The-Air (OTA) Updates'],
        duration: '6 Lessons • 3.5 hrs'
      }
    ],
    prerequisites: ['React & JavaScript Fundamentals'],
    skillsLearned: ['React Native', 'Expo Router', 'TypeScript', 'Reanimated 3', 'SQLite', 'EAS Build'],
    certificateIncluded: true
  }
];
