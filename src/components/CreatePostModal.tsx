import React, { useState } from 'react';
import { X, Sparkles, Code2, Link as LinkIcon, Send } from 'lucide-react';
import { ChannelId, Post } from '../types';
import { CHANNELS } from '../data/initialData';

interface CreatePostModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitPost: (newPost: Omit<Post, 'id' | 'timeAgo' | 'upvotes' | 'commentsCount' | 'commentsList'>) => void;
  defaultChannelId?: ChannelId | 'all';
}

export const CreatePostModal: React.FC<CreatePostModalProps> = ({
  isOpen,
  onClose,
  onSubmitPost,
  defaultChannelId = 'tech-talk',
}) => {
  const initialChannel = defaultChannelId === 'all' ? 'tech-talk' : defaultChannelId;

  const [channelId, setChannelId] = useState<ChannelId>(initialChannel);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [authorName, setAuthorName] = useState('');
  const [authorHandle, setAuthorHandle] = useState('');
  const [tagsInput, setTagsInput] = useState('#TechExchange, #Programming');
  const [includeCode, setIncludeCode] = useState(false);
  const [codeLanguage, setCodeLanguage] = useState('typescript');
  const [codeSnippet, setCodeSnippet] = useState('');
  const [demoUrl, setDemoUrl] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const tagsArray = tagsInput
      .split(',')
      .map((t) => t.trim())
      .filter((t) => t.length > 0)
      .map((t) => (t.startsWith('#') ? t : `#${t}`));

    onSubmitPost({
      channelId,
      title: title.trim(),
      content: content.trim(),
      author: {
        name: authorName.trim() || 'Tech Enthusiast',
        handle: authorHandle.trim() ? (authorHandle.startsWith('@') ? authorHandle : `@${authorHandle}`) : '@dev_guest',
        avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
        role: 'Community Builder'
      },
      tags: tagsArray.length > 0 ? tagsArray : ['#TechExchange'],
      ...(includeCode && codeSnippet.trim() ? {
        codeSnippet: {
          language: codeLanguage,
          code: codeSnippet
        }
      } : {}),
      ...(demoUrl.trim() ? {
        buildDetails: {
          demoUrl: demoUrl.trim(),
          techStack: ['React', 'TypeScript', 'Web']
        }
      } : {})
    });

    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
                Share with Tech Exchange
              </h2>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Post your thoughts, projects, or explanations.
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <form onSubmit={handleSubmit} className="p-6 overflow-y-auto space-y-4 flex-1">
          
          {/* Target Channel Selection */}
          <div>
            <label className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
              Select Channel:
            </label>
            <div className="grid grid-cols-2 gap-2">
              {CHANNELS.map((ch: { id: ChannelId; title: string; hashtag: string }) => (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => setChannelId(ch.id)}
                  className={`p-3 rounded-xl border text-left cursor-pointer transition-all ${
                    channelId === ch.id
                      ? 'border-blue-600 bg-blue-50 dark:bg-slate-800 text-blue-700 dark:text-blue-300 ring-1 ring-blue-600'
                      : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold">{ch.title}</div>
                  <div className="text-[11px] text-slate-400 truncate">{ch.hashtag}</div>
                </button>
              ))}
            </div>
          </div>

          {/* Author info */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Your Name</label>
              <input
                type="text"
                placeholder="e.g. Alex Rivers"
                value={authorName}
                onChange={(e) => setAuthorName(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
            </div>
            <div>
              <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Handle</label>
              <input
                type="text"
                placeholder="@arivers"
                value={authorHandle}
                onChange={(e) => setAuthorHandle(e.target.value)}
                className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
            </div>
          </div>

          {/* Title */}
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Post Title *</label>
            <input
              type="text"
              placeholder="What's on your mind or what did you build?"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white font-medium"
            />
          </div>

          {/* Content */}
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Content Details *</label>
            <textarea
              placeholder="Write your thoughts, technical explanation, or project details..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              required
              className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Hashtags input */}
          <div>
            <label className="text-xs font-semibold text-slate-700 dark:text-slate-300 block mb-1">Hashtags (Comma separated)</label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
            />
          </div>

          {/* Optional Code Snippet toggle */}
          <div className="pt-2">
            <button
              type="button"
              onClick={() => setIncludeCode(!includeCode)}
              className="flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 cursor-pointer"
            >
              <Code2 className="w-4 h-4" />
              <span>{includeCode ? '- Remove Code Snippet' : '+ Add Code Snippet'}</span>
            </button>

            {includeCode && (
              <div className="mt-3 p-3 rounded-xl bg-slate-950 text-white space-y-2">
                <input
                  type="text"
                  placeholder="Language (e.g. typescript, python, rust)"
                  value={codeLanguage}
                  onChange={(e) => setCodeLanguage(e.target.value)}
                  className="w-full px-3 py-1.5 text-xs rounded bg-slate-800 border border-slate-700 text-slate-200"
                />
                <textarea
                  placeholder="Paste code here..."
                  value={codeSnippet}
                  onChange={(e) => setCodeSnippet(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 text-xs font-mono rounded bg-slate-900 border border-slate-800 text-green-400"
                />
              </div>
            )}
          </div>

          {/* Submit Footer */}
          <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Publish Post</span>
            </button>
          </div>

        </form>
      </div>
    </div>
  );
};
