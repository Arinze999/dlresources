'use client';

import Image from 'next/image';
import React from 'react';

type FloaterProps = {
  imageSrc: string;
  /** absolute offset from the left (e.g., '10%', 24, '2rem') */
  positionLeft?: number | string;
  /** absolute offset from the right (e.g., '10%', 24, '2rem') */
  positionRight?: number | string;
  /** optional size (applies to width & height) */
  size?: number | string;
  /** movement direction (allow only ONE of these to be true) */
  fromLeft?: boolean;
  fromRight?: boolean;
  fromUp?: boolean;
  fromDown?: boolean;
  alt?: string;
  className?: string;
};

const Floater: React.FC<FloaterProps> = ({
  imageSrc,
  positionLeft,
  positionRight,
  size = '1.25rem', // same as w-5/h-5 default
  fromLeft,
  fromRight,
  fromUp,
  fromDown,
  alt = 'floater',
  className = '',
}) => {
  // pick at most one direction
  const dir =
    (fromLeft && 'left') ||
    (fromRight && 'right') ||
    (fromUp && 'up') ||
    (fromDown && 'down') ||
    'none';

  const style: React.CSSProperties = {
    left: positionLeft !== undefined ? positionLeft : undefined,
    right: positionRight !== undefined ? positionRight : undefined,
    width: size,
    height: size,
  };

  const animClass =
    dir === 'left'
      ? 'anim-left'
      : dir === 'right'
      ? 'anim-right'
      : dir === 'up'
      ? 'anim-up'
      : dir === 'down'
      ? 'anim-down'
      : 'anim-fade';

  return (
    <div
      style={style}
      className={`absolute aspect-square overflow-hidden ${animClass} ${className}`}
    >
      <Image
        src={imageSrc}
        alt={alt}
        fill
        quality={85}
        priority
        className="object-cover transition-transform duration-500 ease-out will-change-transform"
      />

      {/* animations */}
      <style jsx>{`
        /* base: fade in/out forever */
        @keyframes fadePulse {
          0% {
            opacity: 0;
          }
          50% {
            opacity: 0.6;
          }
          100% {
            opacity: 0;
          }
        }
        /* directional: slide slightly while fading, alternate for back/forth */
        @keyframes slideLeft {
          from {
            transform: translateX(-24px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 0.6;
          }
        }
        @keyframes slideRight {
          from {
            transform: translateX(24px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 0.6;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(-24px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 0.6;
          }
        }
        @keyframes slideDown {
          from {
            transform: translateY(24px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 0.6;
          }
        }

        .anim-fade {
          animation: fadePulse 3s ease-in-out infinite;
        }
        .anim-left {
          animation: slideLeft 5s ease-in-out infinite alternate;
        }
        .anim-right {
          animation: slideRight 6s ease-in-out infinite alternate;
        }
        .anim-up {
          animation: slideUp 5s ease-in-out infinite alternate;
        }
        .anim-down {
          animation: slideDown 7s ease-in-out infinite alternate;
        }
      `}</style>
    </div>
  );
};

export default Floater;
