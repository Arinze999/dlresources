// components/icons/Circles.tsx
import * as React from 'react';

export type CirclesProps = {
  /** Size in px or any CSS unit (applies to both width & height). Defaults to 800. */
  size?: number | string;
  /** Optional extra classes for Tailwind/custom styling. */
  className?: string;
  /** Main fill color for most circles. */
  primaryFill?: string;
  /** Main stroke color for most circles. */
  primaryStroke?: string;
  /** Special fill color for the highlighted circle. */
  accentFill?: string;
  /** Special stroke color for the highlighted circle. */
  accentStroke?: string;
};

export const Circles: React.FC<CirclesProps> = ({
  size = 800,
  className,
  primaryFill = '#ffd700',
  primaryStroke = '#207176',
  accentFill = '#D1ED5E',
  accentStroke = '#AACF17',
}) => {
  return (
    <svg
      viewBox="0 0 800 800"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <g
        fill={primaryFill}
        stroke={primaryStroke}
        strokeWidth={5}
        // scale around the center (400, 400) like original transform-origin
        transform="translate(400 400) scale(0.95) translate(-400 -400)"
      >
        {/* small top-right circle */}
        <circle r="20" cx="710" cy="70" />

        {/* accent circle with its own fill & stroke */}
        <circle
          r="33"
          cx="300"
          cy="255"
          fill={accentFill}
          stroke={accentStroke}
        />

        {/* large ring */}
        <circle r="125" cx="175" cy="455" strokeWidth={44} />

        {/* mid circles */}
        <circle r="75" cx="500" cy="315" />
        <circle r="90" cx="600" cy="615" />
      </g>
    </svg>
  );
};
