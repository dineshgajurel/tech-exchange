import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Routes, Route, useLocation, useNavigate, Navigate } from 'react-router-dom';
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
import { IS_PRODUCTION_READY } from './config';
import { ComingSoon } from './components/ComingSoon';
import { SEO } from './components/SEO';

export function App() {
  const { darkMode, toggleDarkMode } = useDarkMode();
  const { pathname, hash } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    return () => {
      window.history.scrollRestoration = 'auto';
    };
  }, []);

  useLayoutEffect(() => {
    if (hash) {
      const targetId = decodeURIComponent(hash.slice(1));
      requestAnimationFrame(() => {
        document.getElementById(targetId)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
      return;
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname, hash]);

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
  const [selectedConsultationService, setSelectedConsultationService] = useState<string | undefined>();
  const [isLoungeOpen, setIsLoungeOpen] = useState(false);
  const [isCreatePostOpen, setIsCreatePostOpen] = useState(false);

  const handleOpenConsultation = (service?: string) => {
    setSelectedConsultationService(service);
    setIsConsultationOpen(true);
  };

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
      <SEO />
      {/* Header Navigation */}
      <Header
        onSelectTab={handleSelectTab}
        onOpenConsultation={handleOpenConsultation}
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
                onOpenConsultation={handleOpenConsultation}
                onOpenLounge={() => setIsLoungeOpen(true)}
              />
            }
          />
          <Route path="/podcast" element={IS_PRODUCTION_READY ? <PodcastSection pageHeading /> : <ComingSoon sectionName="Tech Talk" pageHeading />} />
          <Route path="/tutorials" element={IS_PRODUCTION_READY ? <TutorialsSection pageHeading /> : <ComingSoon sectionName="Tech Explained" pageHeading />} />
          <Route path="/courses" element={IS_PRODUCTION_READY ? <CoursesSection pageHeading /> : <ComingSoon sectionName="Courses" pageHeading />} />
          <Route path="/services" element={<ServicesSection onOpenConsultation={handleOpenConsultation} pageHeading />} />
          <Route path="/portfolio" element={IS_PRODUCTION_READY ? <PortfolioSection onOpenConsultation={() => setIsConsultationOpen(true)} /> : <ComingSoon sectionName="Build Showcase" pageHeading />} />
          <Route path="/news" element={IS_PRODUCTION_READY ? <NewsSection /> : <ComingSoon sectionName="Tech News" pageHeading />} />
          <Route path="/jobs" element={IS_PRODUCTION_READY ? <JobsSection jobs={jobs} onAddJob={handleAddJob} /> : <ComingSoon sectionName="Tech Jobs" pageHeading />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/privacy" element={<PrivacyPolicySection />} />
          <Route path="/terms" element={<TermsOfServiceSection />} />
          <Route
            path="/forum"
            element={
              IS_PRODUCTION_READY ? (
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
              ) : (
                <ComingSoon sectionName="Community Forum" pageHeading />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      {/* Global Modals */}
      <ConsultationModal
        isOpen={isConsultationOpen}
        onClose={() => setIsConsultationOpen(false)}
        selectedService={selectedConsultationService}
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
