import * as React from 'react';

type WavyProps = React.SVGProps<SVGSVGElement> & {
  /** Optional square size. If omitted, it will stretch via className (e.g., w-full h-auto). */
  size?: number | string;
  /** Prefix to avoid ID collisions when multiple instances are rendered. */
  idPrefix?: string;
};

export const Wavy: React.FC<WavyProps> = ({
  size,
  idPrefix = 'wvy',
  className,
  ...rest
}) => {
  const gradId = `${idPrefix}-oooscillate-grad`;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 1422 800"
      width={size}
      height={size}
      className={className ?? 'w-full h-auto'}
      {...rest}
    >
      <defs>
        <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id={gradId}>
          <stop stopColor="hsl(183, 18%, 36%)" stopOpacity="1" offset="0%" />
          <stop stopColor="#ffd7001a" stopOpacity="1" offset="100%" />
        </linearGradient>
      </defs>

      <g strokeWidth={1} stroke={`url(#${gradId})`} fill="none" strokeLinecap="round">
        <path d="M 0 418 Q 355.5 285 711 400 Q 1066.5 515 1422 418" strokeDasharray="1 1" opacity={1.0} />
        <path d="M 0 396 Q 355.5 285 711 400 Q 1066.5 515 1422 396" strokeDasharray="3 2" opacity={0.95} />
        <path d="M 0 374 Q 355.5 285 711 400 Q 1066.5 515 1422 374" strokeDasharray="4 4" opacity={0.89} />
        <path d="M 0 352 Q 355.5 285 711 400 Q 1066.5 515 1422 352" strokeDasharray="5 4" opacity={0.84} />
        <path d="M 0 330 Q 355.5 285 711 400 Q 1066.5 515 1422 330" strokeDasharray="2 2" opacity={0.79} />
        <path d="M 0 308 Q 355.5 285 711 400 Q 1066.5 515 1422 308" strokeDasharray="6 5" opacity={0.74} />
        <path d="M 0 286 Q 355.5 285 711 400 Q 1066.5 515 1422 286" strokeDasharray="2 4" opacity={0.68} />
        <path d="M 0 264 Q 355.5 285 711 400 Q 1066.5 515 1422 264" strokeDasharray="3 3" opacity={0.63} />
        <path d="M 0 242 Q 355.5 285 711 400 Q 1066.5 515 1422 242" strokeDasharray="5 3" opacity={0.58} />
        <path d="M 0 220 Q 355.5 285 711 400 Q 1066.5 515 1422 220" strokeDasharray="4 0" opacity={0.53} />
        <path d="M 0 198 Q 355.5 285 711 400 Q 1066.5 515 1422 198" strokeDasharray="0 6" opacity={0.47} />
        <path d="M 0 176 Q 355.5 285 711 400 Q 1066.5 515 1422 176" strokeDasharray="4 4" opacity={0.42} />
        <path d="M 0 154 Q 355.5 285 711 400 Q 1066.5 515 1422 154" strokeDasharray="3 5" opacity={0.37} />
        <path d="M 0 132 Q 355.5 285 711 400 Q 1066.5 515 1422 132" strokeDasharray="0 6" opacity={0.31} />
        <path d="M 0 110 Q 355.5 285 711 400 Q 1066.5 515 1422 110" strokeDasharray="6 4" opacity={0.26} />
        <path d="M 0 88 Q 355.5 285 711 400 Q 1066.5 515 1422 88" strokeDasharray="5 6" opacity={0.21} />
        <path d="M 0 66 Q 355.5 285 711 400 Q 1066.5 515 1422 66" strokeDasharray="2 2" opacity={0.16} />
        <path d="M 0 44 Q 355.5 285 711 400 Q 1066.5 515 1422 44" strokeDasharray="6 4" opacity={0.10} />
      </g>
    </svg>
  );
};

export default Wavy;
