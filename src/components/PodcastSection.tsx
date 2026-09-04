import React, { useState, useRef } from 'react';
import { Play, Pause, Mic, Volume2, Share2, Sparkles, Clock, Calendar, ExternalLink } from 'lucide-react';
import { PODCAST_EPISODES } from '../data/initialData';
import { PodcastEpisode } from '../types';

export const PodcastSection: React.FC = () => {
  const [activeEpisode, setActiveEpisode] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
      setDuration(audioRef.current.duration || 0);
    }
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800">
            <Mic className="w-3.5 h-3.5 text-blue-600" />
            <span>Tech Talk Podcast</span>
          </div>
          <h2 className="font-heading text-3xl font-extrabold text-slate-900 dark:text-white">
            Listen to Tech Talk Episodes
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
            Deep dives, guest interviews, and honest conversations on software & AI.
          </p>
        </div>
      </div>

      {/* Featured Active Episode Player Card */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-xl border border-blue-900/50 mb-10 relative overflow-hidden">
        
        {/* Background Dot pattern */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-dot-pattern-dark opacity-30 pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white">
                EPISODE #{activeEpisode.episodeNumber}
              </span>
              <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {activeEpisode.duration}
              </span>
              <span className="text-xs font-medium text-slate-400 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                {activeEpisode.publishedDate}
              </span>
            </div>

            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {activeEpisode.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeEpisode.description}
            </p>

            {/* Guest Info */}
            {activeEpisode.guest && (
              <div className="flex items-center gap-3 pt-2">
                <img src={activeEpisode.guest.avatar} alt={activeEpisode.guest.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500" />
                <div>
                  <div className="text-xs font-bold text-white">{activeEpisode.guest.name}</div>
                  <div className="text-[11px] text-slate-400">{activeEpisode.guest.role}</div>
                </div>
              </div>
            )}

            {/* Audio Controls */}
            <div className="pt-4 space-y-2">
              <audio
                ref={audioRef}
                src={activeEpisode.audioUrl}
                onTimeUpdate={handleTimeUpdate}
                onEnded={() => setIsPlaying(false)}
              />

              <div className="flex items-center gap-4">
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-blue-600 hover:bg-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/40 cursor-pointer transform hover:scale-105 transition-all"
                >
                  {isPlaying ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-1" />}
                </button>

                <div className="flex-1 space-y-1">
                  <div className="flex justify-between text-xs font-mono text-slate-400">
                    <span>{formatTime(currentTime)}</span>
                    <span>{duration ? formatTime(duration) : activeEpisode.duration}</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-2 overflow-hidden cursor-pointer"
                       onClick={(e) => {
                         const rect = e.currentTarget.getBoundingClientRect();
                         const pos = (e.clientX - rect.left) / rect.width;
                         if (audioRef.current && duration) {
                           audioRef.current.currentTime = pos * duration;
                         }
                       }}
                  >
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all"
                      style={{ width: `${duration ? (currentTime / duration) * 100 : 0}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Episode Show Notes */}
          <div className="bg-slate-900/80 p-5 rounded-2xl border border-slate-800 space-y-3">
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-blue-400">
              Episode Timestamps & Notes
            </h4>
            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              {activeEpisode.notes.map((note, idx) => (
                <li key={idx} className="hover:text-blue-400 cursor-pointer transition-colors">
                  {note}
                </li>
              ))}
            </ul>

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
              <a
                href={activeEpisode.spotifyUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center rounded-xl bg-emerald-600/20 text-emerald-400 text-xs font-bold border border-emerald-600/40 hover:bg-emerald-600/30 transition-colors"
              >
                Listen on Spotify
              </a>
              <a
                href={activeEpisode.youtubeUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2 text-center rounded-xl bg-red-600/20 text-red-400 text-xs font-bold border border-red-600/40 hover:bg-red-600/30 transition-colors"
              >
                Watch on YouTube
              </a>
            </div>
          </div>

        </div>

      </div>

      {/* Episode Archive Grid */}
      <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white mb-4">
        All Tech Talk Episodes
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {PODCAST_EPISODES.map((ep) => (
          <div
            key={ep.id}
            onClick={() => setActiveEpisode(ep)}
            className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
              activeEpisode.id === ep.id
                ? 'bg-blue-50 dark:bg-slate-800 border-blue-600 text-slate-900 dark:text-white shadow-md'
                : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-300'
            }`}
          >
            <div className="space-y-1">
              <div className="text-xs font-extrabold text-blue-600 dark:text-blue-400">
                EPISODE #{ep.episodeNumber} • {ep.duration}
              </div>
              <h4 className="font-heading font-bold text-base line-clamp-1">{ep.title}</h4>
              <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2">{ep.description}</p>
            </div>
            <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0">
              <Play className="w-4 h-4 fill-current ml-0.5" />
            </div>
          </div>
        ))}
      </div>

    </section>
  );
};
