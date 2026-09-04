import React from 'react';
import { PORTFOLIO_PROJECTS } from '../data/initialData';
import { Code, ExternalLink, Github, Sparkles, TrendingUp, Layers } from 'lucide-react';

interface PortfolioSectionProps {
  onOpenConsultation: () => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onOpenConsultation }) => {
  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800">
            <Code className="w-3.5 h-3.5 text-blue-600" />
            <span>Build With Tech</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
            Software Portfolio & Featured Builds
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Real products, AI agent integrations, and scalable web apps engineered by Tech Exchange.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 cursor-pointer shrink-0"
        >
          Collaborate on a Build →
        </button>
      </div>

      {/* Portfolio Grid */}
      <div className="space-y-8">
        {PORTFOLIO_PROJECTS.map((proj) => (
          <div
            key={proj.id}
            className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/80 dark:border-slate-800 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            {/* Project Image */}
            <div className="lg:col-span-5 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 aspect-video relative group">
              <img
                src={proj.image}
                alt={proj.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent flex items-end p-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white shadow-xs">
                  {proj.type}
                </span>
              </div>
            </div>

            {/* Details */}
            <div className="lg:col-span-7 space-y-4">
              {proj.client && (
                <div className="text-xs font-extrabold text-blue-600 dark:text-blue-400 uppercase tracking-wider">
                  Client / Case Study: {proj.client}
                </div>
              )}

              <h3 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white leading-tight">
                {proj.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                {proj.description}
              </p>

              {/* Impact Metrics */}
              <div className="flex flex-wrap gap-2 py-1">
                {proj.impactMetrics.map((m, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-bold bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-800"
                  >
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    {m}
                  </span>
                ))}
              </div>

              {/* Tech Stack Badges */}
              <div className="flex flex-wrap items-center gap-1.5 pt-2">
                <span className="text-[11px] font-bold text-slate-400 uppercase mr-1">Stack:</span>
                {proj.techStack.map((tech) => (
                  <span key={tech} className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
                {proj.demoUrl && (
                  <a
                    href={proj.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-xs transition-colors"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Product Demo</span>
                  </a>
                )}
                {proj.githubUrl && (
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 hover:bg-slate-200 transition-colors text-xs font-bold"
                  >
                    <Github className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
