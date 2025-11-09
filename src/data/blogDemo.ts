export type BlogDemo = {
  id: string;
  imageSrc: string;
  title: string;
  excerpt: string;
  date: string;
  readMoreHref: string;
  badge?: string;
};

export const blogDemo: BlogDemo[] = [
  {
    id: 'post-1',
    imageSrc: '/images/blog1.jpeg',
    title: 'How to Choose the Perfect Menu for Your Event',
    excerpt:
      'Planning an event can be overwhelming, but selecting the right dishes makes all the difference. Discover expert tips for balancing taste, budget, and presentation.',
    date: 'November 9, 2025',
    readMoreHref: '/blog/perfect-event-menu',
    badge: 'Catering Tips',
  },
  {
    id: 'post-2',
    imageSrc: '/images/blog2.jpeg',
    title: 'Behind the Scenes: The Art of Small Chops',
    excerpt:
      'Ever wondered what goes into those delicious bite-sized treats? We share the preparation secrets and the creativity that make our small chops so irresistible.',
    date: 'October 22, 2025',
    readMoreHref: '/blog/art-of-small-chops',
    badge: 'Kitchen Stories',
  },
  {
    id: 'post-3',
    imageSrc: '/images/blog3.jpeg',
    title: '5 Essentials for a Stress-Free Celebration',
    excerpt:
      'Hosting doesn’t have to be stressful! From setup to serving, learn five practical steps to ensure your celebration runs smoothly and your guests leave smiling.',
    date: 'September 30, 2025',
    readMoreHref: '/blog/stress-free-celebration',
    badge: 'Event Planning',
  },
];
