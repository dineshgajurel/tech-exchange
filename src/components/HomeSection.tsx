import React from 'react';
import { HeroReferenceBanner } from './HeroReferenceBanner';
import { ServicesSection } from './ServicesSection';
import { PodcastSection } from './PodcastSection';
import { CommunityTeaser } from './CommunityTeaser';
import { CoursesSection } from './CoursesSection';
import { TutorialsSection } from './TutorialsSection';
import { ComingSoon } from './ComingSoon';
import { SectionTab } from '../types';
import { IS_PRODUCTION_READY } from '../config';

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

      {/* Services & Consultation — always live */}
      <ServicesSection onOpenConsultation={onOpenConsultation} />

      {IS_PRODUCTION_READY ? (
        <>
          <PodcastSection />

          <CommunityTeaser
            onOpenLounge={onOpenLounge}
            onOpenForum={() => onSelectTab('forum')}
          />

          <CoursesSection />
          <TutorialsSection />
        </>
      ) : (
        <>
          {/* Community branding block — visible for initial brand presence */}
          <CommunityTeaser
            onOpenLounge={onOpenLounge}
            onOpenForum={() => onSelectTab('forum')}
            comingSoon
          />

          <ComingSoon />
        </>
      )}
    </>
  );
};
