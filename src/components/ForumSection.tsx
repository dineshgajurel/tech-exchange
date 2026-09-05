import React from 'react';
import { ChannelCards } from './ChannelCards';
import { PostCard } from './PostCard';
import { Post, ChannelId } from '../types';
import { Plus, Search, Flame, Clock } from 'lucide-react';

interface ForumSectionProps {
  filteredPosts: Post[];
  activeChannel: ChannelId | 'all';
  onSelectChannel: (channel: ChannelId | 'all') => void;
  postCounts: Record<string, number>;
  searchQuery: string;
  onSearchQueryChange: (query: string) => void;
  sortBy: 'trending' | 'latest' | 'top';
  onSortByChange: (sortBy: 'trending' | 'latest' | 'top') => void;
  selectedTag: string | null;
  onSelectTag: (tag: string | null) => void;
  onUpvote: (postId: string) => void;
  onAddComment: (postId: string, text: string) => void;
  onOpenLounge: () => void;
  onOpenCreatePost: () => void;
}

export const ForumSection: React.FC<ForumSectionProps> = ({
  filteredPosts,
  activeChannel,
  onSelectChannel,
  postCounts,
  searchQuery,
  onSearchQueryChange,
  sortBy,
  onSortByChange,
  selectedTag,
  onSelectTag,
  onUpvote,
  onAddComment,
  onOpenLounge,
  onOpenCreatePost,
}) => {
  return (
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
            onClick={onOpenLounge}
            className="px-4 py-2.5 rounded-xl bg-amber-400 text-slate-900 font-extrabold text-xs shadow-sm hover:bg-amber-300 cursor-pointer"
          >
            Say Hi 👋
          </button>
          <button
            onClick={onOpenCreatePost}
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
        onSelectChannel={onSelectChannel}
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
            onChange={(e) => onSearchQueryChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
          />
        </div>

        <div className="flex items-center gap-1 bg-slate-200/70 dark:bg-slate-800/80 p-1 rounded-xl text-xs font-medium">
          <button
            onClick={() => onSortByChange('trending')}
            className={`flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors cursor-pointer ${
              sortBy === 'trending' ? 'bg-white dark:bg-slate-900 text-blue-600 font-bold shadow-xs' : 'text-slate-600 dark:text-slate-400'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Trending</span>
          </button>
          <button
            onClick={() => onSortByChange('latest')}
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
            onUpvote={onUpvote}
            onAddComment={onAddComment}
            onTagClick={(tag) => onSelectTag(tag === selectedTag ? null : tag)}
          />
        ))}
      </div>
    </main>
  );
};
