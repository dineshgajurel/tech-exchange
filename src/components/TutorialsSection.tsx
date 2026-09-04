import React, { useState } from 'react';
import { TUTORIALS } from '../data/initialData';
import { BookOpen, Code2, Clock, Sparkles, X, Check, Copy, Share2, ArrowRight, Layers } from 'lucide-react';
import { Tutorial } from '../types';

export const TutorialsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeTutorial, setActiveTutorial] = useState<Tutorial | null>(null);
  const [copied, setCopied] = useState(false);

  const categories = ['All', 'AI & Machine Learning', 'Web Development', 'DevOps & Cloud', 'Systems Architecture'];

  const filteredTutorials = TUTORIALS.filter((t) => {
    if (selectedCategory === 'All') return true;
    return t.category === selectedCategory;
  });

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="py-12 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800">
            <BookOpen className="w-3.5 h-3.5 text-blue-600" />
            <span>Tech Explained — Knowledge Hub</span>
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Tutorials, Guides & Deep Dives
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 max-w-2xl">
            Big technical concepts explained simply. Step-by-step engineering breakdowns, interactive code snippets, and architecture blueprints.
          </p>
        </div>
      </div>

      {/* Category Filter Pills */}
      <div className="flex flex-wrap items-center gap-2 mb-8">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
              selectedCategory === cat
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25 ring-2 ring-blue-600/30'
                : 'bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-300 border border-slate-200/80 dark:border-slate-800 hover:border-blue-300 dark:hover:border-slate-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Tutorials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredTutorials.map((tut) => (
          <article
            key={tut.id}
            className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-300 dark:hover:border-slate-700 hover:shadow-md transition-all flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-3 py-1 rounded-full text-[11px] font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                  {tut.category}
                </span>
                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5 text-blue-500" />{tut.readTime}</span>
                  <span>•</span>
                  <span className="font-semibold text-blue-600 dark:text-blue-400">{tut.difficulty}</span>
                </div>
              </div>

              <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {tut.title}
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                {tut.summary}
              </p>

              {tut.codeSnippet && (
                <div className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 font-mono text-xs">
                  <div className="bg-slate-900 px-3.5 py-1.5 flex items-center justify-between border-b border-slate-800 text-slate-400 text-[11px]">
                    <span className="flex items-center gap-1.5 font-bold text-slate-300">
                      <Code2 className="w-3.5 h-3.5 text-blue-400" />
                      {tut.codeSnippet.language}
                    </span>
                    <span>Code Snippet</span>
                  </div>
                  <pre className="p-3.5 overflow-x-auto leading-relaxed">
                    <code>{tut.codeSnippet.code}</code>
                  </pre>
                </div>
              )}
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
              <div className="flex flex-wrap gap-1">
                {tut.tags.map((t) => (
                  <span key={t} className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 mr-2">
                    {t}
                  </span>
                ))}
              </div>

              <button
                onClick={() => setActiveTutorial(tut)}
                className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 hover:bg-blue-600 hover:text-white text-xs font-bold transition-all cursor-pointer shrink-0"
              >
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

          </article>
        ))}
      </div>

      {/* FULL TUTORIAL READER MODAL */}
      {activeTutorial && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-3xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Top Header */}
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-blue-600 text-white">
                  {activeTutorial.category}
                </span>
                <span className="text-xs text-slate-400">•</span>
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">{activeTutorial.readTime}</span>
              </div>
              
              <button
                onClick={() => setActiveTutorial(null)}
                className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Scrollable Reader Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
              
              <div>
                <h2 className="font-heading text-2xl sm:text-3xl font-black text-slate-900 dark:text-white leading-tight mb-3">
                  {activeTutorial.title}
                </h2>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed italic bg-blue-50/60 dark:bg-blue-950/40 p-4 rounded-2xl border border-blue-100 dark:border-blue-900">
                  "{activeTutorial.summary}"
                </p>
              </div>

              {/* Main Content Body */}
              <div className="text-sm text-slate-800 dark:text-slate-200 leading-relaxed space-y-4 whitespace-pre-line">
                {activeTutorial.content}
              </div>

              {/* Code Snippet with Copy Button */}
              {activeTutorial.codeSnippet && (
                <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 font-mono text-xs shadow-md">
                  <div className="bg-slate-900 px-4 py-2.5 flex items-center justify-between border-b border-slate-800 text-slate-400">
                    <span className="flex items-center gap-2 font-bold text-slate-200">
                      <Code2 className="w-4 h-4 text-blue-400" />
                      {activeTutorial.codeSnippet.language}
                    </span>
                    <button
                      onClick={() => handleCopyCode(activeTutorial.codeSnippet!.code)}
                      className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-sans font-semibold transition-colors cursor-pointer"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                    </button>
                  </div>
                  <pre className="p-4 overflow-x-auto leading-relaxed text-blue-300">
                    <code>{activeTutorial.codeSnippet.code}</code>
                  </pre>
                </div>
              )}

              {/* Tags */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-slate-100 dark:border-slate-800">
                {activeTutorial.tags.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-blue-600 dark:text-blue-400">
                    {t}
                  </span>
                ))}
              </div>

            </div>

            {/* Modal Footer */}
            <div className="p-4 border-t border-slate-100 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/80 flex items-center justify-between">
              <span className="text-xs text-slate-500">Tech Exchange — Tech Explained Series</span>
              <button
                onClick={() => setActiveTutorial(null)}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs cursor-pointer"
              >
                Close Article
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
