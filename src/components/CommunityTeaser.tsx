import React from 'react';
import { MessageSquare } from 'lucide-react';

interface CommunityTeaserProps {
  onOpenLounge: () => void;
  onOpenForum: () => void;
}

export const CommunityTeaser: React.FC<CommunityTeaserProps> = ({
  onOpenLounge,
  onOpenForum,
}) => {
  return (
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
              onClick={onOpenLounge}
              className="px-4 py-2.5 rounded-xl bg-amber-50 dark:bg-amber-950 text-amber-800 dark:text-amber-200 border border-amber-200 dark:border-amber-800 text-xs font-bold hover:bg-amber-100 cursor-pointer"
            >
              Come say hi. 👋
            </button>
            <button
              onClick={onOpenForum}
              className="px-6 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-extrabold text-xs shadow-md shadow-blue-500/20 cursor-pointer"
            >
              Open Community Forum →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
