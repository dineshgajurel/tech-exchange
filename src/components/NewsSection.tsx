import React, { useState } from 'react';
import { NEWS_ITEMS } from '../data/initialData';
import { Newspaper, Send, Sparkles, ExternalLink, Calendar, CheckCircle, RefreshCw, Search, Zap, Clock, Tag } from 'lucide-react';
import { NewsItem } from '../types';

type CategoryFilter = 'All' | 'Nepal Tech Scene' | 'AI & Frontier Models' | 'Web & Mobile' | 'Systems & Cloud' | 'DevOps & Security';

export const NewsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  const categories: CategoryFilter[] = [
    'All',
    'Nepal Tech Scene',
    'AI & Frontier Models',
    'Web & Mobile',
    'Systems & Cloud',
    'DevOps & Security'
  ];

  const filteredNews = NEWS_ITEMS.filter((item) => {
    const matchesCategory = selectedCategory === 'All' || item.category === selectedCategory;
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.tags && item.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800">
          <Zap className="w-3.5 h-3.5 text-blue-600" />
          <span>Tech News Hub</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Latest Tech News
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Coverage on AI breakthroughs, framework releases, and Nepal tech ecosystem stories.
        </p>
      </div>

      {/* Filter & Search Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-6">
        
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                selectedCategory === cat
                  ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                  : 'bg-white dark:bg-slate-850 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200/60 dark:border-slate-750'
              }`}
            >
              {cat === 'Nepal Tech Scene' ? '🇳🇵 Nepal Tech' : cat}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="relative min-w-[240px]">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search tech news..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-750 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500/50"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* News Feed List */}
        <div className="lg:col-span-2 space-y-4">
          {filteredNews.length === 0 ? (
            <div className="p-12 text-center bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800">
              <Newspaper className="w-10 h-10 text-slate-400 mx-auto mb-3" />
              <div className="font-heading font-bold text-slate-800 dark:text-slate-200 text-sm">No news articles found</div>
              <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Try adjusting your category filter or search query.</div>
            </div>
          ) : (
            filteredNews.map((item) => (
              <article
                key={item.id}
                className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-400 dark:hover:border-blue-600 transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                    <div className="flex items-center gap-2">
                      {item.isBreaking && (
                        <span className="px-2.5 py-0.5 rounded-md text-[10px] font-black bg-gradient-to-r from-red-600 to-rose-600 text-white shadow-sm uppercase tracking-wider animate-pulse">
                          ⚡ BREAKING
                        </span>
                      )}
                      <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                        {item.category}
                      </span>
                    </div>

                    <div className="flex items-center gap-3 text-xs text-slate-400 font-mono">
                      <span className="flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400">
                        <Clock className="w-3.5 h-3.5" />
                        {item.timeAgo}
                      </span>
                      <span>•</span>
                      <span>{item.date}</span>
                    </div>
                  </div>

                  <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-4">
                    {item.summary}
                  </p>

                  {item.tags && item.tags.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {item.tags.map((tag, idx) => (
                        <span key={idx} className="text-[11px] font-medium text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-2 py-0.5 rounded-md">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                  <span className="text-slate-500 dark:text-slate-400 font-medium">Source: {item.source}</span>
                  <a
                    href={item.link}
                    className="flex items-center gap-1 font-bold text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    <span>Read Article</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </article>
            ))
          )}
        </div>

        {/* Newsletter & Tech Digest Side Box */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-850 dark:to-slate-900 rounded-3xl p-6 border border-blue-100 dark:border-slate-800 h-fit space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>

          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
            Tech Exchange Newsletter
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Get concise summaries of tech news, podcasts, and developer articles delivered to your inbox.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer transition-all"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Subscribe Free</span>
              </button>
            </form>
          ) : (
            <div className="p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-xs text-emerald-800 dark:text-emerald-300 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>Subscribed successfully! Welcome to Tech Exchange Digest.</span>
            </div>
          )}

          <div className="text-[11px] text-slate-400 text-center">
            No spam. Unsubscribe anytime with 1-click.
          </div>
        </div>

      </div>

    </section>
  );
};
