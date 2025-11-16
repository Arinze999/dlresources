import Banner from '@/components/Banner';
import type React from 'react';
export default function BlogsLayout({
  children,
}: // modal,
{
  children: React.ReactNode;
  // modal: React.ReactNode;
}) {
  return (
    <div className="default-margin relative py-10 lg:py-20 flex flex-col gap-20 min-h-screen">
      <Banner
        title="Blog"
        imageSrc="/images/land5.png"
        className="rounded-3xl"
      />
      {children}
    </div>
  );
}
