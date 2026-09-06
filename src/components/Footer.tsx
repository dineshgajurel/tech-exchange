import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Heart, Globe, Github, Linkedin, Youtube } from 'lucide-react';
import { TechExchangeLogo } from './TechExchangeLogo';
import { SectionTab, ChannelId } from '../types';

interface FooterProps {
  onSelectTab?: (tab: SectionTab) => void;
  onSelectChannel?: (channel: ChannelId | 'all') => void;
  onOpenLounge?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectTab,
  onSelectChannel,
  onOpenLounge,
}) => {
  const navigate = useNavigate();

  const handleChannelClick = (channel: ChannelId) => {
    if (onSelectChannel) onSelectChannel(channel);
    if (onSelectTab) onSelectTab('forum');
    navigate('/forum');
  };

  return (
    <footer className="relative overflow-hidden bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 transition-colors pt-12 pb-16 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand & Tagline */}
          <div className="space-y-4">
            <TechExchangeLogo size="md" showTagline={true} />

            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Tech chats were scattered everywhere — different servers, different groups. So here's one place for it.
            </p>

            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Talk • Learn • Build. Simple as that.
            </p>
          </div>

          {/* Col 2: Talk & Learn */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Talk & Learn
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/podcast" onClick={() => onSelectTab && onSelectTab('podcast')} className="hover:text-blue-600 cursor-pointer">🎙️ Tech Talk (Podcast)</Link>
              </li>
              <li>
                <Link to="/forum" onClick={() => onSelectTab && onSelectTab('forum')} className="hover:text-blue-600 cursor-pointer">💬 Community Forum</Link>
              </li>
              <li>
                <Link to="/tutorials" onClick={() => onSelectTab && onSelectTab('tutorials')} className="hover:text-blue-600 cursor-pointer">📚 Tech Explained</Link>
              </li>
              <li>
                <Link to="/courses" onClick={() => onSelectTab && onSelectTab('courses')} className="hover:text-blue-600 cursor-pointer">🎓 Courses</Link>
              </li>
              <li>
                <Link to="/news" onClick={() => onSelectTab && onSelectTab('news')} className="hover:text-blue-600 cursor-pointer">📰 Tech News</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Build & Hire */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Build & Hire
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400">
              <li>
                <Link to="/portfolio" onClick={() => onSelectTab && onSelectTab('portfolio')} className="hover:text-blue-600 cursor-pointer">🚀 Build Showcase</Link>
              </li>
              <li>
                <Link to="/services" onClick={() => onSelectTab && onSelectTab('services')} className="hover:text-blue-600 cursor-pointer">⚡ Services & Consult</Link>
              </li>
              <li>
                <Link to="/jobs" onClick={() => onSelectTab && onSelectTab('jobs')} className="hover:text-blue-600 cursor-pointer">💼 Tech Jobs</Link>
              </li>
              <li>
                <Link to="/about" onClick={() => onSelectTab && onSelectTab('about')} className="hover:text-blue-600 cursor-pointer">🏢 About Us</Link>
              </li>
              <li>
                <Link to="/privacy" onClick={() => onSelectTab && onSelectTab('privacy')} className="hover:text-blue-600 cursor-pointer">🔒 Privacy Policy</Link>
              </li>
              <li>
                <Link to="/terms" onClick={() => onSelectTab && onSelectTab('terms')} className="hover:text-blue-600 cursor-pointer">⚖️ Terms of Service</Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Community Channels & Social */}
          <div>
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Community Channels
            </h4>
            <ul className="space-y-2 text-xs font-medium text-slate-600 dark:text-slate-400 mb-4">
              <li>
                <button onClick={() => handleChannelClick('tech-talk')} className="hover:text-blue-600 cursor-pointer">💬 Tech Talk</button>
              </li>
              <li>
                <button onClick={() => handleChannelClick('tech-explained')} className="hover:text-blue-600 cursor-pointer">🧠 Tech Explained</button>
              </li>
              <li>
                <button onClick={() => handleChannelClick('build-with-tech')} className="hover:text-blue-600 cursor-pointer">🛠️ Build With Tech</button>
              </li>
              <li>
                <button onClick={() => handleChannelClick('whats-happening')} className="hover:text-blue-600 cursor-pointer">📰 What's Happening</button>
              </li>
              {onOpenLounge && (
                <li>
                  <button onClick={onOpenLounge} className="hover:text-blue-600 cursor-pointer text-amber-600 dark:text-amber-400 font-bold">Say Hi in Lounge 👋</button>
                </li>
              )}
            </ul>

            <div className="flex items-center gap-3 text-slate-400 mt-4">
              <a href="https://github.com/dineshgajurel" target="_blank" rel="noreferrer" className="hover:text-slate-900 dark:hover:text-white transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4" />
              </a>
              <a href="https://www.linkedin.com/in/dinesh-gajurel/" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="https://www.youtube.com/@techexchange" target="_blank" rel="noreferrer" className="hover:text-red-500 transition-colors" aria-label="YouTube">
                <Youtube className="w-4 h-4" />
              </a>
              <a href="https://www.techexchange.dev" target="_blank" rel="noreferrer" className="hover:text-blue-600 transition-colors" aria-label="Website">
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-4">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <span>© {new Date().getFullYear()} techexchange.dev — All rights reserved.</span>
            <Link to="/privacy" onClick={() => onSelectTab && onSelectTab('privacy')} className="hover:text-blue-600 transition-colors">Privacy Policy</Link>
            <span>•</span>
            <Link to="/terms" onClick={() => onSelectTab && onSelectTab('terms')} className="hover:text-blue-600 transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center gap-1.5 font-medium">
            <span>Made with</span>
            <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500 inline-block animate-pulse" />
            <span>for Tech Lovers & Developers Worldwide</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
