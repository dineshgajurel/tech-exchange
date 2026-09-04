import React, { useState } from 'react';
import { ThumbsUp, MessageSquare, Bookmark, Share2, ExternalLink, Github, Code2, Send, Check } from 'lucide-react';
import { Post } from '../types';
import { CHANNELS, Channel } from '../data/initialData';

interface PostCardProps {
  post: Post;
  onUpvote: (postId: string) => void;
  onAddComment: (postId: string, commentText: string) => void;
  onTagClick: (tag: string) => void;
}

export const PostCard: React.FC<PostCardProps> = ({
  post,
  onUpvote,
  onAddComment,
  onTagClick,
}) => {
  const [showComments, setShowComments] = useState(false);
  const [newCommentText, setNewCommentText] = useState('');
  const [copied, setCopied] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(post.isBookmarked || false);

  const channel: Channel = CHANNELS.find((c: Channel) => c.id === post.channelId) || CHANNELS[0];

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newCommentText.trim()) return;
    onAddComment(post.id, newCommentText);
    setNewCommentText('');
  };

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <article className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/80 dark:border-slate-800 p-5 sm:p-6 shadow-xs hover:border-slate-300 dark:hover:border-slate-700 transition-all">
      
      {/* Post Top Header: Author + Channel Pill */}
      <div className="flex items-center justify-between gap-3 mb-4">
        <div className="flex items-center gap-3">
          <img
            src={post.author.avatar}
            alt={post.author.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500/20"
          />
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-bold text-sm text-slate-900 dark:text-white">
                {post.author.name}
              </span>
              <span className="text-xs text-slate-400">
                {post.author.handle}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400">
              {post.author.role && (
                <span className="font-medium text-slate-600 dark:text-slate-300">
                  {post.author.role}
                </span>
              )}
              <span>•</span>
              <span>{post.timeAgo}</span>
            </div>
          </div>
        </div>

        {/* Channel Badge */}
        <div className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
          {channel.title}
        </div>
      </div>

      {/* Title & Body Content */}
      <h3 className="font-heading text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 leading-snug">
        {post.title}
      </h3>

      <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed mb-4 whitespace-pre-line">
        {post.content}
      </p>

      {/* Code Snippet Preview (if available) */}
      {post.codeSnippet && (
        <div className="mb-4 rounded-xl overflow-hidden border border-slate-800 bg-slate-950 text-slate-100 font-mono text-xs">
          <div className="bg-slate-900 px-4 py-2 flex items-center justify-between border-b border-slate-800 text-slate-400">
            <span className="flex items-center gap-1.5 font-semibold text-slate-300">
              <Code2 className="w-3.5 h-3.5 text-blue-400" />
              {post.codeSnippet.language}
            </span>
            <span>UTF-8</span>
          </div>
          <pre className="p-4 overflow-x-auto leading-relaxed">
            <code>{post.codeSnippet.code}</code>
          </pre>
        </div>
      )}

      {/* Build Details (Demo & GitHub links if available) */}
      {post.buildDetails && (
        <div className="mb-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200/80 dark:border-slate-700/80">
          <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
            <div className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">
              Project Tech Stack:
            </div>
            <div className="flex items-center gap-2">
              {post.buildDetails.demoUrl && (
                <a
                  href={post.buildDetails.demoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-blue-600 hover:bg-blue-700 text-white transition-colors"
                >
                  <ExternalLink className="w-3 h-3" />
                  <span>Live Demo</span>
                </a>
              )}
              {post.buildDetails.repoUrl && (
                <a
                  href={post.buildDetails.repoUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-1 px-3 py-1 rounded-lg text-xs font-semibold bg-slate-200 dark:bg-slate-700 text-slate-800 dark:text-slate-200 hover:bg-slate-300 transition-colors"
                >
                  <Github className="w-3 h-3" />
                  <span>GitHub</span>
                </a>
              )}
            </div>
          </div>
          <div className="flex flex-wrap gap-1.5">
            {post.buildDetails.techStack.map((tech) => (
              <span key={tech} className="px-2.5 py-0.5 rounded-md text-xs font-medium bg-blue-100/70 dark:bg-blue-950/70 text-blue-800 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800">
                {tech}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Tags Bar */}
      <div className="flex flex-wrap items-center gap-2 mb-4">
        {post.tags.map((tag) => (
          <button
            key={tag}
            onClick={() => onTagClick(tag)}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Post Actions Footer Bar */}
      <div className="flex items-center justify-between pt-3 border-t border-slate-100 dark:border-slate-800/80 text-sm">
        
        <div className="flex items-center gap-2 sm:gap-4">
          {/* Upvote Button */}
          <button
            onClick={() => onUpvote(post.id)}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full font-bold text-xs transition-all cursor-pointer ${
              post.isUpvoted
                ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/20'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-blue-50 hover:text-blue-600 dark:hover:bg-slate-700'
            }`}
          >
            <ThumbsUp className={`w-4 h-4 ${post.isUpvoted ? 'fill-current' : ''}`} />
            <span>{post.upvotes}</span>
          </button>

          {/* Comments Toggle Button */}
          <button
            onClick={() => setShowComments(!showComments)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-full font-semibold text-xs text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
          >
            <MessageSquare className="w-4 h-4" />
            <span>{post.commentsList.length}</span>
          </button>
        </div>

        <div className="flex items-center gap-1 text-slate-400">
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className={`p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer ${
              isBookmarked ? 'text-blue-600 dark:text-blue-400' : ''
            }`}
            title="Save post"
          >
            <Bookmark className={`w-4 h-4 ${isBookmarked ? 'fill-current' : ''}`} />
          </button>

          <button
            onClick={handleShare}
            className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer relative"
            title="Share link"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Share2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Accordion Comments Section */}
      {showComments && (
        <div className="mt-4 pt-4 border-t border-slate-100 dark:border-slate-800/80 space-y-3">
          
          {/* Add Comment Form */}
          <form onSubmit={handleCommentSubmit} className="flex gap-2">
            <input
              type="text"
              placeholder="Add your thought to this chat..."
              value={newCommentText}
              onChange={(e) => setNewCommentText(e.target.value)}
              className="flex-1 px-3.5 py-2 text-xs rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white placeholder-slate-400 border border-transparent focus:border-blue-500 focus:bg-white focus:outline-none"
            />
            <button
              type="submit"
              disabled={!newCommentText.trim()}
              className="px-3 py-2 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 disabled:opacity-40 transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Comment List */}
          <div className="space-y-3 pt-2">
            {post.commentsList.map((cmt) => (
              <div key={cmt.id} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 text-xs">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-2">
                    <img src={cmt.avatar} alt={cmt.author} className="w-5 h-5 rounded-full object-cover" />
                    <span className="font-bold text-slate-900 dark:text-white">{cmt.author}</span>
                  </div>
                  <span className="text-slate-400">{cmt.timeAgo}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 pl-7">{cmt.content}</p>
              </div>
            ))}
          </div>
        </div>
      )}

    </article>
  );
};
