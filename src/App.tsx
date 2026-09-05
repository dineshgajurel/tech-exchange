import React, { useState } from 'react';
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom';
import { Header } from './components/Header';
import { HomeSection } from './components/HomeSection';
import { PodcastSection } from './components/PodcastSection';
import { TutorialsSection } from './components/TutorialsSection';
import { CoursesSection } from './components/CoursesSection';
import { ServicesSection } from './components/ServicesSection';
import { PortfolioSection } from './components/PortfolioSection';
import { NewsSection } from './components/NewsSection';
import { JobsSection } from './components/JobsSection';
import { AboutSection } from './components/AboutSection';
import { ForumSection } from './components/ForumSection';
import { PrivacyPolicySection } from './components/PrivacyPolicySection';
import { TermsOfServiceSection } from './components/TermsOfServiceSection';
import { Footer } from './components/Footer';

import { ConsultationModal } from './components/ConsultationModal';
import { CommunityLoungeModal } from './components/CommunityLoungeModal';
import { CreatePostModal } from './components/CreatePostModal';

import { SectionTab, LoungeMessage, JobListing } from './types';
import { INITIAL_LOUNGE_MESSAGES, INITIAL_JOBS } from './data/initialData';
import { useDarkMode } from './hooks/useDarkMode';
import { useForumPosts } from './hooks/useForumPosts';

export function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const navigate = useNavigate();

  const handleSelectTab = (tab: SectionTab) => {
    const path = tab === 'home' ? '/' : `/${tab}`;
    navigate(path);
  };

  const {
    filteredPosts,
    postCounts,
    activeChannel,
    setActiveChannel,
    searchQuery,
    setSearchQuery,
    selectedTag,
    setSelectedTag,
    sortBy,
    setSortBy,
    handleUpvote,
    handleAddComment,
    handleCreatePost,
  } = useForumPosts();

  const [loungeMessages, setLoungeMessages] = useState<LoungeMessage[]>(INITIAL_LOUNGE_MESSAGES);
  const [jobs, setJobs] = useState<JobListing[]>(INITIAL_JOBS);

  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [isLoungeOpen, setIsLoungeOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const handleAddLoungeMessage = (msg: Omit<LoungeMessage, 'id' | 'likes' | 'timestamp'>) => {
    const newMsg: LoungeMessage = {
      ...msg,
      id: `m-${Date.now()}`,
      timestamp: 'Just now',
      likes: 1,
    };
    setLoungeMessages([newMsg, ...loungeMessages]);
  };

  const handleAddJob = (newJobData: Omit<JobListing, 'id' | 'postedDate'>) => {
    const created: JobListing = {
      ...newJobData,
      id: `job-${Date.now()}`,
      postedDate: 'Just now',
    };
    setJobs([created, ...jobs]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors">
      {/* Header Navigation */}
      <Header
        onSelectTab={handleSelectTab}
        onOpenConsultation={() => setIsConsultationOpen(true)}
        darkMode={darkMode}
        onToggleDarkMode={toggleDarkMode}
      />

      {/* Main Content Router */}
      <main className="flex-1">
        <Routes>
          <Route
            path="/"
            element={
              <HomeSection
                onSelectTab={handleSelectTab}
                onOpenConsultation={() => setIsConsultationOpen(true)}
                onOpenLounge={() => setIsLoungeOpen(true)}
              />
            }
          />
          <Route path="/podcast" element={<PodcastSection />} />
          <Route path="/tutorials" element={<TutorialsSection />} />
          <Route path="/courses" element={<CoursesSection />} />
          <Route path="/services" element={<ServicesSection onOpenConsultation={() => setIsConsultationOpen(true)} />} />
          <Route path="/portfolio" element={<PortfolioSection onOpenConsultation={() => setIsConsultationOpen(true)} />} />
          <Route path="/news" element={<NewsSection />} />
          <Route path="/jobs" element={<JobsSection jobs={jobs} onAddJob={handleAddJob} />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/privacy" element={<PrivacyPolicySection />} />
          <Route path="/terms" element={<TermsOfServiceSection />} />
          <Route
            path="/forum"
            element={
              <ForumSection
                filteredPosts={filteredPosts}
                activeChannel={activeChannel}
                onSelectChannel={setActiveChannel}
                postCounts={postCounts}
                searchQuery={searchQuery}
                onSearchQueryChange={setSearchQuery}
                sortBy={sortBy}
                onSortByChange={setSortBy}
                selectedTag={selectedTag}
                onSelectTag={setSelectedTag}
                onUpvote={handleUpvote}
                onAddComment={handleAddComment}
                onOpenLounge={() => setIsLoungeOpen(true)}
                onOpenCreatePost={() => setIsCreatePostOpen(true)}
              />
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
      />

      <CommunityLoungeModal
        isOpen={isLoungeOpen}
        onClose={() => setIsLoungeOpen(false)}
        messages={loungeMessages}
        onAddMessage={handleAddLoungeMessage}
      />

      <CreatePostModal
        isOpen={isCreatePostOpen}
        onClose={() => setIsCreatePostOpen(false)}
        onSubmitPost={handleCreatePost}
        defaultChannelId={activeChannel}
      />

      {/* Footer */}
      <Footer
        onSelectTab={handleSelectTab}
        onSelectChannel={setActiveChannel}
        onOpenLounge={() => setIsLoungeOpen(true)}
      />
    </div>
  );
}

export default App;
