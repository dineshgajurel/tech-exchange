import { PodcastEpisode, Tutorial, PortfolioProject, TechService, NewsItem, Post, LoungeMessage, JobListing } from '../types';

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
    id: 'ep-01',
    episodeNumber: 24,
    title: 'The Future of AI Engineers & Building Production Autonomous Agents',
    duration: '48 mins',
    publishedDate: 'Sep 2026',
    description: 'We sit down with lead AI engineers to dissect the shift from prompt engineering to full autonomous agent architectures, memory stores, and vector databases in production.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
    spotifyUrl: 'https://spotify.com',
    youtubeUrl: 'https://youtube.com',
    guest: {
      name: 'Dr. Sophia Vance',
      role: 'Head of AI Research @ AI Labs',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#TechTalk', '#AI', '#LLM', '#SoftwareArchitecture'],
    notes: [
      '00:00 - Introduction & The Evolution of AI Engineering',
      '12:30 - How Vector Databases handle long-term agent memory',
      '27:15 - Function Calling & Tool Execution Security',
      '41:00 - What to build in 2026'
    ]
  },
  {
    id: 'ep-02',
    episodeNumber: 23,
    title: 'Why Modern Monoliths are Winning Against Microservices in 2026',
    duration: '35 mins',
    publishedDate: 'Aug 2026',
    description: 'Is microservice overhead hurting early-stage startups? We examine how modular monoliths in Go, Rust, and Next.js are delivering 10x faster shipping speed.',
    audioUrl: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3',
    spotifyUrl: 'https://spotify.com',
    youtubeUrl: 'https://youtube.com',
    guest: {
      name: 'Julian Thorne',
      role: 'Principal Architect',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80'
    },
    topics: ['#TechTalk', '#SystemDesign', '#Backend', '#Startups'],
    notes: [
      '00:00 - The Microservice Fatigue Problem',
      '14:20 - Modular Monolith Architecture Patterns',
      '29:00 - Benchmark comparisons & DevOps savings'
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
    title: 'OpenAI Unveils GPT-4.5 with Enhanced Reasoning & Native Multimodal Tools',
    category: 'AI & Frontier Models',
    date: 'Sep 2026',
    summary: 'The newest model brings landmark benchmark improvements in complex coding, system architecture design, and real-time execution.',
    source: 'Tech Exchange Newsdesk',
    link: '#'
  },
  {
    id: 'news-2',
    title: 'Rust 1.85 Released with Improved Async Trait Stabilization',
    category: 'Programming Languages',
    date: 'Aug 2026',
    summary: 'Rust developers gain native support for async closures, faster incremental compilation, and memory management optimizations.',
    source: 'Tech Exchange Newsdesk',
    link: '#'
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
