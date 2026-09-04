import React from 'react';

interface TechExchangeLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
  className?: string;
}

export const TechExchangeLogo: React.FC<TechExchangeLogoProps> = ({
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-16 h-16',
  };

  const titleSizes = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-4xl',
  };

  return (
    <div className={`flex items-center gap-3 font-heading ${className}`}>
      
      {/* Brand Icon SVG: Speech Bubble + Circular Exchange Arrows + Code Brackets + Microphone */}
      <div className={`relative flex items-center justify-center shrink-0 ${iconSizes[size]}`}>
        <svg
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full drop-shadow-md"
        >
          <defs>
            {/* Linear Gradient matching reference image: Blue to Cyan/Teal/Green */}
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0052FF" />
              <stop offset="50%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#00E676" />
            </linearGradient>

            <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00D2FF" />
              <stop offset="100%" stopColor="#00E676" />
            </linearGradient>
          </defs>

          {/* Outer Speech Bubble Circular Exchange Loop */}
          <path
            d="M 50 10 A 38 38 0 1 1 20 78 L 12 90 L 26 84 A 38 38 0 0 1 50 10 Z"
            stroke="url(#logoGradient)"
            strokeWidth="8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Arrowhead on top right loop */}
          <path
            d="M 45 6 L 54 10 L 48 18"
            stroke="url(#logoGradient)"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Left Code Bracket '<' */}
          <path
            d="M 31 43 L 23 50 L 31 57"
            stroke="url(#logoGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Right Code Bracket '>' */}
          <path
            d="M 69 43 L 77 50 L 69 57"
            stroke="url(#logoGradient)"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Microphone Body */}
          <rect
            x="44"
            y="32"
            width="12"
            height="22"
            rx="6"
            fill="currentColor"
          />

          {/* Microphone Grille Lines */}
          <line x1="44" y1="38" x2="56" y2="38" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />
          <line x1="44" y1="44" x2="56" y2="44" stroke="white" strokeWidth="1.5" strokeOpacity="0.4" />

          {/* Microphone Stand U-Cup */}
          <path
            d="M 38 46 C 38 58, 62 58, 62 46"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
            fill="none"
          />

          {/* Microphone Stem & Base */}
          <line x1="50" y1="58" x2="50" y2="67" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
          <line x1="42" y1="67" x2="58" y2="67" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
        </svg>
      </div>

      {/* Brand Text: Tech Exchange + Talk • Learn • Build */}
      <div className="flex flex-col justify-center">
        <div className={`font-black tracking-tight leading-none ${titleSizes[size]}`}>
          <span className="text-slate-900 dark:text-white">Tech </span>
          <span className="bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Exchange
          </span>
        </div>

        {showTagline && (
          <div className="text-[11px] font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400 mt-1 flex items-center gap-1.5">
            <span>Talk</span>
            <span className="text-cyan-500">•</span>
            <span>Learn</span>
            <span className="text-cyan-500">•</span>
            <span>Build</span>
          </div>
        )}
      </div>

    </div>
  );
};
