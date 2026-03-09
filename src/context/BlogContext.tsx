// context/BlogContext.tsx
'use client';

import React, { createContext, useContext, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { useBlogPosts } from '@/hooks/useBlogPosts';
import type { BlogPost } from '@/types/blogPost.types';

type BlogContextType = {
  blogPosts: BlogPost[];
  paginatedBlogPosts: BlogPost[];
  loading: boolean;
  error: string | null;
  currentPage: number;
  totalPages: number;
  postsPerPage: number;
  totalPosts: number;
};

const BlogContext = createContext<BlogContextType | null>(null);

type BlogProviderProps = {
  children: React.ReactNode;
  postsPerPage?: number;
};

export const BlogProvider = ({
  children,
  postsPerPage = 6,
}: BlogProviderProps) => {
  const searchParams = useSearchParams();
  const { blogPosts, loading, error } = useBlogPosts();

  const rawPage = Number(searchParams.get('page') || '1');
  const totalPosts = blogPosts.length;
  const totalPages = Math.max(1, Math.ceil(totalPosts / postsPerPage));

  const currentPage = Number.isNaN(rawPage)
    ? 1
    : Math.max(1, Math.min(rawPage, totalPages));

  const paginatedBlogPosts = useMemo(() => {
    const startIndex = (currentPage - 1) * postsPerPage;
    const endIndex = startIndex + postsPerPage;
    return blogPosts.slice(startIndex, endIndex);
  }, [blogPosts, currentPage, postsPerPage]);

  const value = useMemo(
    () => ({
      blogPosts,
      paginatedBlogPosts,
      loading,
      error,
      currentPage,
      totalPages,
      postsPerPage,
      totalPosts,
    }),
    [
      blogPosts,
      paginatedBlogPosts,
      loading,
      error,
      currentPage,
      totalPages,
      postsPerPage,
      totalPosts,
    ]
  );

  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export const useBlogContext = () => {
  const context = useContext(BlogContext);

  if (!context) {
    throw new Error('useBlogContext must be used within a BlogProvider');
  }

  return context;
};