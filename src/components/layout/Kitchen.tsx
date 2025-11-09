import React from 'react';
import { blogDemo } from '@/data/blogDemo';
import BlogCard from '../cards/BlogCard';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG } from '@/routes/routes';
import { ArrowRight } from '../icons/ArrowRight';

const Kitchen = () => {
  return (
    <div className="default-padding bg-myGray6 relative -mt-1 pt-10 lg:pt-0 pb-30 lg:pb-40 flex flex-col gap-12 justify-center items-center">
      <h3 className="text-darkgreen2 general-title font-rubik">
        From our Kitchen
      </h3>

      <section className="max-w-6xl">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {blogDemo.map((post) => (
            <BlogCard
              key={post.id}
              imageSrc={post.imageSrc}
              title={post.title}
              excerpt={post.excerpt}
              date={post.date}
              readMoreHref={post.readMoreHref}
              badge={post.badge}
            />
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
        <Link href={`/${BLOG}`} className="text-darkgreen flex gap-3 items-center">
          View our Blogs <ArrowRight />
        </Link>
      </div>
    </div>
  );
};

export default Kitchen;
