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
    content: 'Spent the weekend building SQL-Lens! It runs entire SQLite database engines directly inside your browser tab using WASM. Zero backend servers, instant SQL queries, and interactive schema relationship graphs.',
    author: {
      name: 'Elena Rostova',
      handle: '@elena_dev',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
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
        author: 'Marcus Vance',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
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
      name: 'Dinesh',
      handle: '@dinesh_tech',
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
        author: 'Aria Chen',
        avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
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
    author: 'Siddharth Patel',
    role: 'Full Stack Dev',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
    location: 'Kathmandu, NP',
    message: 'Hey everyone! Excited to be part of Tech Exchange. Working on an AI agent workflow framework 👋',
    timestamp: '10 mins ago',
    likes: 5
  },
  {
    id: 'm2',
    author: 'Maya Lin',
    role: 'Frontend Enthusiast',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&auto=format&fit=crop&q=80',
    location: 'Toronto, CA',
    message: 'Loving the ultra clean blue design here! Finally a comfortable tech forum without noise.',
    timestamp: '25 mins ago',
    likes: 8
  }
];

export const PODCAST_EPISODES: PodcastEpisode[] = [
  {
    id: 'talk-01',
    title: 'Tech Talk Live Show #42: Building Autonomous AI Agents & Local LLM Serving',
    mediaType: 'show',
    status: 'live',
    duration: 'Live Stream',
    publishedDate: 'Sep 2026',
    timeAgo: 'Live Now',
    location: 'YouTube Live & Tech Exchange Studio',
    organizer: 'Tech Exchange Media',
    description: 'Join our interactive live show discussing autonomous AI agent orchestration, local LLM serving with Ollama & vLLM, and real-world developer workflows in Nepal.',
    youtubeUrl: 'https://youtube.com',
    guest: {
      name: 'Dinesh Gajurel',
      role: 'Host & Software Architect @ Tech Exchange',
      avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#LiveShow', '#AI', '#AgenticAI', '#Ollama', '#TechExchange'],
    notes: [
      '🔴 00:00 - Live Stream Kickoff & Q&A Setup',
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
    location: 'Kathmandu Tech Hub (Hattisar) & Online',
    organizer: 'Tech Exchange x Fusemachines Community',
    registrationUrl: 'https://example.com/register',
    description: 'The premier annual gathering of 500+ software engineers, AI researchers, and tech founders in Kathmandu. Featuring keynotes, hands-on workshops, and community networking.',
    speakers: [
      {
        name: 'Sameer Maskey',
        role: 'Founder & CEO @ Fusemachines',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
      },
      {
        name: 'Pratistha Amatya',
        role: 'VP of Engineering @ Cotiviti Nepal',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
      }
    ],
    topics: ['#Event', '#KathmanduTech', '#AIFellowship', '#Networking'],
    notes: [
      '09:00 AM - Opening Keynote: AI Transformation in South Asia',
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
    timeAgo: 'Live Online Seminar',
    location: 'Virtual Masterclass Room (Zoom & YouTube)',
    organizer: 'Cotiviti Engineering Lead',
    registrationUrl: 'https://example.com/seminar',
    description: 'An intensive 2-hour interactive technical seminar covering distributed locking, idempotency keys, rate-limiting algorithms, and sub-millisecond Redis cache invalidation.',
    guest: {
      name: 'Aarav Shrestha',
      role: 'Principal Systems Engineer',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#Seminar', '#Microservices', '#Redis', '#SystemDesign'],
    notes: [
      '00:00 - Distributed Cache Invalidation Strategies',
      '30:00 - Redis Sentinel & Cluster Failover Deep Dive',
      '60:00 - Rate Limiting & Token Bucket Algorithms in Go',
      '90:00 - Live Code Refactoring & Q&A'
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
      name: 'Elena Rostova',
      role: 'Senior UI Architect',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
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
    title: 'Podcast Ep 24: Tech Salaries in Nepal, Remote US Companies & Career Growth',
    mediaType: 'podcast',
    status: 'recorded',
    episodeNumber: 24,
    duration: '48 mins',
    publishedDate: 'Sep 2026',
    timeAgo: '3 days ago',
    description: 'A deep dive discussion on compensation benchmarks in Nepal, navigating local NPR contracts vs overseas USD roles, and high-demand skillsets needed in 2026.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    spotifyUrl: 'https://spotify.com',
    youtubeUrl: 'https://youtube.com',
    guest: {
      name: 'Bikram Thapa',
      role: 'Engineering Director @ TechFlow Nepal',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#Podcast', '#TechSalariesNepal', '#RemoteWork', '#Careers'],
    notes: [
      '00:00 - Current State of the Nepali Tech Market in 2026',
      '14:20 - Negotiating NPR Salaries vs USD Remote Contracts',
      '28:45 - High-Demand Skills: AI, DevOps & Fullstack TypeScript',
      '42:10 - Advice for Junior & Mid-level Engineers'
    ]
  }
];

export const TUTORIALS: Tutorial[] = [
  {
    id: 'tut-1',
    title: 'Building a High-Performance SQLite WebAssembly Engine in React',
    category: 'Web Development',
    readTime: '8 min read',
    difficulty: 'Intermediate',
    summary: 'Learn how to run full SQL engines directly in your user’s browser tab with zero backend server latency using SQLite WASM & IndexedDB persistence.',
    content: 'Running SQLite inside the browser opens up unprecedented offline-first experiences. By compiling C-based SQLite to WebAssembly, your web application can perform complex relational joins at native speeds directly on client hardware.\n\n### Step 1: Loading the WASM Module\nInitialize the SQLite binary in your React component using dynamic import promises.\n\n### Step 2: Persisting Tables to IndexedDB\nEnsure data isn\'t lost on page reloads by attaching VFS (Virtual File System) to browser storage.',
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
    summary: 'No complex math degree needed! A crystal-clear breakdown of Query, Key, and Value vectors and how self-attention processes human language.',
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
    summary: 'Step-by-step guide to configuring automated container switching and health-checked proxy routing for 99.99% service availability.',
    content: 'Blue/Green deployment is a release management strategy that minimizes downtime and risk by running two identical production environments called Blue and Green.\n\n### Step 1: Upstream Proxy Swap\nNginx upstream directives allow instant reloading without dropping active HTTP connections.\n\n### Step 2: Healthcheck Signals\nAutomate rollbacks if new releases fail health signals within 30 seconds.',
    codeSnippet: {
      language: 'nginx',
      code: `upstream app_servers {
    server 127.0.0.1:8081 max_fails=2 fail_timeout=5s; # Blue
    server 127.0.0.1:8082 backup;                     # Green
}

server {
    listen 80;
    server_name api.techexchange.com;

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
    summary: 'How to handle 100k concurrent WebSocket connections with Redis Pub/Sub state sync and Node.js cluster worker pools.',
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
    title: 'Full-Stack Software Development',
    subtitle: 'From zero to production-grade web & mobile applications.',
    description: 'We design, architect, and engineer high-performance web products, SaaS platforms, and mobile apps built to scale effortlessly.',
    icon: 'Code',
    badge: 'Popular',
    features: [
      'React, Next.js, Node.js, Python & Rust Stack',
      'Responsive, High-Aesthetic UI/UX Systems',
      'Robust API Architecture & Database Engineering',
      'CI/CD Pipelines & Cloud Deployment (AWS, Vercel, GCP)'
    ],
    deliverables: ['Production Source Code', 'Full Architecture Specs', 'Automated Test Suite', 'Deployment Setup']
  },
  {
    id: 'srv-2',
    title: 'AI Systems & Autonomous Agents',
    subtitle: 'Embed cutting-edge AI capability into your business workflows.',
    description: 'We build custom LLM pipelines, RAG search systems, AI copilots, and autonomous workflow automation tailored to your proprietary data.',
    icon: 'Cpu',
    badge: 'Trending',
    features: [
      'Custom RAG (Retrieval-Augmented Generation)',
      'Autonomous Multi-Agent Orchestration',
      'Vector Database Integration (Pinecone, Qdrant)',
      'Fine-tuning & Local Model Deployment (Ollama, vLLM)'
    ],
    deliverables: ['AI Pipeline Code', 'Vector Store Setup', 'API Gateway', 'Evaluation Dashboard']
  },
  {
    id: 'srv-3',
    title: 'Technical Consultation & Audits',
    subtitle: 'Expert 1-on-1 strategy, code reviews, and architecture optimization.',
    description: 'Stuck on scaling bottlenecks, security vulnerabilities, or tech stack selection? Book dedicated consultation sessions with senior engineers.',
    icon: 'Users',
    badge: 'Strategic',
    features: [
      'Codebase Quality & Performance Audits',
      'System Architecture Blueprinting',
      'Tech Stack & Cloud Cost Optimization',
      '1-on-1 Advisory & Technical Leadership'
    ],
    deliverables: ['Comprehensive Audit Report', 'Refactoring Roadmap', '1-on-1 Advisory Session']
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-1',
    title: 'NexusAI — Intelligent Developer Co-pilot & Code Search Engine',
    type: 'Full-Stack SaaS & AI Integration',
    client: 'FinTech Startup',
    description: 'Built a real-time semantic code search engine that indexes multi-million line codebases and provides instant AI explanations and refactoring suggestions.',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&auto=format&fit=crop&q=80',
    techStack: ['Next.js', 'TypeScript', 'Python', 'FastAPI', 'Pinecone', 'Tailwind'],
    demoUrl: 'https://example.com',
    githubUrl: 'https://github.com',
    impactMetrics: ['99.9% Search Uptime', '<120ms Latency', '45k Monthly Users']
  },
  {
    id: 'proj-2',
    title: 'PulseFlow — Real-Time Systems Monitoring Dashboard',
    type: 'High-Throughput Web App',
    client: 'Enterprise Logistics',
    description: 'Designed and engineered a sub-second telemetry visualization platform processing over 50,000 metrics per second with zero UI lag.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80',
    techStack: ['React', 'Go', 'WebSockets', 'TimescaleDB', 'Tailwind'],
    demoUrl: 'https://example.com',
    impactMetrics: ['50k Events/sec', 'Zero Memory Leaks', 'Custom Charting']
  }
];

export const NEWS_ITEMS: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Kathmandu Tech Hub Unveils NPR 50M Seed Fund for Early-Stage Software Startups',
    category: 'Nepal Tech Scene',
    date: 'Today, 7:15 PM NPT',
    timeAgo: '12 mins ago',
    summary: 'A new venture fund backed by Nepal tech leaders and international investors launches in Kathmandu to fund early-stage AI, SaaS, and fullstack web applications.',
    source: 'Tech Exchange Newsdesk',
    link: '#',
    isBreaking: true,
    readTime: '3 min read',
    tags: ['#NepalTech', '#Startups', '#Kathmandu', '#Funding']
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
    title: 'Fusemachines & Tribhuvan University Partner to Launch Advanced AI Engineering Fellowship',
    category: 'Nepal Tech Scene',
    date: 'Today, 3:30 PM NPT',
    timeAgo: '4 hours ago',
    summary: 'Selected computer science graduates in Kathmandu will receive full tuition coverage, high-performance hardware stipends, and direct mentorship from global AI researchers.',
    source: 'Kathmandu Tech Dispatch',
    link: '#',
    isBreaking: false,
    readTime: '3 min read',
    tags: ['#NepalTech', '#Fusemachines', '#Education', '#AI']
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
    title: 'Senior Full-Stack AI Engineer',
    company: 'Fusemachines Nepal',
    companyLogo: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=120&auto=format&fit=crop&q=80',
    location: 'Kathmandu / Remote (Nepal)',
    type: 'Remote',
    category: 'Fullstack',
    experienceLevel: 'Senior',
    salaryRange: 'NPR 1,80,000 - 2,60,000 / mo',
    description: 'Seeking a Senior Full-Stack AI Engineer in Nepal to build next-generation enterprise intelligent apps. Architect React/Next.js frontends while orchestrating Python LLM backend workflows, RAG pipelines, and vector DBs.',
    requirements: [
      '4+ years of experience with modern TypeScript/React and Node.js or Python backend systems.',
      'Hands-on experience deploying LLM orchestration, RAG pipelines, or AI agents (LangChain, LlamaIndex, OpenAI/Anthropic APIs).',
      'Proficiency with relational (PostgreSQL) and vector databases (pgvector, Pinecone, Qdrant).',
      'Based in Nepal with strong English communication skills for global tech collaboration.'
    ],
    skills: ['TypeScript', 'React', 'Next.js', 'Python', 'FastAPI', 'Vector DBs', 'Tailwind CSS'],
    postedDate: '1 day ago',
    applyUrl: 'https://example.com/apply',
    featured: true
  },
  {
    id: 'job-2',
    title: 'Lead Cloud & DevOps Infrastructure Architect',
    company: 'Cotiviti Nepal',
    companyLogo: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=120&auto=format&fit=crop&q=80',
    location: 'Hattisar, Kathmandu / Hybrid',
    type: 'Full-time',
    category: 'DevOps & Cloud',
    experienceLevel: 'Lead',
    salaryRange: 'NPR 2,20,000 - 3,20,000 / mo',
    description: 'Lead the design, cloud security, and automation of multi-region Kubernetes clusters, CI/CD pipelines, and microservices infrastructure serving global healthcare & fintech platforms.',
    requirements: [
      '6+ years in DevOps, SRE, or Infrastructure Engineering leadership.',
      'Mastery of Kubernetes, Terraform, Docker, AWS, and GitOps workflows (ArgoCD).',
      'Deep knowledge of monitoring & observability (Prometheus, Grafana, Datadog).',
      'Experience in zero-downtime deployments and SOC2 enterprise security.'
    ],
    skills: ['Kubernetes', 'Docker', 'Terraform', 'AWS', 'Go', 'Nginx', 'Prometheus'],
    postedDate: '2 days ago',
    applyUrl: 'https://example.com/apply',
    featured: true
  },
  {
    id: 'job-3',
    title: 'Senior Frontend UI/UX Engineer (React & Tailwind)',
    company: 'Leapfrog Technology',
    companyLogo: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=120&auto=format&fit=crop&q=80',
    location: 'Jhamsikhel, Lalitpur / Remote',
    type: 'Remote',
    category: 'Frontend',
    experienceLevel: 'Senior',
    salaryRange: 'NPR 1,40,000 - 2,10,000 / mo',
    description: 'Craft stunning, high-performance web interfaces and component design systems for US & international clients. Collaborate closely with product designers to implement responsive micro-interactions.',
    requirements: [
      '4+ years building production web applications using React, TypeScript, and Tailwind CSS.',
      'Strong eye for visual UI aesthetics, accessibility (a11y), and CSS performance.',
      'Experience with state management, web vitals optimization, and modern bundle tools.'
    ],
    skills: ['React', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Framer Motion', 'Redux'],
    postedDate: '3 days ago',
    applyUrl: 'https://example.com/apply',
    featured: false
  },
  {
    id: 'job-4',
    title: 'Backend Systems Engineer (Rust / Go)',
    company: 'LogPoint Nepal',
    companyLogo: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=120&auto=format&fit=crop&q=80',
    location: 'Jawalakhel, Lalitpur / Hybrid',
    type: 'Full-time',
    category: 'Backend',
    experienceLevel: 'Mid Level',
    salaryRange: 'NPR 1,50,000 - 2,20,000 / mo',
    description: 'Join our core cybersecurity engineering team in Lalitpur to build low-latency distributed log processors, high-throughput gRPC microservices, and telemetry streaming pipelines in Rust and Go.',
    requirements: [
      '3+ years experience with Rust or Go building concurrent backend services.',
      'Solid grasp of distributed systems, message queues (Kafka, NATS), and concurrency.',
      'Familiarity with PostgreSQL, Redis, and Linux kernel fundamentals.'
    ],
    skills: ['Rust', 'Go', 'gRPC', 'Kafka', 'PostgreSQL', 'Redis', 'Docker'],
    postedDate: '4 days ago',
    applyUrl: 'https://example.com/apply',
    featured: false
  },
  {
    id: 'job-5',
    title: 'AI Research Scientist — NLP & LLMs',
    company: 'Deerhold Nepal',
    companyLogo: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80',
    location: 'Siphal, Kathmandu / On-site',
    type: 'Full-time',
    category: 'AI & ML',
    experienceLevel: 'Senior',
    salaryRange: 'NPR 2,00,000 - 3,00,000 / mo',
    description: 'Drive fundamental research and model optimization in Nepali & English multi-modal language processing, domain fine-tuning (RLHF/DPO), and medical AI models.',
    requirements: [
      'Master’s or Bachelor’s degree in Computer Science, AI, or quantitative field.',
      'Strong project or research record in PyTorch, Transformer fine-tuning, and NLP.',
      'Experience scaling GPU training workflows (PyTorch, Hugging Face, DeepSpeed).'
    ],
    skills: ['PyTorch', 'Python', 'CUDA', 'Transformers', 'NLP', 'LLM Fine-tuning'],
    postedDate: '5 days ago',
    applyUrl: 'https://example.com/apply',
    featured: true
  },
  {
    id: 'job-6',
    title: 'Mobile Engineer (Flutter / React Native)',
    company: 'eSewa (F1Soft Group)',
    companyLogo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80',
    location: 'Pulchowk, Lalitpur / Hybrid',
    type: 'Full-time',
    category: 'Mobile',
    experienceLevel: 'Mid Level',
    salaryRange: 'NPR 1,30,000 - 1,90,000 / mo',
    description: 'Build sleek, secure digital payment & financial service mobile applications serving millions of users across Nepal. Optimize offline storage, biometric login, and payment gateways.',
    requirements: [
      '3+ years experience with Flutter or React Native development.',
      'Track record shipping apps on iOS App Store & Google Play Store.',
      'Experience integrating REST APIs, WebSockets, and secure local storage.'
    ],
    skills: ['Flutter', 'React Native', 'Dart', 'TypeScript', 'Mobile Security', 'REST API'],
    postedDate: '1 week ago',
    applyUrl: 'https://example.com/apply',
    featured: false
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
    studentsEnrolled: 1840,
    rating: 4.9,
    reviewsCount: 182,
    price: 'NPR 4,999',
    originalPrice: 'NPR 9,999',
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
        title: 'Payment Gateway Integration (eSewa, Khalti & Stripe)',
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
    skillsLearned: ['Next.js 15', 'React 19', 'TypeScript', 'Prisma ORM', 'PostgreSQL', 'Tailwind CSS', 'eSewa Integration'],
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
    studentsEnrolled: 2350,
    rating: 4.95,
    reviewsCount: 240,
    price: 'NPR 6,999',
    originalPrice: 'NPR 12,999',
    badge: 'Hot & Trending',
    description: 'Build production multi-agent workflows, long-term memory stores, RAG document search engines, and function-calling bots using Python, LangChain, LlamaIndex, Qdrant, and OpenAI / Anthropic APIs.',
    instructor: {
      name: 'Dr. Sameer Maskey',
      role: 'Founder & CEO @ Fusemachines',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
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
    studentsEnrolled: 4120,
    rating: 4.85,
    reviewsCount: 310,
    price: 'FREE',
    badge: 'Free Course',
    description: 'The ultimate beginner programming course. Learn core Python syntax, algorithms, object-oriented programming (OOP), file I/O, and data processing with practical exercises.',
    instructor: {
      name: 'Dr. Sophia Vance',
      role: 'Head of AI Research @ AI Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
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
    studentsEnrolled: 1150,
    rating: 4.88,
    reviewsCount: 95,
    price: 'NPR 5,499',
    originalPrice: 'NPR 10,000',
    badge: 'Certificate Included',
    description: 'Architect, automate, and secure production cloud infrastructure. Containerize apps with Docker, manage Kubernetes clusters, provision AWS resources with Terraform, and build GitHub Actions pipelines.',
    instructor: {
      name: 'Bikram Thapa',
      role: 'Engineering Director @ TechFlow Nepal',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80'
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
    studentsEnrolled: 1290,
    rating: 4.82,
    reviewsCount: 112,
    price: 'NPR 3,999',
    originalPrice: 'NPR 7,500',
    badge: 'New',
    description: 'Build native iOS and Android mobile apps from a single codebase. Learn Expo Router, React Native Reanimated gestures, offline SQLite storage, push notifications, and App Store publishing.',
    instructor: {
      name: 'Elena Rostova',
      role: 'Fullstack Architect @ Tech Exchange',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80'
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
