'use client';

import BlogCard from './cards/BlogCard';
import Pagination from './Pagination';
import { BlogProvider, useBlogContext } from '@/context/BlogContext';

const BlogContent = () => {
  const { paginatedBlogPosts, totalPages, loading, error } = useBlogContext();

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <>
      <h3 className="text-darkgreen2 general-title2 font-lora text-center">
        Stay Updated with the latest from our Blog
      </h3>

      <section className="w-full">
        <div className="grid grid-cols-1 place-items-center gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {paginatedBlogPosts.map((post) => (
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
          ))}
        </div>
      </section>

      <Pagination totalPages={totalPages} />
    </>
  );
};

const BlogClient = () => {
  return (
    <BlogProvider postsPerPage={6}>
      <BlogContent />
    </BlogProvider>
  );
};

export default BlogClient;
