'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS, INLINES, type Document } from '@contentful/rich-text-types';
import type { Asset } from 'contentful';
import type { BlogPost } from '@/types/blogPost.types';

type BlogPostViewProps = {
  blog: BlogPost;
};

const BlogPostView = ({ blog }: BlogPostViewProps) => {
  const richTextOptions = useMemo(
    () => ({
      renderNode: {
        [BLOCKS.HEADING_1]: (_node: unknown, children: React.ReactNode) => (
          <h1 className="mt-8 mb-4 text-3xl font-bold text-darkgreen2">{children}</h1>
        ),
        [BLOCKS.HEADING_2]: (_node: unknown, children: React.ReactNode) => (
          <h2 className="mt-8 mb-4 text-2xl font-semibold text-darkgreen2">{children}</h2>
        ),
        [BLOCKS.HEADING_3]: (_node: unknown, children: React.ReactNode) => (
          <h3 className="mt-6 mb-3 text-xl font-semibold text-darkgreen2">{children}</h3>
        ),
        [BLOCKS.PARAGRAPH]: (_node: unknown, children: React.ReactNode) => (
          <p className="mb-5 leading-8 text-gray-700">{children}</p>
        ),
        [BLOCKS.UL_LIST]: (_node: unknown, children: React.ReactNode) => (
          <ul className="mb-5 ml-6 list-disc space-y-2 text-gray-700">{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (_node: unknown, children: React.ReactNode) => (
          <ol className="mb-5 ml-6 list-decimal space-y-2 text-gray-700">{children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (_node: unknown, children: React.ReactNode) => (
          <li className="leading-8">{children}</li>
        ),
        [BLOCKS.QUOTE]: (_node: unknown, children: React.ReactNode) => (
          <blockquote className="my-6 border-l-4 border-darkgreen2 pl-4 italic text-gray-600">
            {children}
          </blockquote>
        ),
        [BLOCKS.HR]: () => <hr className="my-8 border-gray-200" />,
        [BLOCKS.EMBEDDED_ASSET]: (node: { data?: { target?: Asset } }) => {
          const asset = node?.data?.target;
          const file = asset?.fields?.file;

          if (!file || typeof file === 'string' || !('url' in file)) {
            return null;
          }

          const src = `https:${file.url}`;
          const alt =
            typeof asset.fields?.title === 'string' ? asset.fields.title : 'Embedded image';

          return (
            <div className="my-8">
              <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
                <Image src={src} alt={alt} fill className="object-cover" />
              </div>
            </div>
          );
        },
        [INLINES.HYPERLINK]: (
          node: { data?: { uri?: string } },
          children: React.ReactNode
        ) => (
          <a
            href={node.data?.uri}
            target="_blank"
            rel="noopener noreferrer"
            className="text-darkgreen2 underline underline-offset-4"
          >
            {children}
          </a>
        ),
      },
    }),
    []
  );

  const coverImageUrl =
    blog.coverImage?.fields?.file &&
    typeof blog.coverImage.fields.file !== 'string' &&
    'url' in blog.coverImage.fields.file
      ? `https:${blog.coverImage.fields.file.url}`
      : null;

  return (
    <article className="mx-auto flex w-full max-w-4xl flex-col gap-6 px-4 py-10">
      {coverImageUrl && (
        <div className="relative aspect-video w-full overflow-hidden rounded-2xl">
          <Image
            src={coverImageUrl}
            alt={blog.title}
            fill
            priority
            className="object-cover"
          />
        </div>
      )}

      <header className="flex flex-col gap-3">
        <h1 className="text-darkgreen2 general-title2 font-lora">{blog.title}</h1>

        <div className="flex flex-wrap items-center gap-3 text-sm text-gray-500">
          <span>{blog.publishedAt}</span>
          {blog.authorName ? <span>•</span> : null}
          {blog.authorName ? <span>{blog.authorName}</span> : null}
        </div>

        {blog.excerpt ? (
          <p className="text-lg leading-8 text-gray-700">{blog.excerpt}</p>
        ) : null}
      </header>

      <section className="prose prose-neutral max-w-none">
        {documentToReactComponents(blog.body as Document, richTextOptions)}
      </section>
    </article>
  );
};

export default BlogPostView;