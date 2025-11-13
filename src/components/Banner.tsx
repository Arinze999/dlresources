// components/Banner.tsx
import React from 'react';
import Image from 'next/image';

export interface BannerProps {
  /** Main heading text shown on top of the banner */
  title: string;
  /** Background image for the banner */
  imageSrc: string;
  /** Optional extra classes for outer wrapper (margins, rounded, etc.) */
  className?: string;
}

export const Banner: React.FC<BannerProps> = ({
  title,
  imageSrc,
  className = '',
}) => {
  return (
    <section
      className={`
        group relative w-full overflow-hidden
        h-30  md:h-40 lg:h-50
        ${className}
      `}
    >
      {/* Background image */}
      <Image
        src={imageSrc}
        alt={title}
        quality={100}
        fill
        priority={false}
        sizes="100vw"
        className="
          object-cover
          transition-transform duration-700 ease-out
          group-hover:scale-105
        "
      />

      {/* Dark overlay */}
      <div
        className="
          pointer-events-none
          absolute inset-0
          bg-black/40
          transition-colors duration-700 ease-out
          group-hover:bg-black/60
        "
      />

      {/* Content */}
      <div className="relative z-10 flex h-full w-full p-4">
        <h1
          className="
            font-bold text-white
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-lora
            leading-tight
          "
        >
          {title}
        </h1>
      </div>
    </section>
  );
};

export default Banner;
