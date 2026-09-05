import React from 'react';
import { Mic, BookOpen, Wrench, Newspaper, ArrowRight, Briefcase, Sparkles, Building2 } from 'lucide-react';
import { TechExchangeLogo } from './TechExchangeLogo';
import { SectionTab } from '../types';

interface HeroReferenceBannerProps {
  onSelectTab: (tab: SectionTab) => void;
  onOpenConsultation: () => void;
}

export const HeroReferenceBanner: React.FC<HeroReferenceBannerProps> = ({
  onSelectTab,
  onOpenConsultation,
}) => {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      
      {/* Clean Background Layout */}

      <div className="max-w-5xl mx-auto px-6 py-12 md:py-16 relative z-10">
        
        {/* Main Title & Brand Logo Concept */}
        <div className="flex flex-col items-start gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
            <span>Official Brand & Technology Media Platform</span>
          </div>

          <div className="pt-2">
            <TechExchangeLogo size="lg" showTagline={true} />
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 pl-1">
          Tech chats were scattered everywhere — different servers, different groups.<br />
          <span className="font-semibold text-slate-900 dark:text-white">So here's one place for it.</span> We host Tech Talk podcasts, publish step-by-step guides, curate tech news, engineer software solutions, and connect talent with top engineering teams.
        </p>

        {/* Brand Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          
          {/* Pillar 1: Tech Talk (Podcast) */}
          <div 
            onClick={() => onSelectTab('podcast')}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-all cursor-pointer shadow-xs hover:border-blue-300"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech Talk <span className="font-normal text-slate-600 dark:text-slate-400">— Podcast</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Deep tech conversations, engineering takes, & expert interviews.
              </div>
            </div>
          </div>

          {/* Pillar 2: Tech Explained (Tutorials) */}
          <div 
            onClick={() => onSelectTab('tutorials')}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-all cursor-pointer shadow-xs hover:border-blue-300"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech Explained <span className="font-normal text-slate-600 dark:text-slate-400">— Guides</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Big ideas, explained simply. Code snippets & architecture guides.
              </div>
            </div>
          </div>

          {/* Pillar 3: Build With Tech (Software Dev & Services) */}
          <div 
            onClick={() => onSelectTab('services')}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-all cursor-pointer shadow-xs hover:border-blue-300"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Build With Tech <span className="font-normal text-slate-600 dark:text-slate-400">— Services</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Custom fullstack apps, AI systems, and technical consultation.
              </div>
            </div>
          </div>

          {/* Pillar 4: What's Happening in Tech (News) */}
          <div 
            onClick={() => onSelectTab('news')}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-all cursor-pointer shadow-xs hover:border-blue-300"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Newspaper className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech News <span className="font-normal text-slate-600 dark:text-slate-400">— Frontier Updates</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                New tools, AI releases, and developer tech trends.
              </div>
            </div>
          </div>

          {/* Pillar 5: Tech Jobs (Careers) */}
          <div 
            onClick={() => onSelectTab('jobs')}
            className="group flex items-start gap-4 p-4 rounded-2xl bg-slate-50/70 dark:bg-slate-800/50 hover:bg-blue-50 dark:hover:bg-slate-800 border border-slate-200/70 dark:border-slate-700 transition-all cursor-pointer shadow-xs hover:border-blue-300 sm:col-span-2 lg:col-span-1"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-white dark:bg-slate-900 flex items-center justify-center text-blue-600 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Building2 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech Jobs <span className="font-normal text-slate-600 dark:text-slate-400">— Engineering Careers</span>
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                Curated remote & full-time developer positions from top labs.
              </div>
            </div>
          </div>

        </div>

        {/* CTA Bar */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-base font-medium text-slate-700 dark:text-slate-300">
              Need custom software, AI integration, or technical advice for your product?
            </p>
            <div className="text-xs text-slate-500 dark:text-slate-400 font-semibold mt-0.5">
              Talk • Learn • Build. Simple as that.
            </div>
          </div>

          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-sm shadow-lg shadow-blue-600/25 hover:shadow-blue-600/40 transition-all cursor-pointer shrink-0"
          >
            <Briefcase className="w-4 h-4" />
            <span>Book Consultation / Collaborate</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
};
