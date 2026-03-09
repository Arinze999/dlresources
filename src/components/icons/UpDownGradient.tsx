'use client';

import * as React from 'react';

type GradientBackgroundProps = React.SVGProps<SVGSVGElement> & {
  /** Optional height override */
  height?: number | string;

  /** Optional ID prefix to avoid gradient collisions */
  idPrefix?: string;

  /** Optional top color (default: white) */
  topColor?: string;

  /** Optional bottom color (default: #f2f2f2) */
  bottomColor?: string;
};

export const GradientBackground: React.FC<GradientBackgroundProps> = ({
  className,
  height,
  idPrefix = 'grad',
  topColor = '#ffffff',
  bottomColor = '#f2f2f2',
  style,
  ...rest
}) => {
  const gradId = `${idPrefix}-vertical-gradient`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 100"
      width="100%"
      height={height}
      preserveAspectRatio="none"
      className={className ?? 'w-full h-auto'}
      style={style}
      {...rest}
    >
      <defs>
        <linearGradient id={gradId} x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={topColor} />
          <stop offset="100%" stopColor={bottomColor} />
        </linearGradient>
      </defs>

      <rect width="100%" height="100%" fill={`url(#${gradId})`} />
    </svg>
  );
};

export default GradientBackground;