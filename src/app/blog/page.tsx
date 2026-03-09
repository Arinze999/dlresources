import BlogClient from '@/components/BlogClient';
import React, { Suspense } from 'react';

const Blog = () => {
  return (
    <Suspense fallback={'Loading...'}>
      <BlogClient />
    </Suspense>
  );
};

export default Blog;
