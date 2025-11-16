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
  {
    id: 'post-4',
    imageSrc: '/images/blog4.jpeg',
    title: 'How to Calculate Food Portions for Your Guest List',
    excerpt:
      'Avoid running out of food or wasting trays. Learn simple ways to estimate portions for different event types and guest sizes.',
    date: 'September 10, 2025',
    readMoreHref: '/blog/food-portions-for-guests',
    badge: 'Catering Tips',
  },
  {
    id: 'post-5',
    imageSrc: '/images/blog5.jpeg',
    title: 'Buffet vs Plated Service: Which Is Better for Your Event?',
    excerpt:
      'Trying to decide between buffet and plated service? We break down the pros and cons of each style to help you choose what fits your occasion.',
    date: 'August 25, 2025',
    readMoreHref: '/blog/buffet-vs-plated',
    badge: 'Event Planning',
  },
  {
    id: 'post-6',
    imageSrc: '/images/blog6.jpeg',
    title: 'Creating a Memorable Food Experience on a Budget',
    excerpt:
      'Yes, you can impress your guests without overspending. Here are smart ways to get maximum flavor and presentation on a realistic budget.',
    date: 'August 5, 2025',
    readMoreHref: '/blog/memorable-food-on-budget',
    badge: 'Budget Friendly',
  },
  {
    id: 'post-7',
    imageSrc: '/images/blog1.jpeg',
    title: 'Why Jollof Rice Is Always the Star of the Party',
    excerpt:
      'From the aroma to the color, jollof rice has a way of stealing the show. We explore why it remains a party favorite across generations.',
    date: 'July 20, 2025',
    readMoreHref: '/blog/jollof-rice-star',
    badge: 'Culture & Food',
  },
  {
    id: 'post-8',
    imageSrc: '/images/blog2.jpeg',
    title: 'Planning a Last-Minute Event? Here’s What to Prioritize',
    excerpt:
      'Short notice does not have to mean chaos. Learn what to focus on first when planning an event in a rush.',
    date: 'July 2, 2025',
    readMoreHref: '/blog/last-minute-event',
    badge: 'Event Planning',
  },
  {
    id: 'post-9',
    imageSrc: '/images/blog3.jpeg',
    title: 'How to Pair Drinks with Nigerian Party Foods',
    excerpt:
      'From small chops to jollof rice, discover simple drink pairing ideas that elevate the entire experience for your guests.',
    date: 'June 18, 2025',
    readMoreHref: '/blog/drink-pairing-nigerian-foods',
    badge: 'Drink Pairing',
  },
  {
    id: 'post-10',
    imageSrc: '/images/blog4.jpeg',
    title: 'Common Catering Mistakes Hosts Make (and How to Avoid Them)',
    excerpt:
      'Running out of food, cold meals, and poor timing are avoidable. We share common mistakes and how to plan around them.',
    date: 'June 1, 2025',
    readMoreHref: '/blog/common-catering-mistakes',
    badge: 'Catering Tips',
  },
  {
    id: 'post-11',
    imageSrc: '/images/blog5.jpeg',
    title: 'How to Build a Kid-Friendly Menu Everyone Will Enjoy',
    excerpt:
      'Planning a party with children in mind? Learn how to design a menu that keeps kids happy without boring the adults.',
    date: 'May 15, 2025',
    readMoreHref: '/blog/kid-friendly-menu',
    badge: 'Family Events',
  },
  {
    id: 'post-12',
    imageSrc: '/images/blog6.jpeg',
    title: 'Balancing Traditional and Continental Dishes at Your Event',
    excerpt:
      'You do not have to choose one style over the other. Here’s how to mix Nigerian classics with continental favorites.',
    date: 'May 1, 2025',
    readMoreHref: '/blog/traditional-vs-continental',
    badge: 'Menu Design',
  },
  {
    id: 'post-13',
    imageSrc: '/images/blog1.jpeg',
    title: 'Why Presentation Matters Just as Much as Taste',
    excerpt:
      'Great food should also look inviting. We explain how plating and setup influence your guests’ experience.',
    date: 'April 20, 2025',
    readMoreHref: '/blog/food-presentation-matters',
    badge: 'Catering Tips',
  },
  {
    id: 'post-14',
    imageSrc: '/images/blog2.jpeg',
    title: 'Hosting an Intimate Dinner vs a Full Party',
    excerpt:
      'Not every celebration needs a crowd. Learn the differences in planning for intimate dinners versus large gatherings.',
    date: 'April 5, 2025',
    readMoreHref: '/blog/intimate-dinner-vs-party',
    badge: 'Event Planning',
  },
  {
    id: 'post-15',
    imageSrc: '/images/blog3.jpeg',
    title: 'How to Work with a Caterer and Get the Best Results',
    excerpt:
      'Communication is everything. Here are practical tips for working smoothly with your caterer from inquiry to event day.',
    date: 'March 22, 2025',
    readMoreHref: '/blog/work-with-caterer',
    badge: 'Client Guide',
  },
  {
    id: 'post-16',
    imageSrc: '/images/blog4.jpeg',
    title: 'Top 7 Finger Foods Your Guests Will Always Reach For',
    excerpt:
      'From small chops to mini sliders, we highlight finger foods that consistently disappear first from the trays.',
    date: 'March 8, 2025',
    readMoreHref: '/blog/top-finger-foods',
    badge: 'Small Chops',
  },
  {
    id: 'post-17',
    imageSrc: '/images/blog5.jpeg',
    title: 'Catering for Different Dietary Needs Without Stress',
    excerpt:
      'Vegan, vegetarian, and non-spicy preferences can exist in one menu. Learn how to accommodate different needs gracefully.',
    date: 'February 20, 2025',
    readMoreHref: '/blog/dietary-needs-catering',
    badge: 'Inclusive Menus',
  },
  {
    id: 'post-18',
    imageSrc: '/images/blog6.jpeg',
    title: 'Signs It’s Time to Outsource Food for Your Next Event',
    excerpt:
      'Cooking everything yourself is not always the best idea. Here are clear signs that hiring a caterer will save your time and sanity.',
    date: 'February 5, 2025',
    readMoreHref: '/blog/when-to-hire-caterer',
    badge: 'Host Tips',
  },
];

// ---------- Pagination helper (same logic style as getMenuPage, no shuffle, no filters) ----------

export type BlogPageParams = {
  page?: number;     // 1-based
  pageSize?: number; // default = 6
};

export function getBlogPage(params: BlogPageParams = {}) {
  const {
    page = 1,
    pageSize = 6,
  } = params;

  const total = blogDemo.length;
  const safePageSize = Math.max(1, pageSize || 6);
  const totalPages = Math.max(1, Math.ceil(total / safePageSize));
  const safePage = Math.min(Math.max(1, page || 1), totalPages);
  const start = (safePage - 1) * safePageSize;
  const items = blogDemo.slice(start, start + safePageSize);

  return {
    items,       // current page items
    total,       // total number of posts
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}
