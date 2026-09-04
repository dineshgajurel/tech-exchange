import React, { useState } from 'react';
import { NEWS_ITEMS } from '../data/initialData';
import { Newspaper, Send, Sparkles, ExternalLink, Calendar, CheckCircle } from 'lucide-react';

export const NewsSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    setSubscribed(true);
    setEmail('');
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800">
            <Newspaper className="w-3.5 h-3.5 text-blue-600" />
            <span>What's Happening in Tech</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
            Latest Tech News & Trend Updates
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            New tools, frontier model updates, and framework releases all in one spot.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* News Feed Cards */}
        <div className="lg:col-span-2 space-y-4">
          {NEWS_ITEMS.map((item) => (
            <article
              key={item.id}
              className="bg-white dark:bg-slate-900 rounded-3xl p-6 border border-slate-200/80 dark:border-slate-800 shadow-sm hover:border-blue-300 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="px-3 py-0.5 rounded-full text-[11px] font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="font-heading text-lg font-bold text-slate-900 dark:text-white mb-2 leading-snug">
                  {item.title}
                </h3>

                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {item.summary}
                </p>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800 text-xs">
                <span className="text-slate-400 font-medium">Source: {item.source}</span>
                <a
                  href={item.link}
                  className="flex items-center gap-1 font-bold text-blue-600 hover:underline"
                >
                  <span>Read Article</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription Box */}
        <div className="bg-gradient-to-b from-blue-50 to-white dark:from-slate-850 dark:to-slate-900 rounded-3xl p-6 border border-blue-100 dark:border-slate-800 h-fit space-y-4 shadow-sm">
          <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
            <Sparkles className="w-5 h-5" />
          </div>

          <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
            Tech Exchange Digest
          </h3>

          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Get our weekly 2-minute digest of top podcasts, developer tutorials, and software tools delivered straight to your inbox.
          </p>

          {!subscribed ? (
            <form onSubmit={handleSubscribe} className="space-y-2">
              <input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3.5 py-2.5 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
              <button
                type="submit"
                className="w-full py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs flex items-center justify-center gap-2 shadow-md shadow-blue-500/20 cursor-pointer"
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
