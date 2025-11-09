'use client';

import * as React from 'react';

type UpDownProps = React.SVGProps<SVGSVGElement> & {
  /** Optional: set a fixed height (e.g. '80px', 80, '6rem'). Defaults to auto. */
  height?: number | string;
  /** Optional: prefix to avoid gradient ID collisions when used multiple times. */
  idPrefix?: string;
};

export const UpDown: React.FC<UpDownProps> = ({
  className,
  height,
  idPrefix = 'ud',
  style,
  ...rest
}) => {
  const gradId = `${idPrefix}-ssspill-grad`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 325 100"
      className={className ?? 'w-full h-auto'}
      width="100%"
      // Keep natural aspect ratio so it doesn't get taller than needed.
      preserveAspectRatio="xMidYMid meet"
      // Allow direct height control if provided
      height={height}
      style={style}
      {...rest}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradId}>
          <stop stopColor="hsl(0, 0%, 100%)" stopOpacity={1} offset="45%" />
          <stop stopColor="hsl(0, 0%, 100%)" stopOpacity={1} offset="100%" />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill="#f2f2f2" />
      <g fill={`url(#${gradId})`}>
        <rect width="100%" height="40" fill="hsl(0, 0%, 100%)" />
        <rect x="0" width="7.69%" height="77.229739737692" rx="15" />
        <rect x="50" width="7.69%" height="85.2650927472551" rx="15" />
        <rect x="100" width="7.69%" height="90.520466971767" rx="15" />
        <rect x="150" width="7.69%" height="63.39628011648962" rx="15" />
        <rect x="200" width="7.69%" height="68.74588111656688" rx="15" />
        <rect x="250" width="7.69%" height="58.278313244591544" rx="15" />
        <rect x="300" width="7.69%" height="92.91726879120435" rx="15" />
      </g>

      <g fill="#f2f2f2">
        <rect x="25" y="15.70466657402525" width="7.69%" height="60" rx="15" />
        <rect x="75" y="6.049153377896787" width="7.69%" height="60" rx="15" />
        <rect x="125" y="4.438024610893576" width="7.69%" height="60" rx="15" />
        <rect x="175" y="12.6639260834584" width="7.69%" height="60" rx="15" />
        <rect
          x="225"
          y="11.276409582799644"
          width="7.69%"
          height="60"
          rx="15"
        />
        <rect x="275" y="8.68058837440402" width="7.69%" height="60" rx="15" />
      </g>
    </svg>
  );
};

export default UpDown;
