import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroReferenceBanner } from './components/HeroReferenceBanner';
import { PodcastSection } from './components/PodcastSection';
import { TutorialsSection } from './components/TutorialsSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { NewsSection } from './components/NewsSection';
import { JobsSection } from './components/JobsSection';
import { AboutSection } from './components/AboutSection';
import { ConsultationModal } from './components/ConsultationModal';

// Forum Submodule Components
import { ChannelCards } from './components/ChannelCards';
import { PostCard } from './components/PostCard';
import { CommunityLoungeModal } from './components/CommunityLoungeModal';
import { CreatePostModal } from './components/CreatePostModal';

import { TechExchangeLogo } from './components/TechExchangeLogo';
import { SectionTab, ChannelId, Post, LoungeMessage, JobListing } from './types';
import { INITIAL_POSTS, INITIAL_LOUNGE_MESSAGES, CHANNELS, INITIAL_JOBS } from './data/initialData';
import { Flame, Clock, TrendingUp, Search, Plus, MessageSquareHeart, Sparkles, ArrowRight, MessageSquare, Heart } from 'lucide-react';

export function App() {
  const [activeTab, setActiveTab] = useState<SectionTab>('home');
  const [activeChannel, setActiveChannel] = useState<ChannelId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'trending' | 'latest' | 'top'>('trending');
  
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [loungeMessages, setLoungeMessages] = useState<LoungeMessage[]>(INITIAL_LOUNGE_MESSAGES);
  const [jobs, setJobs] = useState<JobListing[]>(INITIAL_JOBS);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isLoungeOpen, setIsLoungeOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  // Dark mode with localStorage persistence
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('techexchange-theme');
    if (saved) return saved === 'dark';
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    const root = document.documentElement;
    if (darkMode) {
      root.classList.add('dark');
      document.body.classList.add('dark');
      localStorage.setItem('techexchange-theme', 'dark');
    } else {
      root.classList.remove('dark');
      document.body.classList.remove('dark');
      localStorage.setItem('techexchange-theme', 'light');
    }
  }, [darkMode]);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  // Upvote post handler
  const handleUpvote = (postId: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id === postId) {
          const isCurrentlyUpvoted = p.isUpvoted;
          return {
            ...p,
            upvotes: isCurrentlyUpvoted ? p.upvotes - 1 : p.upvotes + 1,
            isUpvoted: !isCurrentlyUpvoted,
          };
        }
        return p;
      })
    );
  };

  // Add comment handler
  const handleAddComment = (postId: string, text: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id === postId) {
          const newComment = {
            id: `c-${Date.now()}`,
            author: 'You',
            avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
            timeAgo: 'Just now',
            content: text,
            upvotes: 1,
          };
          return {
            ...p,
            commentsCount: p.commentsCount + 1,
            commentsList: [newComment, ...p.commentsList],
          };
        }
        return p;
      })
    );
  };

  // Create new post
  const handleCreatePost = (newPostData: Omit<Post, 'id' | 'timeAgo' | 'upvotes' | 'commentsCount' | 'commentsList'>) => {
    const created: Post = {
      ...newPostData,
      id: `post-${Date.now()}`,
      timeAgo: 'Just now',
      upvotes: 1,
      isUpvoted: true,
      commentsCount: 0,
      commentsList: [],
    };
    setPosts([created, ...posts]);
  };

  // Add lounge greeting
  const handleAddLoungeMessage = (msg: Omit<LoungeMessage, 'id' | 'likes' | 'timestamp'>) => {
    const newMsg: LoungeMessage = {
      ...msg,
      id: `m-${Date.now()}`,
      timestamp: 'Just now',
      likes: 1,
    };
    setLoungeMessages([newMsg, ...loungeMessages]);
  };

  // Add job posting handler
  const handleAddJob = (newJobData: Omit<JobListing, 'id' | 'postedDate'>) => {
    const created: JobListing = {
      ...newJobData,
      id: `job-${Date.now()}`,
      postedDate: 'Just now',
    };
    setJobs([created, ...jobs]);
  };

  // Filter posts logic for Forum
  let filteredPosts = posts.filter((p) => {
    if (activeChannel !== 'all' && p.channelId !== activeChannel) {
      return false;
    }
    if (selectedTag && !p.tags.includes(selectedTag)) {
      return false;
    }
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchContent = p.content.toLowerCase().includes(q);
      const matchAuthor = p.author.name.toLowerCase().includes(q) || p.author.handle.toLowerCase().includes(q);
      const matchTags = p.tags.some((t) => t.toLowerCase().includes(q));
      return matchTitle || matchContent || matchAuthor || matchTags;
    }
    return true;
  });

  filteredPosts = [...filteredPosts].sort((a, b) => {
    if (sortBy === 'top') return b.upvotes - a.upvotes;
    if (sortBy === 'latest') return b.id.localeCompare(a.id);
    return b.upvotes + b.commentsCount * 2 - (a.upvotes + a.commentsCount * 2);
  });

  const postCounts = CHANNELS.reduce((acc: Record<string, number>, ch: { id: string }) => {
    acc[ch.id] = posts.filter((p) => p.channelId === ch.id).length;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      
      {/* Header Navigation */}
      <Header
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      {/* RENDER ACTIVE TAB CONTENT */}
      {activeTab === 'home' && (
        <>
          <HeroReferenceBanner
            onSelectTab={setActiveTab}
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

          <ServicesSection
            onOpenConsultation={() => setIsConsultationOpen(true)}
          />

          <PodcastSection />

          {/* Quick Submodule Teaser for Community Forum */}
          <section className="py-12 bg-white dark:bg-slate-900 border-y border-slate-200/80 dark:border-slate-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800">
                    <MessageSquare className="w-3.5 h-3.5 text-blue-600" />
                    <span>Tech Exchange Community</span>
                  </div>
                  <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    Community Forum & Channel Discussions
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
                    Join open tech discussions, share your late-night builds, and connect with developers worldwide.
                  </p>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  <button
                    onClick={() => setIsLoungeOpen(true)}
                    className="px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 text-xs font-bold hover:bg-amber-100 cursor-pointer"
                  >
                    Come say hi. 👋
                  </button>
                  <button
                    onClick={() => setActiveTab('forum')}
                    className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 cursor-pointer"
                  >
                    Open Community Forum →
                  </button>
                </div>
              </div>
            </div>
          </section>

          <TutorialsSection />
        </>
      )}

      {activeTab === 'podcast' && <PodcastSection />}

      {activeTab === 'tutorials' && <TutorialsSection />}

      {activeTab === 'services' && (
        <ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />
      )}

      {activeTab === 'portfolio' && (
        <PortfolioSection onOpenConsultation={() => setIsConsultationOpen(true)} />
      )}

      {activeTab === 'news' && <NewsSection />}

      {activeTab === 'jobs' && <JobsSection jobs={jobs} onAddJob={handleAddJob} />}

      {activeTab === 'about' && <AboutSection />}

      {/* COMMUNITY FORUM TAB */}
      {activeTab === 'forum' && (
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
          
          {/* Forum Title Banner */}
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl p-6 sm:p-8 mb-8 shadow-lg flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-white/20 text-white">
                Tech Exchange Community Hub
              </span>
              <h2 className="font-heading text-2xl sm:text-3xl font-black mt-2">
                Community Forum & Channel Discussions
              </h2>
              <p className="text-xs sm:text-sm text-blue-100 mt-1">
                Open channels for Tech Talk, Tech Explained, Build With Tech, & What's Happening.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsLoungeOpen(true)}
                className="px-4 py-2.5 rounded-xl bg-amber-400 text-slate-900 font-extrabold text-xs shadow-sm hover:bg-amber-300 cursor-pointer"
              >
                Say Hi 👋
              </button>
              <button
                onClick={() => setIsCreatePostOpen(true)}
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white text-blue-700 font-extrabold text-xs shadow-sm hover:bg-blue-50 cursor-pointer"
              >
                <Plus className="w-4 h-4" />
                <span>New Topic</span>
              </button>
            </div>
          </div>

          {/* Channel Cards */}
          <ChannelCards
            activeChannel={activeChannel}
            onSelectChannel={setActiveChannel}
            postCounts={postCounts}
          />

          {/* Search & Sort Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 my-6 pb-4 border-b border-slate-200/80 dark:border-slate-800">
            <div className="relative w-full sm:w-72">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
              <input
                type="text"
                placeholder="Search forum chats..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
              />
            </div>

            <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-slate-800/80 p-1 rounded-xl text-xs font-medium">
              <button
                onClick={() => setSortBy('trending')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  sortBy === 'trending' ? 'bg-white dark:bg-slate-900 text-blue-600 font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Flame className="w-3.5 h-3.5" />
                <span>Trending</span>
              </button>
              <button
                onClick={() => setSortBy('latest')}
                className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
                  sortBy === 'latest' ? 'bg-white dark:bg-slate-900 text-blue-600 font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                <span>Latest</span>
              </button>
            </div>
          </div>

          {/* Post Feed */}
          <div className="space-y-4 max-w-4xl mx-auto">
            {filteredPosts.map((post) => (
              <PostCard
                key={post.id}
                post={post}
                onUpvote={handleUpvote}
                onAddComment={handleAddComment}
                onTagClick={(tag) => setSelectedTag(tag === selectedTag ? null : tag)}
              />
            ))}
          </div>

        </main>
      )}

      {/* Consultation & Service Booking Modal */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      {/* Community Lounge Guestbook Modal */}
      <CommunityLoungeModal
        isOpen={isLoungeOpen}
        onClose={() => setIsLoungeOpen(false)}
        messages={loungeMessages}
        onAddMessage={handleAddLoungeMessage}
      />

      {/* Create Post Modal */}
      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onSubmitPost={handleCreatePost}
        defaultChannelId={activeChannel}
      />

      {/* Footer */}
      <footer className="bg-white dark:bg-slate-900 border-t border-slate-200/80 dark:border-slate-800 py-12 mt-16 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-slate-500">
          <div className="space-y-2">
            <TechExchangeLogo size="sm" showTagline={true} />
            <p className="text-slate-500 dark:text-slate-400">
              © {new Date().getFullYear()} TechExchange.com — All rights reserved.
            </p>
            <p className="text-[11px] text-slate-400 flex items-center gap-1 font-medium">
              Made with <Heart className="w-3 h-3 text-red-500 fill-red-500 inline-block animate-pulse" /> for Tech Lovers & Developers Worldwide
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 font-bold text-slate-700 dark:text-slate-300">
            <button onClick={() => setActiveTab('podcast')} className="hover:text-blue-600 cursor-pointer">Podcast</button>
            <button onClick={() => setActiveTab('tutorials')} className="hover:text-blue-600 cursor-pointer">Tutorials</button>
            <button onClick={() => setActiveTab('services')} className="hover:text-blue-600 cursor-pointer">Services</button>
            <button onClick={() => setActiveTab('portfolio')} className="hover:text-blue-600 cursor-pointer">Portfolio</button>
            <button onClick={() => setActiveTab('jobs')} className="hover:text-blue-600 cursor-pointer">Tech Jobs</button>
            <button onClick={() => setActiveTab('about')} className="hover:text-blue-600 cursor-pointer">About Us & Careers</button>
            <button onClick={() => setActiveTab('forum')} className="hover:text-blue-600 cursor-pointer">Community Forum</button>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
