import React from 'react';
import {
  Rocket,
  Sparkles,
  ArrowLeft,
  Mic,
  GraduationCap,
  BookOpen,
  Briefcase,
  Newspaper,
  MessageSquare,
  Code,
  Wrench,
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface ComingSoonProps {
  /** Section name shown in the heading, e.g. "Tech Talk" */
  sectionName?: string;
}

const UPCOMING_FEATURES = [
  {
    icon: Mic,
    title: 'Tech Talk — Podcasts & Live Shows',
    description:
      'Audio & video conversations with engineers, founders, and AI researchers. Subscribe and never miss an episode.',
    color: 'text-blue-600 dark:text-blue-400',
    bg: 'bg-blue-50 dark:bg-blue-950/60',
  },
  {
    icon: GraduationCap,
    title: 'Programming Courses',
    description:
      'Structured masterclasses in Next.js, Python, AI Agents, DevOps, and React Native — taught by practicing engineers.',
    color: 'text-violet-600 dark:text-violet-400',
    bg: 'bg-violet-50 dark:bg-violet-950/60',
  },
  {
    icon: BookOpen,
    title: 'Tech Explained — Tutorials & Guides',
    description:
      'Beginner-to-advanced breakdowns of real architectures, code patterns, and emerging technologies.',
    color: 'text-emerald-600 dark:text-emerald-400',
    bg: 'bg-emerald-50 dark:bg-emerald-950/60',
  },
  {
    icon: Briefcase,
    title: 'Tech Jobs & Career Board',
    description:
      'Curated remote and on-site engineering roles. Apply directly and track opportunities in Nepal and worldwide.',
    color: 'text-amber-600 dark:text-amber-400',
    bg: 'bg-amber-50 dark:bg-amber-950/60',
  },
  {
    icon: Newspaper,
    title: 'Tech News — Frontier Updates',
    description:
      'Daily curated coverage of AI releases, framework updates, startup funding, and developer ecosystem news.',
    color: 'text-rose-600 dark:text-rose-400',
    bg: 'bg-rose-50 dark:bg-rose-950/60',
  },
  {
    icon: Wrench,
    title: 'Software Services & Consultation',
    description:
      'Full-stack development, AI system engineering, and senior technical advisory — delivered by our team to clients worldwide.',
    color: 'text-cyan-600 dark:text-cyan-400',
    bg: 'bg-cyan-50 dark:bg-cyan-950/60',
  },
  {
    icon: MessageSquare,
    title: 'Community Forum & Lounge',
    description:
      'Open discussion channels for tech talk, project showcases, Q&A threads, and real-time developer chat.',
    color: 'text-indigo-600 dark:text-indigo-400',
    bg: 'bg-indigo-50 dark:bg-indigo-950/60',
  },
  {
    icon: Code,
    title: 'Build Showcase & Portfolio',
    description:
      'Spotlight on real projects we\'ve shipped — with live demos, impact metrics, and the tech stack behind each build.',
    color: 'text-teal-600 dark:text-teal-400',
    bg: 'bg-teal-50 dark:bg-teal-950/60',
  },
];

export const ComingSoon: React.FC<ComingSoonProps> = ({ sectionName }) => {
  return (
    <section className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center space-y-5 mb-14">
          {/* Animated icon */}
          <div className="relative mx-auto w-20 h-20">
            <div className="absolute inset-0 rounded-full bg-blue-500/15 dark:bg-blue-400/10 animate-ping" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-cyan-500 flex items-center justify-center shadow-xl shadow-blue-500/25">
              <Rocket className="w-9 h-9 text-white" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold bg-amber-50 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-800">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Launching Soon</span>
          </div>

          {/* Main heading */}
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white leading-tight">
            {sectionName ? (
              <>
                We're crafting{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  {sectionName}
                </span>{' '}
                for you
              </>
            ) : (
              <>
                Big things are{' '}
                <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                  in the works
                </span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            We're building a complete ecosystem for Nepal's tech community — from podcasts and courses to jobs and software services. Here's what's coming:
          </p>
        </div>

        {/* Upcoming Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-14">
          {UPCOMING_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className="group p-5 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700 shadow-xs hover:shadow-lg transition-all"
              >
                <div
                  className={`w-10 h-10 rounded-xl ${feature.bg} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}
                >
                  <Icon className={`w-5 h-5 ${feature.color}`} />
                </div>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mb-1">
                  {feature.title}
                </h3>
                <p className="text-[11px] leading-relaxed text-slate-500 dark:text-slate-400">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center space-y-4">
          <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">
            Stay tuned — it'll be worth the wait. 🚀
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900 dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white text-xs font-bold transition-all shadow-md"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </section>
  );
};
