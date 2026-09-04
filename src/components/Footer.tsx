import React from 'react';
import { Rocket, Heart, Globe, Github, Twitter, Rss } from 'lucide-react';
import { ChannelId } from '../types';

interface FooterProps {
  onSelectChannel: (channel: ChannelId | 'all') => void;
  onOpenLounge: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectChannel, onOpenLounge }) => {
  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors pt-12 pb-16">
      
      {/* Decorative Dot Grid in Corner */}
      <div className="absolute top-4 left-6 w-24 h-24 bg-dot-pattern-light opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-xl bg-blue-600 flex items-center justify-center text-white shadow-md shadow-blue-500/20">
                <Rocket className="w-5 h-5" />
              </div>
              <div className="font-heading text-2xl font-black text-slate-900 dark:text-white">
                <span className="text-blue-600">Tech </span>Exchange
              </div>
            </div>

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md leading-relaxed">
              Tech chats were scattered everywhere — different servers, different groups. So here's one place for it.
            </p>

            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Nothing fancy. Just people who love tech, talking about tech.
            </p>
          </div>

          {/* Col 2: Navigation Channels */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Explore Channels
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <button onClick={() => onSelectChannel('tech-talk')} className="hover:text-blue-600 cursor-pointer">💬 Tech Talk</button>
              </li>
              <li>
                <button onClick={() => onSelectChannel('tech-explained')} className="hover:text-blue-600 cursor-pointer">🧠 Tech Explained</button>
              </li>
              <li>
                <button onClick={() => onSelectChannel('build-with-tech')} className="hover:text-blue-600 cursor-pointer">🛠️ Build With Tech</button>
              </li>
              <li>
                <button onClick={() => onSelectChannel('whats-happening')} className="hover:text-blue-600 cursor-pointer">📰 What's Happening</button>
              </li>
            </ul>
          </div>

          {/* Col 3: Community & Social */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Community
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400 mb-4">
              <li>
                <button onClick={onOpenLounge} className="hover:text-blue-600 cursor-pointer">Say Hi in Lounge 👋</button>
              </li>
              <li><a href="#rules" className="hover:text-blue-600">Community Guidelines</a></li>
              <li><a href="#rss" className="hover:text-blue-600 flex items-center gap-1"><Rss className="w-3 h-3" /> RSS Feed</a></li>
            </ul>

            <div className="flex items-center gap-3 text-slate-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="hover:text-blue-500">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://techexchange.com" className="hover:text-blue-600">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <div>
            © {new Date().getFullYear()} TechExchange.com — All rights reserved.
          </div>
          <div className="flex items-center gap-1">
            <span>Built with passion for developers & tech enthusiasts worldwide</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
