import type { EntryFieldTypes, EntrySkeletonType, Asset } from 'contentful';
import type { Document } from '@contentful/rich-text-types';

export type BlogPostFields = {
  title: EntryFieldTypes.Text;
  slug: EntryFieldTypes.Text;
  excerpt: EntryFieldTypes.Text;
  body: EntryFieldTypes.RichText;
  publishedAt: EntryFieldTypes.Date;
  authorName: EntryFieldTypes.Text;
  coverImage: EntryFieldTypes.AssetLink;
  badge: EntryFieldTypes.Text;
};

export type BlogPostSkeleton = EntrySkeletonType<BlogPostFields, 'blogPost'>;

export type BlogPost = {
  title: string;
  slug: string;
  excerpt: string;
  body: Document;
  publishedAt: string;
  authorName: string;
  coverImage: Asset | null;
  badge: string;
};
