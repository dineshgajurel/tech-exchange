import React from 'react';
import { SERVICES } from '../data/initialData';
import { Code, Cpu, Users, CheckCircle, ArrowRight, Sparkles, MessageSquare } from 'lucide-react';

interface ServicesSectionProps {
  onOpenConsultation: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenConsultation }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code': return <Code className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      case 'Users': return <Users className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
      default: return <Sparkles className="w-6 h-6 text-blue-600 dark:text-blue-400" />;
    }
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Title */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-3 border border-blue-200 dark:border-blue-800">
          <Sparkles className="w-3.5 h-3.5 text-blue-600" />
           <span>Engineering & Advisory — Nepal to Global</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          We Build Software. We Solve Hard Problems.
        </h2>
        <p className="text-base text-slate-600 dark:text-slate-400 mt-2 leading-relaxed">
          High-performance web apps, AI automation, and expert technical guidance — delivered by Nepal's top senior engineering talent to founders worldwide.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {SERVICES.map((srv) => (
          <div
            key={srv.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-blue-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between group relative overflow-hidden"
          >
            {/* Corner Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
              {srv.badge}
            </div>

            <div>
              <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {getIcon(srv.icon)}
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2">
                {srv.title}
              </h3>

              <p className="text-xs font-semibold text-blue-600 dark:text-blue-400 mb-3">
                {srv.subtitle}
              </p>

              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {srv.description}
              </p>

              <div className="space-y-2 mb-6">
                <div className="text-[11px] font-bold text-slate-900 dark:text-white uppercase tracking-wider mb-2">
                  What you get:
                </div>
                {srv.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs text-slate-700 dark:text-slate-300">
                    <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={onOpenConsultation}
              className="w-full py-3 rounded-xl bg-slate-900 hover:bg-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all cursor-pointer shadow-xs"
            >
              <span>Get Started</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

          </div>
        ))}
      </div>

      {/* Collaboration Callout Box */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="space-y-2 text-center md:text-left">
          <h3 className="font-heading text-2xl sm:text-3xl font-extrabold">
            Ready to turn your idea into production software?
          </h3>
          <p className="text-sm text-blue-100 max-w-xl">
            Whether it's a web app MVP, an AI automation pipeline, a codebase audit, or a podcast collaboration — we'd love to hear what you're building.
          </p>
        </div>

        <button
          onClick={onOpenConsultation}
          className="px-8 py-4 rounded-2xl bg-white text-blue-600 hover:bg-slate-100 font-black text-sm shadow-lg cursor-pointer transform hover:scale-105 transition-all shrink-0"
        >
          Let's Talk 👋
        </button>
      </div>

    </section>
  );
};
