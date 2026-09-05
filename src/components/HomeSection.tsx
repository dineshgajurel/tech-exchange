import React from 'react';
import { HeroReferenceBanner } from './HeroReferenceBanner';
import { ServicesSection } from './ServicesSection';
import { PodcastSection } from './PodcastSection';
import { CommunityTeaser } from './CommunityTeaser';
import { CoursesSection } from './CoursesSection';
import { TutorialsSection } from './TutorialsSection';
import { SectionTab } from '../types';

interface HomeSectionProps {
  onSelectTab: (tab: SectionTab) => void;
  onOpenConsultation: () => void;
  onOpenLounge: () => void;
}

export const HomeSection: React.FC<HomeSectionProps> = ({
  onSelectTab,
  onOpenConsultation,
  onOpenLounge,
}) => {
  return (
    <>
      <HeroReferenceBanner
        onSelectTab={onSelectTab}
        onOpenConsultation={onOpenConsultation}
      />

      <ServicesSection onOpenConsultation={onOpenConsultation} />

      <PodcastSection />

      <CommunityTeaser
        onOpenLounge={onOpenLounge}
        onOpenForum={() => onSelectTab('forum')}
      />

      <CoursesSection />
      <TutorialsSection />
    </>
  );
};
