'use client';

import { useEffect, useState } from 'react';
import { getBlogPosts } from '@/lib/contentful/blogPosts';
import type { BlogPost } from '@/types/blogPost.types';

export const useBlogPosts = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        setLoading(true);
        const data = await getBlogPosts();
        setBlogPosts(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : 'Failed to fetch blog posts',
        );
      } finally {
        setLoading(false);
      }
    };

    fetchBlogPosts();
  }, []);

  return { blogPosts, loading, error };
};
