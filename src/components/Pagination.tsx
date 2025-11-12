'use client';

import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

type PaginationProps = {
  totalPages: number;
  className?: string;
  siblingCount?: number; // how many numbers to show around current (default 1)
};

export default function Pagination({
  totalPages,
  className,
  siblingCount = 1,
}: PaginationProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageParam = Number(searchParams.get('page') || '1');
  const current = Number.isNaN(pageParam)
    ? 1
    : Math.max(1, Math.min(pageParam, totalPages));

  function pushPage(p: number) {
    const sp = new URLSearchParams(searchParams.toString());
    if (p <= 1) sp.delete('page');
    else sp.set('page', String(p));
    router.push(`?${sp.toString()}`);
  }

  if (totalPages <= 1) return null;

  // Build a small range with ellipses
  const pages: (number | '...')[] = [];
  const first = 1;
  const last = totalPages;
  const start = Math.max(first, current - siblingCount);
  const end = Math.min(last, current + siblingCount);

  if (start > first) {
    pages.push(first);
    if (start > first + 1) pages.push('...');
  }

  for (let p = start; p <= end; p++) pages.push(p);

  if (end < last) {
    if (end < last - 1) pages.push('...');
    pages.push(last);
  }

  return (
    <nav className={className ?? 'mt-6 flex items-center justify-center gap-2'}>
      <button
        onClick={() => pushPage(current - 1)}
        disabled={current === 1}
        className={`px-3 py-1.5 rounded border border-darkgreen2 text-sm ${
          current === 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-100'
        }`}
        aria-label="Previous page"
      >
        Prev
      </button>

      {pages.map((p, i) =>
        p === '...' ? (
          <span key={`dots-${i}`} className="px-2 text-gray-500 select-none">
            …
          </span>
        ) : (
          <button
            key={p}
            onClick={() => pushPage(p)}
            className={`px-3 py-1.5 rounded border text-sm ${
              p === current
                ? 'bg-darkgreen2 text-white'
                : 'hover:bg-gray-100'
            }`}
            aria-current={p === current ? 'page' : undefined}
          >
            {p}
          </button>
        )
      )}

      <button
        onClick={() => pushPage(current + 1)}
        disabled={current === totalPages}
        className={`px-3 py-1.5 rounded border text-sm ${
          current === totalPages
            ? 'cursor-not-allowed opacity-50'
            : 'hover:bg-gray-100'
        }`}
        aria-label="Next page"
      >
        Next
      </button>
    </nav>
  );
}
