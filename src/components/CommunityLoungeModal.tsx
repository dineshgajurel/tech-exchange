import React, { useState } from 'react';
import { X, Sparkles, Send, MapPin, Heart, MessageSquareHeart } from 'lucide-react';
import confetti from 'canvas-confetti';
import { LoungeMessage } from '../types';

interface CommunityLoungeModalProps {
  isOpen: boolean;
  onClose: () => void;
  messages: LoungeMessage[];
  onAddMessage: (msg: Omit<LoungeMessage, 'id' | 'likes' | 'timestamp'>) => void;
}

const AVATAR_PRESETS = [
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&auto=format&fit=crop&q=80'
];

export const CommunityLoungeModal: React.FC<CommunityLoungeModalProps> = ({
  isOpen,
  onClose,
  messages,
  onAddMessage,
}) => {
  const [author, setAuthor] = useState('Dinesh Gajurel');
  const [role, setRole] = useState('Software Architect');
  const [location, setLocation] = useState('Remote / Global');
  const [message, setMessage] = useState('');
  const [selectedAvatar, setSelectedAvatar] = useState('https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150&auto=format&fit=crop&q=80');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !message.trim()) return;

    onAddMessage({
      author: author.trim(),
      role: role.trim(),
      avatar: selectedAvatar,
      location: location.trim() || 'Remote / Global',
      message: message.trim()
    });

    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });

    setMessage('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="bg-white dark:bg-slate-900 rounded-3xl border border-slate-200 dark:border-slate-800 w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-blue-50/50 dark:bg-slate-850">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-blue-600 text-white flex items-center justify-center font-heading text-2xl shadow-md shadow-blue-500/20">
              👋
            </div>
            <div>
              <h2 className="font-heading text-2xl font-extrabold text-slate-900 dark:text-white">
                Come say hi!
              </h2>
              <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                Say hello to the global Tech Exchange community wall.
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

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          
          {/* Post Hello Form */}
          <form onSubmit={handleSubmit} className="p-4 rounded-2xl bg-blue-50/60 dark:bg-slate-800/60 border border-blue-100 dark:border-slate-700/80 space-y-4">
            <div className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>Leave a quick introduction</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <input
                type="text"
                placeholder="Your Name (e.g. Dinesh Gajurel) *"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                required
                className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
              <input
                type="text"
                placeholder="Role (e.g. AI Dev, Student)"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
              <input
                type="text"
                placeholder="City/Country"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="px-3 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
              />
            </div>

            {/* Avatar Select */}
            <div>
              <label className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block mb-1.5">
                Choose an Avatar
              </label>
              <div className="flex items-center gap-2">
                {AVATAR_PRESETS.map((img) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setSelectedAvatar(img)}
                    className={`w-8 h-8 rounded-full overflow-hidden border-2 cursor-pointer transition-transform ${
                      selectedAvatar === img ? 'border-blue-600 scale-110' : 'border-transparent opacity-70'
                    }`}
                  >
                    <img src={img} alt="Avatar option" className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>

            <textarea
              placeholder="What are you currently learning or building? Say hi..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows={2}
              required
              className="w-full px-3.5 py-2 text-xs rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white"
            />

            <div className="flex justify-end">
              <button
                type="submit"
                className="flex items-center gap-2 px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-bold shadow-md shadow-blue-500/20 cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
                <span>Post Greeting</span>
              </button>
            </div>
          </form>

          {/* Wall Messages */}
          <div className="space-y-3">
            <h3 className="font-heading font-bold text-sm text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Recent Greetings
            </h3>
            {messages.map((msg) => (
              <div key={msg.id} className="p-4 rounded-2xl bg-white dark:bg-slate-800/80 border border-slate-100 dark:border-slate-700 flex items-start gap-3 shadow-xs">
                <img src={msg.avatar} alt={msg.author} className="w-10 h-10 rounded-full object-cover shrink-0" />
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <div>
                      <span className="font-bold text-sm text-slate-900 dark:text-white">{msg.author}</span>
                      <span className="text-xs text-slate-400 ml-2">({msg.role})</span>
                    </div>
                    <span className="text-[11px] text-slate-400">{msg.timestamp}</span>
                  </div>
                  {msg.location && (
                    <div className="flex items-center gap-1 text-[11px] text-blue-600 dark:text-blue-400 font-medium mb-1.5">
                      <MapPin className="w-3 h-3" />
                      <span>{msg.location}</span>
                    </div>
                  )}
                  <p className="text-xs text-slate-700 dark:text-slate-300">{msg.message}</p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </div>
  );
};
