import { useState, useMemo } from 'react';
import { Post, ChannelId } from '../types';
import { INITIAL_POSTS, CHANNELS } from '../data/initialData';

export function useForumPosts() {
  const [posts, setPosts] = useState<Post[]>(INITIAL_POSTS);
  const [activeChannel, setActiveChannel] = useState<ChannelId | 'all'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const [sortBy, setSortBy] = useState<'trending' | 'latest' | 'top'>('trending');

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

  const handleAddComment = (postId: string, text: string) => {
    setPosts((prevPosts) =>
      prevPosts.map((p) => {
        if (p.id === postId) {
          const newComment = {
            id: `c-${Date.now()}`,
            author: 'Dinesh Gajurel',
            avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80',
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
    setPosts((prev) => [created, ...prev]);
  };

  const filteredPosts = useMemo(() => {
    let result = posts.filter((p) => {
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

    return [...result].sort((a, b) => {
      if (sortBy === 'top') return b.upvotes - a.upvotes;
      if (sortBy === 'latest') return b.id.localeCompare(a.id);
      return b.upvotes + b.commentsCount * 2 - (a.upvotes + a.commentsCount * 2);
    });
  }, [posts, activeChannel, selectedTag, searchQuery, sortBy]);

  const postCounts = useMemo(() => {
    return CHANNELS.reduce((acc: Record<string, number>, ch: { id: string }) => {
      acc[ch.id] = posts.filter((p) => p.channelId === ch.id).length;
      return acc;
    }, {} as Record<string, number>);
  }, [posts]);

  return {
    posts,
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
  };
}
