'use client';

import React, { useMemo } from 'react';
import BlogCard from './cards/BlogCard';
import { getBlogPage } from '@/data/blogDemo';
import { useSearchParams } from 'next/navigation';
import Pagination from './Pagination';

const BlogClient = () => {
  const searchParams = useSearchParams();

  const pageParam = Number(searchParams.get('page') || '1');

  // Build the page result (9 per page)
  const { items, totalPages } = useMemo(
    () =>
      getBlogPage({
        page: Number.isNaN(pageParam) ? 1 : pageParam,
        pageSize: 6, // <= requested
      }),
    [pageParam]
  );

  return (
    <>
      <h3 className="text-darkgreen2 general-title2 font-lora text-center">
        Stay Updated with the latest from our Blog
      </h3>

      <section className="w-full">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 place-items-center">
          {items.map((post) => (
            <BlogCard
              key={post.id}
              imageSrc={post.imageSrc}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readMoreHref={post.readMoreHref}
              badge={post.badge}
              className="w-full md:max-w-sm"
            />
          ))}
        </div>
      </section>

      {/* Pager */}
      <Pagination totalPages={totalPages} />
    </>
  );
};

export default BlogClient;
