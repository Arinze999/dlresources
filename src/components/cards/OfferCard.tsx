'use client';

import * as React from 'react';
import Button from '../Button';

type OfferCardProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // pass an SVG component
  title: string;
  description: string;
  perks: string[];
  buttonText: string;
  className?: string;
  onButtonClick?: () => void;
};

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" {...props}>
    <path
      fillRule="evenodd"
      d="M16.707 5.293a1 1 0 0 1 0 1.414l-7.25 7.25a1 1 0 0 1-1.414 0L3.293 9.207a1 1 0 1 1 1.414-1.414l3.043 3.043 6.543-6.543a1 1 0 0 1 1.414 0z"
      clipRule="evenodd"
    />
  </svg>
);

const OfferCard: React.FC<OfferCardProps> = ({
  Icon,
  title,
  description,
  perks,
  buttonText,
  className,
}) => {
  return (
    <article
      className={[
        'w-full rounded-2xl p-5 sm:p-6 text-white shadow-sm',
        'ring-1 ring-white/10',
        'transition hover:shadow-md',
        className || '',
      ].join(' ')}
      aria-label={title}
    >
      {/* Top row: big icon + title/description to the right */}
      <div className="flex items-start gap-4">
        <div className="shrink-0">
          {/* Large icon; adjust size as desired */}
          <Icon className="h-16 w-16 opacity-95" />
        </div>

        <div className="min-w-0">
          <h3 className="text-lg font-semibold leading-tight">{title}</h3>
          <p className="mt-1 text-sm/6 text-white/90">{description}</p>
        </div>
      </div>

      {/* Perks list */}
      <ul className="mt-4 space-y-4">
        {perks.map((perk, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckIcon className="mt-1 h-4 w-4 text-white" />
            <span className="text-sm text-white/95">{perk}</span>
          </li>
        ))}
      </ul>

      {/* CTA button */}
      <div className="mt-5">
        {/* Your button takes a `text` prop; it inherits white text requirement */}
        <Button
          text={buttonText}
          //   onClick={onButtonClick}
          className="text-white! bg-black/30! hover:bg-black/40! focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40"
        />
      </div>
    </article>
  );
};

export default OfferCard;
