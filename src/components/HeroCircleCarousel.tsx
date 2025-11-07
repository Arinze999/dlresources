'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const imgs = ['/images/chk1.png','/images/chk2.png','/images/chk3.png','/images/chk4.png','/images/chk5.png','/images/chk6.png'];

export default function HeroCircleCarousel() {
  const [idx, setIdx] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);

  useEffect(() => {
    const id = setInterval(() => {
      setPrev(idx);
      setIdx((i) => (i + 1) % imgs.length);
    }, 6000); // change speed here
    return () => clearInterval(id);
  }, [idx]);

  return (
    <div className="relative aspect-square w-[75%] max-w-160 rounded-full overflow-hidden carousel-stage">
      {prev !== null && (
        <div key={`prev-${prev}`} className="carousel-item carousel-exit">
          <Image
            src={imgs[prev]}
            alt="dish"
            fill
            sizes="(min-width:1536px) 35vw, (min-width:1024px) 45vw, 80vw"
            quality={85}
            priority
            className="object-cover will-change-transform pointer-events-none"
          />
        </div>
      )}

      <div key={`curr-${idx}`} className="carousel-item carousel-enter">
        <Image
          src={imgs[idx]}
          alt="dish"
          fill
          sizes="(min-width:1536px) 35vw, (min-width:1024px) 45vw, 80vw"
          quality={85}
          priority
          className="object-cover transition-transform duration-500 ease-out will-change-transform hover:scale-110 pointer-events-none"
        />
      </div>
    </div>
  );
}
