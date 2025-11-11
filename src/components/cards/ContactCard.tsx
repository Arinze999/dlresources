'use client';

import React from 'react';

type ContactCardProps = {
  Icon: React.FC<React.SVGProps<SVGSVGElement>>; // any svg icon component
  title: string;
  description: string;
  buttonText: string;
  color?: 'green' | 'yellow' | 'blue';
  className?: string;
};

export default function ContactCard({
  Icon,
  title,
  description,
  buttonText,
  color = 'green',
  className = '',
}: ContactCardProps) {
  // Tailwind color mapping
  const colorMap: Record<typeof color, string> = {
    green: 'text-darkgreen',
    yellow: 'text-yellow',
    blue: 'text-sky-600',
  };

  const activeColor = colorMap[color];

  return (
    <div
      className={`w-full flex flex-col gap-4 rounded-2xl border border-gray-200 p-6 text-center bg-transparent ${className}`}
    >
      {/* Icon */}
      <div className={`flex justify-center ${activeColor}`}>
        <Icon className="w-10 h-10" />
      </div>

      {/* Texts */}
      <h3 className={`text-lg font-semibold ${activeColor}`}>{title}</h3>
      <p className="text-gray-500 text-sm">{description}</p>

      {/* Button */}
      <button
        type="button"
        className={`mt-2 inline-block rounded-full border px-5 py-2 text-sm font-medium transition hover:opacity-80 ${activeColor} border-current`}
      >
        {buttonText}
      </button>
    </div>
  );
}
