import * as React from 'react';

type PatternProps = React.SVGProps<SVGSVGElement> & {
  /** width/height (square). Defaults to 700 */
  size?: number | string;
  /** Prefix to avoid gradient/filter ID collisions when used multiple times on a page */
  idPrefix?: string;
};

export const Pattern: React.FC<PatternProps> = ({
  size = 700,
  idPrefix = 'gg',
  className,
  ...rest
}) => {
  const grad2Id = `${idPrefix}-gggrain-gradient2`;
  const grad3Id = `${idPrefix}-gggrain-gradient3`;
  const filterId = `${idPrefix}-gggrain-filter`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 700 700"
      width={size}
      height={size}
      className={className}
      {...rest}
    >
      <defs>
        <linearGradient
          id={grad2Id}
          gradientTransform="rotate(-150, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
        >
          <stop stopColor="#207176" stopOpacity="1" offset="0%" />
          <stop stopColor="rgba(255,255,255,0)" stopOpacity="0" offset="100%" />
        </linearGradient>

        <linearGradient
          id={grad3Id}
          gradientTransform="rotate(150, 0.5, 0.5)"
          x1="50%"
          y1="0%"
          x2="50%"
          y2="100%"
        >
          <stop stopColor="#ffd700" stopOpacity="1" offset="0%" />
          <stop stopColor="rgba(255,255,255,0)" stopOpacity="0" offset="100%" />
        </linearGradient>

        <filter
          id={filterId}
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.64"
            numOctaves={2}
            seed={2}
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          />
          <feColorMatrix
            type="saturate"
            values="0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="colormatrix"
          />
          <feComponentTransfer
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="colormatrix"
            result="componentTransfer"
          >
            <feFuncR type="linear" slope={3} />
            <feFuncG type="linear" slope={3} />
            <feFuncB type="linear" slope={3} />
          </feComponentTransfer>
          <feColorMatrix
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="componentTransfer"
            result="colormatrix2"
            type="matrix"
            values={`1 0 0 0 0
                     0 1 0 0 0
                     0 0 1 0 0
                     0 0 0 19 -11`}
          />
        </filter>
      </defs>

      <g>
        <rect width="100%" height="100%" fill="#ffd7001a" />
        <rect width="100%" height="100%" fill={`url(#${grad3Id})`} />
        <rect width="100%" height="100%" fill={`url(#${grad2Id})`} />
        <rect
          width="100%"
          height="100%"
          fill="transparent"
          filter={`url(#${filterId})`}
          opacity={1}
          style={{ mixBlendMode: 'soft-light' as const }}
        />
      </g>
    </svg>
  );
};

export default Pattern;
