import React, { useState, useRef } from 'react';
import { Play, Pause, Mic, Tv, Video, Calendar, MapPin, Users, Sparkles, Clock, ExternalLink, Radio, CheckCircle, Ticket, Share2 } from 'lucide-react';
import { PODCAST_EPISODES } from '../data/initialData';
import { PodcastEpisode } from '../types';
import confetti from 'canvas-confetti';

type MediaFilter = 'all' | 'show' | 'event' | 'seminar' | 'video' | 'podcast';

export const PodcastSection: React.FC = () => {
  const [activeItem, setActiveItem] = useState<PodcastEpisode>(PODCAST_EPISODES[0]);
  const [activeFilter, setActiveFilter] = useState<MediaFilter>('all');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [rsvpConfirmedId, setRsvpConfirmedId] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  const filterOptions: { id: MediaFilter; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Content', icon: <Sparkles className="w-3.5 h-3.5" /> },
    { id: 'show', label: 'Tech Shows', icon: <Tv className="w-3.5 h-3.5" /> },
    { id: 'event', label: 'Events & Meetups', icon: <Calendar className="w-3.5 h-3.5" /> },
    { id: 'seminar', label: 'Seminars & Workshops', icon: <Users className="w-3.5 h-3.5" /> },
    { id: 'video', label: 'Video Demos', icon: <Video className="w-3.5 h-3.5" /> },
    { id: 'podcast', label: 'Podcasts', icon: <Mic className="w-3.5 h-3.5" /> },
  ];

  const filteredItems = PODCAST_EPISODES.filter(
    (item) => activeFilter === 'all' || item.mediaType === activeFilter
  );

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

  const handleRSVP = (id: string, title: string) => {
    setRsvpConfirmedId(id);
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.6 }
    });
  };

  const getMediaTypeBadge = (item: PodcastEpisode) => {
    switch (item.mediaType) {
      case 'show':
        return (
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white">
            <Tv className="w-3.5 h-3.5 text-white" />
            FEATURED SHOW
          </span>
        );
      case 'event':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-amber-500 text-slate-950">
            <Calendar className="w-3.5 h-3.5" />
            COMMUNITY EVENT
          </span>
        );
      case 'seminar':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-purple-600 text-white">
            <Users className="w-3.5 h-3.5" />
            WORKSHOP / SEMINAR
          </span>
        );
      case 'video':
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-blue-600 text-white">
            <Video className="w-3.5 h-3.5" />
            VIDEO DEMO
          </span>
        );
      case 'podcast':
      default:
        return (
          <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-black bg-emerald-600 text-white">
            <Mic className="w-3.5 h-3.5" />
            PODCAST EP #{item.episodeNumber || 24}
          </span>
        );
    }
  };

  return (
    <section className="py-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Section Header */}
      <div className="mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold bg-blue-50 dark:bg-blue-950 text-blue-700 dark:text-blue-300 mb-2 border border-blue-200 dark:border-blue-800">
          <Tv className="w-4 h-4 text-blue-600" />
          <span>Tech Talk Hub — Shows, Seminars & Podcasts</span>
        </div>
        <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
          Tech Talk
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">
          Watch video shows, attend tech seminars in Kathmandu, watch video demos, and listen to podcasts.
        </p>
      </div>

      {/* Media Filter Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 scrollbar-none">
        {filterOptions.map((opt) => (
          <button
            key={opt.id}
            onClick={() => setActiveFilter(opt.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
              activeFilter === opt.id
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/25'
                : 'bg-white dark:bg-slate-800 border border-slate-200/80 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-750'
            }`}
          >
            {opt.icon}
            <span>{opt.label}</span>
          </button>
        ))}
      </div>

      {/* Featured Active Item Card */}
      <div className="bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-blue-900/60 mb-10 relative overflow-hidden">
        
        {/* Ambient Glow */}
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="lg:col-span-2 space-y-4">
            
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3">
              {getMediaTypeBadge(activeItem)}
              
              <span className="text-xs font-medium text-slate-300 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-blue-400" />
                {activeItem.duration}
              </span>

              {activeItem.location && (
                <span className="text-xs font-semibold text-blue-300 flex items-center gap-1 bg-blue-900/40 px-2.5 py-0.5 rounded-md border border-blue-700/50">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  {activeItem.location}
                </span>
              )}
            </div>

            {/* Title & Description */}
            <h3 className="font-heading text-2xl sm:text-3xl font-extrabold text-white leading-tight">
              {activeItem.title}
            </h3>

            <p className="text-sm text-slate-300 leading-relaxed">
              {activeItem.description}
            </p>

            {/* Guest / Hosts or Speakers Info */}
            {activeItem.speakers && activeItem.speakers.length > 0 ? (
              <div className="pt-2 space-y-2">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">Featured Speakers & Leaders</div>
                <div className="flex flex-wrap items-center gap-4">
                  {activeItem.speakers.map((spk, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 bg-slate-800/80 p-2 rounded-xl border border-slate-700/60">
                      <img src={spk.avatar} alt={spk.name} className="w-9 h-9 rounded-full object-cover ring-2 ring-blue-500" />
                      <div>
                        <div className="text-xs font-bold text-white">{spk.name}</div>
                        <div className="text-[11px] text-slate-300">{spk.role}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ) : activeItem.guest ? (
              <div className="flex items-center gap-3 pt-2">
                <img src={activeItem.guest.avatar} alt={activeItem.guest.name} className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-500" />
                <div>
                  <div className="text-xs font-bold text-white">{activeItem.guest.name}</div>
                  <div className="text-[11px] text-slate-400">{activeItem.guest.role}</div>
                </div>
              </div>
            ) : null}

            {/* Controls depending on Media Type */}
            <div className="pt-4">
              {activeItem.mediaType === 'podcast' && activeItem.audioUrl ? (
                <div className="space-y-2">
                  <audio
                    ref={audioRef}
                    src={activeItem.audioUrl}
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
                        <span>{duration ? formatTime(duration) : activeItem.duration}</span>
                      </div>
                      <div
                        className="w-full bg-slate-800 rounded-full h-2 overflow-hidden cursor-pointer"
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
              ) : activeItem.mediaType === 'event' || activeItem.mediaType === 'seminar' ? (
                <div className="flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => handleRSVP(activeItem.id, activeItem.title)}
                    className="flex items-center gap-2 px-6 py-3 rounded-2xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs shadow-lg shadow-amber-500/30 cursor-pointer transition-all transform active:scale-95"
                  >
                    <Ticket className="w-4 h-4" />
                    <span>{rsvpConfirmedId === activeItem.id ? '✓ Ticket Reserved & Confirmed!' : 'Reserve Free Ticket / RSVP'}</span>
                  </button>

                  <a
                    href={activeItem.registrationUrl || '#'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 text-white font-bold text-xs border border-slate-700 transition-all"
                  >
                    <span>View Event Calendar</span>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
                  </a>
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <a
                    href={activeItem.youtubeUrl || 'https://youtube.com'}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2.5 px-6 py-3 rounded-2xl bg-red-600 hover:bg-red-500 text-white font-extrabold text-xs shadow-lg shadow-red-600/30 cursor-pointer transition-all transform active:scale-95"
                  >
                    <Play className="w-4 h-4 fill-current" />
                    <span>Watch Stream on YouTube</span>
                  </a>
                </div>
              )}
            </div>

          </div>

          {/* Item Timestamps & Info Sidecard */}
          <div className="bg-slate-900/90 p-6 rounded-2xl border border-slate-800 space-y-4">
            <h4 className="font-heading text-xs font-extrabold uppercase tracking-wider text-blue-400 flex items-center justify-between">
              <span>Agenda & Highlights</span>
              <span className="text-[10px] text-slate-400 font-mono">{activeItem.timeAgo || 'Updated'}</span>
            </h4>

            <ul className="space-y-2 text-xs text-slate-300 font-mono">
              {activeItem.notes.map((note, idx) => (
                <li key={idx} className="hover:text-blue-400 cursor-pointer transition-colors flex items-start gap-1.5">
                  <span className="text-blue-500 font-bold">•</span>
                  <span>{note}</span>
                </li>
              ))}
            </ul>

            {activeItem.eventDate && (
              <div className="p-3 rounded-xl bg-blue-950/60 border border-blue-800/60 text-xs space-y-1">
                <div className="text-slate-400 text-[11px]">Event Schedule:</div>
                <div className="font-bold text-amber-300 font-mono">{activeItem.eventDate}</div>
              </div>
            )}

            <div className="pt-3 border-t border-slate-800 flex items-center gap-2">
              {activeItem.spotifyUrl && (
                <a
                  href={activeItem.spotifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 text-center rounded-xl bg-emerald-600/20 text-emerald-400 text-xs font-bold border border-emerald-600/40 hover:bg-emerald-600/30 transition-colors"
                >
                  Spotify
                </a>
              )}
              {activeItem.youtubeUrl && (
                <a
                  href={activeItem.youtubeUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-2 text-center rounded-xl bg-red-600/20 text-red-400 text-xs font-bold border border-red-600/40 hover:bg-red-600/30 transition-colors"
                >
                  YouTube
                </a>
              )}
            </div>
          </div>

        </div>

      </div>

      {/* Filtered Grid List */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-heading text-xl font-bold text-slate-900 dark:text-white">
          All Shows, Events & Media ({filteredItems.length})
        </h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {filteredItems.map((item) => {
          const isSelected = activeItem.id === item.id;
          return (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className={`p-5 rounded-2xl border transition-all cursor-pointer flex items-start justify-between gap-4 ${
                isSelected
                  ? 'bg-blue-50 dark:bg-slate-800 border-blue-600 text-slate-900 dark:text-white shadow-md'
                  : 'bg-white dark:bg-slate-900 border-slate-200/80 dark:border-slate-800 text-slate-900 dark:text-white hover:border-blue-300'
              }`}
            >
              <div className="space-y-1.5 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  {getMediaTypeBadge(item)}
                  <span className="text-[11px] font-mono text-slate-400">{item.duration}</span>
                  {item.timeAgo && (
                    <span className="text-[11px] font-bold text-slate-400">• {item.timeAgo}</span>
                  )}
                </div>

                <h4 className="font-heading font-bold text-base line-clamp-1">{item.title}</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2">{item.description}</p>
                
                {item.location && (
                  <div className="text-[11px] text-blue-600 dark:text-blue-400 font-medium flex items-center gap-1 pt-0.5">
                    <MapPin className="w-3 h-3 text-amber-500" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>

              <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-md">
                {item.mediaType === 'podcast' ? (
                  <Mic className="w-4 h-4" />
                ) : item.mediaType === 'event' || item.mediaType === 'seminar' ? (
                  <Ticket className="w-4 h-4" />
                ) : (
                  <Play className="w-4 h-4 fill-current ml-0.5" />
                )}
              </div>
            </div>
          );
        })}
      </div>

    </section>
  );
};
