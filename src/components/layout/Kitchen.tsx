'use client';

import React from 'react';
import BlogCard from '../cards/BlogCard';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG } from '@/routes/routes';
import { ArrowRight } from '../icons/ArrowRight';
import { useBlogContext } from '@/context/BlogContext';

const Kitchen = () => {
  const { totalPosts, blogPosts } = useBlogContext();

  const firstThree = blogPosts.slice(0, 3);

  const isEmpty = totalPosts === 0;

  if (isEmpty) return <div></div>;

  return (
    <div className="default-padding bg-myGray6 relative -mt-1 pt-10 lg:pt-0 pb-30 lg:pb-40 flex flex-col gap-12 justify-center items-center">
      <h3 className="text-darkgreen2 general-title font-rubik">
        From our Kitchen
      </h3>

      <section className="max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {firstThree.map((post, index) => (
            <div
              key={post.slug}
              className={
                index === 2
                  ? 'sm:col-span-2 sm:flex sm:justify-center lg:col-span-1'
                  : ''
              }
            >
              <BlogCard
                key={post.slug}
                imageSrc={
                  post.coverImage?.fields?.file?.url
                    ? `https:${post.coverImage.fields.file.url}`
                    : ''
                }
                title={post.title}
                excerpt={post.excerpt}
                date={post.publishedAt}
                readMoreHref={`/blog/${post.slug}`}
                className="w-full md:max-w-sm"
              />
            </div>
          ))}
        </div>
      </section>

      <div className="absolute left-20 top-40 opacity-20 -rotate-40">
        <Image src="/images/s1.png" alt="" height={100} width={100} />
      </div>
      <div className="absolute right-20 top-0 opacity-20 -rotate-40">
        <Image src="/images/s4.png" alt="" height={100} width={100} />
      </div>
      <div className="absolute md:left-90 left-20 bottom-5 opacity-20 rotate-40 min-w-[70px] lg:hidden">
        <Image src="/images/s3.png" alt="" height={100} width={100} />
      </div>

      <div>
        <Link
          href={`/${BLOG}`}
          className="text-darkgreen flex gap-3 items-center"
        >
          View our Blogs <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Kitchen;
