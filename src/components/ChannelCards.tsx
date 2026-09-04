import React from 'react';
import { MessageSquare, Sparkles, Rocket, Zap, Layers } from 'lucide-react';
import { CHANNELS, Channel } from '../data/initialData';
import { ChannelId } from '../types';

interface ChannelCardsProps {
  activeChannel: ChannelId | 'all';
  onSelectChannel: (channel: ChannelId | 'all') => void;
  postCounts: Record<string, number>;
}

export const ChannelCards: React.FC<ChannelCardsProps> = ({
  activeChannel,
  onSelectChannel,
  postCounts,
}) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'MessageSquare': return <MessageSquare className="w-5 h-5" />;
      case 'Sparkles': return <Sparkles className="w-5 h-5" />;
      case 'Rocket': return <Rocket className="w-5 h-5" />;
      case 'Zap': return <Zap className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="py-6 px-4 max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-heading text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Layers className="w-5 h-5 text-blue-600" />
          <span>Explore Channels</span>
        </h2>
        {activeChannel !== 'all' && (
          <button
            onClick={() => onSelectChannel('all')}
            className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline cursor-pointer"
          >
            Show All Channels →
          </button>
        )}
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
        
        {CHANNELS.map((ch: Channel) => {
          const isActive = activeChannel === ch.id;
          const count = postCounts[ch.id] || 0;

          return (
            <button
              key={ch.id}
              onClick={() => onSelectChannel(ch.id)}
              className={`text-left p-4 rounded-2xl border transition-all cursor-pointer relative overflow-hidden group ${
                isActive
                  ? 'bg-blue-600 text-white border-blue-600 shadow-md shadow-blue-500/25 ring-2 ring-blue-600/30'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-300 dark:hover:border-slate-700 hover:shadow-sm'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 ${
                  isActive 
                    ? 'bg-white/20 text-white' 
                    : 'bg-blue-50 dark:bg-slate-800 text-blue-600 dark:text-blue-400 border border-blue-100 dark:border-slate-700'
                }`}>
                  {getIcon(ch.iconName)}
                </div>

                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${
                  isActive
                    ? 'bg-white/20 text-white'
                    : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400'
                }`}>
                  {count} posts
                </span>
              </div>

              <div className="font-heading font-bold text-base sm:text-lg mb-1 leading-snug">
                {ch.title}
              </div>

              <p className={`text-xs line-clamp-2 ${
                isActive ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
              }`}>
                {ch.subtitle}
              </p>
            </button>
          );
        })}

      </div>
    </div>
  );
};
