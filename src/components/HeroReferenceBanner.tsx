import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Mic, 
  BookOpen, 
  Wrench, 
  Newspaper, 
  ArrowRight, 
  Briefcase, 
  Sparkles, 
  GraduationCap,
  MessageSquare,
  Globe,
  CheckCircle2
} from 'lucide-react';
import { TechExchangeLogo } from './TechExchangeLogo';
import { SectionTab } from '../types';

interface HeroReferenceBannerProps {
  onSelectTab?: (tab: SectionTab) => void;
  onOpenConsultation: () => void;
}

export const HeroReferenceBanner: React.FC<HeroReferenceBannerProps> = ({
  onOpenConsultation,
}) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50/40 via-white to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-900 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      
      {/* Subtle Background Glow Accent */}
      <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-600/15 blur-3xl rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-12 md:py-16 relative z-10">
        
        {/* Main Title & Brand Badges */}
        <div className="flex flex-col items-start gap-4 mb-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-100/80 dark:bg-blue-950/80 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800/80 shadow-xs">
            <Sparkles className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />
            <span>For developers, founders, and product teams</span>
          </div>

          <div className="pt-1">
            <TechExchangeLogo size="lg" showTagline={true} />
          </div>

          <h1 className="max-w-4xl text-3xl sm:text-5xl font-heading font-extrabold tracking-tight leading-tight text-slate-900 dark:text-white">
            Learn, build, and grow with technology.
          </h1>
        </div>

        {/* Subtitle */}
        <p className="text-lg md:text-xl font-medium text-slate-700 dark:text-slate-300 max-w-3xl leading-relaxed mb-10 pl-0.5">
          Tech Exchange brings together conversations, guides, courses, projects, jobs, and community spaces for people building with technology.<br />
          <span className="font-bold text-slate-900 dark:text-white">Learn from the community, or work with us on custom software, automation, and technical decisions.</span>
        </p>

        {/* Brand Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
          
          {/* Pillar 1: Tech Talk (Podcasts, Shows & Events) */}
          <Link
            to="/podcast"
            className="group flex items-start gap-4 p-4.5 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Mic className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech Talk <span className="font-normal text-slate-500 dark:text-slate-400">— Conversations & Events</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Conversations with people building software, plus talks, demos, and community events.
              </div>
            </div>
          </Link>

          {/* Pillar 2: Programming Courses */}
          <Link
            to="/courses"
            className="group flex items-start gap-4 p-4.5 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Programming Courses <span className="font-normal text-slate-500 dark:text-slate-400">— Structured Learning</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Guided lessons and projects for people learning programming or strengthening their skills.
              </div>
            </div>
          </Link>

          {/* Pillar 3: Tech Explained (Tutorials) */}
          <Link
            to="/tutorials"
            className="group flex items-start gap-4 p-4.5 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <BookOpen className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech Explained <span className="font-normal text-slate-500 dark:text-slate-400">— Practical Guides</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Clear explanations, examples, and technical notes for understanding how software works.
              </div>
            </div>
          </Link>

          {/* Pillar 4: Tech Jobs */}
          <Link
            to="/jobs"
            className="group flex items-start gap-4 p-4.5 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Briefcase className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech Jobs <span className="font-normal text-slate-500 dark:text-slate-400">— Career Opportunities</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Roles, opportunities, and useful career information for people growing in technology.
              </div>
            </div>
          </Link>

          {/* Pillar 5: Build With Tech (Services) */}
          <Link
            to="/services"
            className="group flex items-start gap-4 p-4.5 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Wrench className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Build Services <span className="font-normal text-slate-500 dark:text-slate-400">— Software for Teams</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Custom apps, internal tools, automation, and technical guidance for businesses and product teams.
              </div>
            </div>
          </Link>

          {/* Pillar 6: Tech News & Frontier Updates */}
          <Link
            to="/news"
            className="group flex items-start gap-4 p-4.5 rounded-2xl bg-white dark:bg-slate-800/80 hover:bg-blue-50/70 dark:hover:bg-slate-800 border border-slate-200/80 dark:border-slate-700/80 transition-all shadow-xs hover:shadow-md hover:border-blue-300 dark:hover:border-blue-700"
          >
            <div className="w-12 h-12 rounded-xl border-2 border-blue-600 bg-blue-50 dark:bg-slate-900 flex items-center justify-center text-blue-600 dark:text-blue-400 shrink-0 group-hover:scale-110 transition-transform shadow-xs">
              <Newspaper className="w-6 h-6" />
            </div>
            <div>
              <div className="text-base font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                Tech News <span className="font-normal text-slate-500 dark:text-slate-400">— Industry Notes</span>
              </div>
              <div className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-normal">
                Important releases, useful tools, and technology news explained with practical context.
              </div>
            </div>
          </Link>

        </div>

        {/* CTA Bar */}
        <div className="pt-6 border-t border-slate-200/80 dark:border-slate-800 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 bg-slate-50/80 dark:bg-slate-800/40 p-5 rounded-2xl border border-slate-200/60 dark:border-slate-800">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
              <p className="text-sm font-bold text-slate-900 dark:text-white">
                Building a product, exploring AI, or looking for your next learning step?
              </p>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 pl-6">
              Tell us what you are working on and where you need help.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full md:w-auto">
            <Link
              to="/about"
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 font-extrabold text-xs transition-all text-center"
            >
              <Globe className="w-4 h-4 text-blue-600" />
              <span>About Us & Careers</span>
            </Link>

            <button
              onClick={onOpenConsultation}
              className="flex-1 md:flex-none inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-600/25 hover:shadow-blue-600/40 transition-all cursor-pointer text-center"
            >
              <Briefcase className="w-4 h-4" />
              <span>Book Consultation</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

