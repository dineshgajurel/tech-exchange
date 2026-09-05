import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Mic, BookOpen, Briefcase, Code, Newspaper, MessageSquare, Sparkles, Sun, Moon, Menu, X, ArrowRight, Building2, Users, Tv, Calendar, Video, GraduationCap } from 'lucide-react';
import { TechExchangeLogo } from './TechExchangeLogo';
import { SectionTab } from '../types';

interface HeaderProps {
  activeTab?: SectionTab;
  onSelectTab?: (tab: SectionTab) => void;
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
  const location = useLocation();
  const navigate = useNavigate();

  const navItems: { id: SectionTab; path: string; label: string; icon: React.ReactNode }[] = [
    { id: 'home', path: '/', label: 'Home', icon: <Sparkles className="w-4 h-4" /> },
    { id: 'podcast', path: '/podcast', label: 'Tech Talk', icon: <Tv className="w-4 h-4" /> },
    { id: 'forum', path: '/forum', label: 'Community Forum', icon: <MessageSquare className="w-4 h-4" /> },
    { id: 'tutorials', path: '/tutorials', label: 'Tech Explained', icon: <BookOpen className="w-4 h-4" /> },
    { id: 'courses', path: '/courses', label: 'Courses', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'news', path: '/news', label: 'Tech News', icon: <Newspaper className="w-4 h-4" /> },
    { id: 'portfolio', path: '/portfolio', label: 'Build Showcase', icon: <Code className="w-4 h-4" /> },
    { id: 'services', path: '/services', label: 'Services & Consult', icon: <Briefcase className="w-4 h-4" /> },
    { id: 'jobs', path: '/jobs', label: 'Tech Jobs', icon: <Building2 className="w-4 h-4" /> },
    { id: 'about', path: '/about', label: 'About Us', icon: <Users className="w-4 h-4" /> },
  ];

  const getItemPath = (item: { id: SectionTab; path: string }) => item.path;

  const isItemActive = (item: { id: SectionTab; path: string }) => {
    if (item.path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(item.path);
  };

  const handleNavClick = (item: { id: SectionTab; path: string }) => {
    if (onSelectTab) onSelectTab(item.id);
    navigate(item.path);
  };

  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 dark:bg-slate-900/90 border-b border-slate-200/80 dark:border-slate-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Official Tech Exchange Logo */}
        <Link
          to="/"
          onClick={() => onSelectTab && onSelectTab('home')}
          className="text-left cursor-pointer focus:outline-none shrink-0 group hover:opacity-90 transition-opacity"
        >
          <TechExchangeLogo size="md" showTagline={true} />
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden xl:flex items-center gap-1 bg-slate-100/80 dark:bg-slate-800/80 p-1.5 rounded-full border border-slate-200/60 dark:border-slate-700/60">
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => onSelectTab && onSelectTab(item.id)}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  active
                    ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/30'
                    : 'text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-slate-700/50'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
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
          {navItems.map((item) => {
            const active = isItemActive(item);
            return (
              <Link
                key={item.id}
                to={item.path}
                onClick={() => {
                  if (onSelectTab) onSelectTab(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-bold text-left ${
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {item.icon}
                <span>{item.label}</span>
              </Link>
            );
          })}
          
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
