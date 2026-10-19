import React from 'react';

interface FinovateLogoProps {
  className?: string;
  theme?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  variant?: 'full' | 'mark-only' | 'text-only';
  onClick?: () => void;
}

export const FinovateLogo: React.FC<FinovateLogoProps> = ({
  className = '',
  theme = 'light',
  size = 'md',
  variant = 'full',
  onClick,
}) => {
  const isDark = theme === 'dark';

  // Sizing definitions
  const markSize = {
    sm: 'w-7 h-6',
    md: 'w-9 h-8',
    lg: 'w-12 h-10',
  }[size];

  const brandTextSize = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  }[size];

  const subTextSize = {
    sm: 'text-[7px] tracking-[0.38em]',
    md: 'text-[9px] tracking-[0.42em]',
    lg: 'text-[11px] tracking-[0.45em]',
  }[size];

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center gap-2.5 select-none cursor-pointer group ${className}`}
    >
      {variant !== 'text-only' && (
        <svg
          viewBox="0 0 100 80"
          className={`${markSize} shrink-0 transition-transform duration-200 group-hover:scale-105`}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-label="Finovate Logo Mark"
        >
          {/* Main Left Mountain Ridge / Peak Facet */}
          <polygon
            points="2,78 38,78 38,38 58,0 48,0"
            fill="#3F7A74"
            className="transition-colors"
          />
          {/* Left slope solid triangle */}
          <polygon
            points="2,78 48,0 38,38"
            fill="#47857F"
          />
          {/* Interlocking Central Wedge */}
          <polygon
            points="38,58 48,46 68,78 48,78"
            fill="#3F7A74"
          />
          {/* Right Bold Parallel Diagonal Beam */}
          <polygon
            points="58,0 72,0 98,62 84,62"
            fill="#47857F"
          />
          <polygon
            points="72,0 84,0 100,78 86,78"
            fill="#386E68"
          />
        </svg>
      )}

      {variant !== 'mark-only' && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-extrabold font-sans tracking-tight transition-colors ${
              brandTextSize
            } ${isDark ? 'text-white' : 'text-[#0E2322]'}`}
          >
            Finovate
          </span>
          <span
            className={`font-semibold uppercase transition-colors ${
              subTextSize
            } ${isDark ? 'text-[#84ACA7]' : 'text-[#3F7A74]'}`}
          >
            ACCOUNTANCY
          </span>
        </div>
      )}
    </div>
  );
};
