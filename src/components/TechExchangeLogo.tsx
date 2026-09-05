import React from 'react';

interface TechExchangeLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
  variant?: 'image' | 'inline' | 'full';
}

export const TechExchangeLogo: React.FC<TechExchangeLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
  variant = 'inline',
}) => {
  const iconHeight = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-14',
  };

  const imageWidth = {
    sm: 'h-9',
    md: 'h-12',
    lg: 'h-20',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  if (variant === 'image') {
    return (
      <img
        src="/logo.png"
        alt="Tech Exchange"
        className={`object-contain rounded-xl shadow-lg border border-slate-800 ${imageWidth[size]} ${className}`}
      />
    );
  }

  if (variant === 'full') {
    return (
      <div className={`relative inline-flex items-center justify-center p-1.5 rounded-2xl bg-slate-950 border border-cyan-500/30 shadow-xl shadow-cyan-500/10 ${className}`}>
        <img
          src="/logo.png"
          alt="Tech Exchange — Talk • Learn • Build"
          className={`object-contain ${imageWidth[size]}`}
        />
      </div>
    );
  }

  return (
    <div className={`flex items-center gap-3 font-heading ${className}`}>
      {/* Brand Icon Badge - Clean speech bubble with microphone & code brackets */}
      <div className="relative group shrink-0">
        <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-600 via-cyan-400 to-emerald-400 opacity-75 blur-xs group-hover:opacity-100 transition duration-300"></div>
        <div className="relative flex items-center justify-center p-1 rounded-2xl bg-slate-950 border border-slate-800">
          <img
            src="/logo.png"
            alt="Tech Exchange Logo Icon"
            className={`object-contain ${iconHeight[size]}`}
          />
        </div>
      </div>

      {/* Brand Text & Tagline */}
      <div className="flex flex-col justify-center">
        <div className={`font-black tracking-tight leading-none ${titleSizes[size]}`}>
          <span className="text-slate-900 dark:text-white">Tech </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-xs">
            Exchange
          </span>
        </div>

        {showTagline && (
          <div className="text-[10px] sm:text-[11px] font-extrabold tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
            <span>Talk</span>
            <span className="text-cyan-500 font-black">•</span>
            <span>Learn</span>
            <span className="text-cyan-500 font-black">•</span>
            <span>Build</span>
          </div>
        )}
      </div>
    </div>
  );
};
