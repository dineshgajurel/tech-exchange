import React, { useState } from 'react';
import { Mic, BookOpen, Briefcase, Code, Newspaper, MessageSquare, Sparkles, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { TechExchangeLogo } from './TechExchangeLogo';
import { SectionTab } from '../types';

interface HeaderProps {
  activeTab: SectionTab;
  onSelectTab: (tab: SectionTab) => void;
  onOpenConsultation: () => void;
  darkMode: boolean;
  onToggleDarkMode: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeTab,
  onSelectTab,
  onOpenConsultation,
  darkMode,
  onToggleDarkMode,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems: { id: SectionTab; label: string; icon: React.ReactNode }[] = [
    { id: 'home', label: 'Home', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'podcast', label: 'Tech Talk (Podcast)', icon: <Mic className="w-4 h-4" /> },
    { id: 'tutorials', label: 'Tech Explained', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'services', label: 'Services & Consult', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'portfolio', label: 'Build Showcase', icon: <Code className="w-4 h-4" /> },
    { id: 'news', label: 'Tech News', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'forum', label: 'Community Forum', icon: <MessageSquare className="w-4 h-4" /> },
  ];

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Official Tech Exchange Logo */}
        <button 
          onClick={() => onSelectTab('home')}
          className="text-left cursor-pointer focus:outline-none shrink-0 group hover:opacity-90 transition-opacity"
        >
          <TechExchangeLogo size="md" showTagline={true} />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60">
          {navItems.map((item) => {
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => onSelectTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        {/* Header Right Actions */}
        <div className="hidden sm:flex items-center gap-3">
          
          {/* Dark Mode Switcher */}
          <button
            onClick={onToggleDarkMode}
            className="p-2.5 rounded-full text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
            title="Toggle Theme"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>

          {/* Book Consultation / Collaborate Button */}
          <button
            onClick={onOpenConsultation}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-extrabold bg-blue-600 hover:bg-blue-700 text-white shadow-md shadow-blue-600/25 hover:shadow-lg hover:shadow-blue-600/35 transition-all cursor-pointer transform active:scale-95"
          >
            <span>Collaborate / Consult</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

        </div>

        {/* Mobile Toggle */}
        <div className="flex xl:hidden items-center gap-2">
          <button
            onClick={onToggleDarkMode}
            className="p-2 rounded-full text-slate-600 dark:text-slate-300"
          >
            {darkMode ? <Sun className="w-5 h-5 text-amber-400" /> : <Moon className="w-5 h-5" />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-xl text-slate-700 dark:text-slate-200 bg-slate-100 dark:bg-slate-800"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 px-4 py-4 space-y-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSelectTab(item.id);
                setMobileMenuOpen(false);
              }}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-left ${
                activeTab === item.id
                  ? 'bg-blue-600 text-white'
                  : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              {item.icon}
              <span>{item.label}</span>
            </button>
          ))}
          
          <div className="pt-2">
            <button
              onClick={() => {
                onOpenConsultation();
                setMobileMenuOpen(false);
              }}
              className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-blue-600 text-white font-bold text-sm shadow-md"
            >
              <span>Collaborate & Consult 👋</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
