import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogPostView from '@/components/BlogPostView';
import { getSingleBlogPost } from '@/lib/contentful/blogPosts';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const blog = await getSingleBlogPost(decodedSlug);

  if (!blog) {
    return {
      title: 'Blog post not found | Deola Resources',
      description: 'The requested blog post could not be found.',
    };
  }

  const imageUrl =
    blog.coverImage?.fields?.file &&
    typeof blog.coverImage.fields.file !== 'string' &&
    'url' in blog.coverImage.fields.file
      ? `https:${blog.coverImage.fields.file.url}`
      : undefined;

  return {
    title: `${blog.title} | Deola Resources Blog`,
    description: blog.excerpt || 'Welcome to our Blog',
    openGraph: {
      title: blog.title,
      description: blog.excerpt || 'Welcome to our Blog',
      images: imageUrl ? [{ url: imageUrl, alt: blog.title }] : undefined,
      type: 'article',
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const decodedSlug = decodeURIComponent(slug);

  const blog = await getSingleBlogPost(decodedSlug);

  if (!blog) {
    notFound();
  }

  return <BlogPostView blog={blog} />;
}