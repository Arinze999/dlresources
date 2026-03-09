'use client';

import Image from 'next/image';

type BlogCardProps = {
  imageSrc: string;
  title: string;
  excerpt: string;
  date: string;
  readMoreHref: string; 
  badge?: string;
  className?: string;
};

export default function BlogCard({
  imageSrc,
  title,
  excerpt,
  date,
  readMoreHref,
  badge,
  className = '',
}: BlogCardProps) {
  return (
    <article
      className={`group w-full h-80 overflow-hidden rounded-2xl border border-gray-100/10 bg-white shadow-sm transition hover:shadow-md sm:max-w-105 ${className}`}
      aria-label={title}
    >
      {/* Image */}
      <div className="relative aspect-video h-[45%] w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          sizes="(min-width:1024px) 25vw, 50vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.05]"
          priority={false}
        />
        {badge ? (
          <span className="absolute left-3 top-3 rounded-full bg-black/70 px-3 py-1 text-xs font-medium text-white">
            {badge}
          </span>
        ) : null}
      </div>

      {/* Text */}
      <div className="flex flex-col justify-between h-[55%] gap-2 p-4">
        <h3 className="text-base font-semibold leading-tight line-clamp-2 md:text-lg">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">{excerpt}</p>

        <div className="mt-3 flex items-center justify-between text-sm text-gray-700">
          <span className="text-gray-500">{date}</span>
          <a
            href={readMoreHref}
            className="font-medium text-darkgreen hover:text-darkgreen2 transition"
          >
            Read more →
          </a>
        </div>
      </div>
    </article>
  );
}
