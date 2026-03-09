import type { Asset } from 'contentful';
import { contentfulClient } from './client';
import type { BlogPost, BlogPostSkeleton } from '@/types/blogPost.types';

export const getBlogPosts = async (): Promise<BlogPost[]> => {
  const response = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    order: ['-fields.publishedAt'],
    include: 1,
  });

  return response.items.map((entry) => ({
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    body: entry.fields.body,
    publishedAt: entry.fields.publishedAt,
    authorName: entry.fields.authorName,
    coverImage: (entry.fields.coverImage as Asset | undefined) ?? null,
    badge: entry.fields.badge,
  }));
};

export const getSingleBlogPost = async (
  slug: string,
): Promise<BlogPost | null> => {
  const response = await contentfulClient.getEntries<BlogPostSkeleton>({
    content_type: 'blogPost',
    'fields.slug': slug,
    limit: 1,
    include: 1,
  });

  const entry = response.items[0];

  if (!entry) return null;

  return {
    title: entry.fields.title,
    slug: entry.fields.slug,
    excerpt: entry.fields.excerpt,
    body: entry.fields.body,
    publishedAt: entry.fields.publishedAt,
    authorName: entry.fields.authorName,
    coverImage: (entry.fields.coverImage as Asset | undefined) ?? null,
    badge: entry.fields.badge,
  };
};
