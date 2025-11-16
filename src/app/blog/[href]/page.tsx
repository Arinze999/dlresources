'use client';

import { useParams } from 'next/navigation';
import React from 'react';
import { type BlogDemo, blogDemo } from '@/data/blogDemo';

const Page = () => {
  const params = useParams<{ href: string }>();

  const rawHref = params?.href;
  const decodedHref = rawHref ? decodeURIComponent(rawHref) : '';

  // Find blog by matching the last segment/slug
  const blog: BlogDemo | undefined = blogDemo.find((p) =>
    p.readMoreHref.endsWith(`/${decodedHref}`)
  );

  return (
    <div className='flex flex-col items-center justify-center gap-4'>
      <h3 className="text-darkgreen2 general-title2 font-lora text-center">
        {blog?.title ?? 'Blog post not found'}
      </h3>
      <p className="text-gray-500">{blog?.date}</p>
    </div>
  );
};

export default Page;
