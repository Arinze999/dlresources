export type DishCategory =
  | 'rice'
  | 'soups'
  | 'grill'
  | 'snacks'
  | 'wraps'
  | 'pasta'
  | 'burgers'
  | 'fish'
  | 'salads'
  | 'continental';

export type Dish = {
  id: string;
  imageSrc: string;
  name: string;
  description: string;
  priceFrom: number;
  currency?: string;
  orderHref?: string;
  badge?: string;
  outOfStock?: boolean;

  // Optional metadata for filtering/search/sorting
  categories?: DishCategory[];
  tags?: string[];    // e.g. 'spicy', 'party', 'chicken'
  rating?: number;    // 1–5
};

export const baseMenu: Dish[] = [
  {
    id: 'jollof-001',
    imageSrc: '/images/ft1.jpeg',
    name: 'Jollof Rice & Chicken',
    description: 'Smoky party jollof served with juicy fried chicken and plantain.',
    priceFrom: 3500,
    currency: 'NGN',
    orderHref: '#order/jollof',
    badge: 'Popular',
    categories: ['rice'],
    tags: ['party', 'chicken', 'spicy'],
    rating: 5,
  },
  {
    id: 'smallchops-002',
    imageSrc: '/images/ft2.jpeg',
    name: 'Small Chops Platter',
    description: 'Spring rolls, samosas, puff-puff, grilled gizzards & spicy dips.',
    priceFrom: 2800,
    currency: 'NGN',
    orderHref: '#order/smallchops',
    categories: ['snacks'],
    tags: ['finger foods', 'party', 'assorted'],
    rating: 4,
  },
  {
    id: 'chicken-003',
    imageSrc: '/images/ft3.jpeg',
    name: 'Crispy Fried Chicken',
    description: 'Golden, crunchy skin with tender, marinated meat inside.',
    priceFrom: 3000,
    currency: 'NGN',
    orderHref: '#order/chicken',
    badge: 'Chef’s pick',
    categories: ['grill'],
    tags: ['chicken', 'crispy'],
    rating: 5,
  },
  {
    id: 'beefstew-004',
    imageSrc: '/images/ft4.jpeg',
    name: 'Beef Stew & Rice',
    description: 'Rich tomato-based beef stew paired with fluffy white rice and fried plantain.',
    priceFrom: 3200,
    currency: 'NGN',
    orderHref: '#order/beefstew',
    categories: ['rice'],
    tags: ['beef', 'stew'],
    rating: 4,
  },
  {
    id: 'egusi-005',
    imageSrc: '/images/ft5.jpeg',
    name: 'Egusi Soup with Pounded Yam',
    description: 'Melon seed soup cooked with assorted meat and served with soft pounded yam.',
    priceFrom: 4000,
    currency: 'NGN',
    orderHref: '#order/egusi',
    badge: 'Best Seller',
    categories: ['soups'],
    tags: ['swallow', 'egusi', 'assorted'],
    rating: 5,
  },
  {
    id: 'friedrice-006',
    imageSrc: '/images/ft6.jpeg',
    name: 'Fried Rice & Grilled Chicken',
    description: 'Colorful fried rice with vegetables, served with smoky grilled chicken.',
    priceFrom: 3400,
    currency: 'NGN',
    orderHref: '#order/friedrice',
    categories: ['rice'],
    tags: ['chicken', 'veggies'],
    rating: 4,
  },
  {
    id: 'catfishpepper-007',
    imageSrc: '/images/ft7.jpeg',
    name: 'Catfish Pepper Soup',
    description: 'Spicy and aromatic fish soup made with traditional herbs and catfish.',
    priceFrom: 4500,
    currency: 'NGN',
    orderHref: '#order/catfish',
    outOfStock: true,
    categories: ['soups', 'fish'],
    tags: ['spicy', 'light'],
    rating: 4,
  },
  {
    id: 'suya-008',
    imageSrc: '/images/ft8.jpeg',
    name: 'Beef Suya',
    description: 'Tender grilled beef skewers coated in spicy peanut suya seasoning.',
    priceFrom: 2500,
    currency: 'NGN',
    orderHref: '#order/suya',
    categories: ['grill', 'snacks'],
    tags: ['beef', 'spicy', 'street'],
    rating: 4,
  },
  {
    id: 'asaro-009',
    imageSrc: '/images/ft9.jpeg',
    name: 'Yam Porridge (Asaro)',
    description: 'Soft yam cooked in a savory tomato and pepper sauce with palm oil.',
    priceFrom: 2800,
    currency: 'NGN',
    orderHref: '#order/asaro',
    categories: ['continental'],
    tags: ['yam', 'comfort'],
    rating: 3,
  },
  {
    id: 'okra-010',
    imageSrc: '/images/ft10.jpeg',
    name: 'Okra Soup & Fufu',
    description: 'Delicious draw soup made with fresh okra, palm oil, and assorted meat.',
    priceFrom: 3700,
    currency: 'NGN',
    orderHref: '#order/okra',
    categories: ['soups'],
    tags: ['okra', 'swallow'],
    rating: 4,
  },
  {
    id: 'ofada-011',
    imageSrc: '/images/ft11.jpeg',
    name: 'Ofada Rice & Ayamase Sauce',
    description: 'Local Ofada rice served with green pepper sauce and assorted meats.',
    priceFrom: 4200,
    currency: 'NGN',
    orderHref: '#order/ofada',
    badge: 'Local Favorite',
    categories: ['rice'],
    tags: ['local', 'ayamase', 'assorted'],
    rating: 5,
  },
  {
    id: 'pasta-012',
    imageSrc: '/images/ft12.jpeg',
    name: 'Creamy Alfredo Pasta',
    description: 'Italian-style pasta tossed in creamy Alfredo sauce with chicken chunks.',
    priceFrom: 3800,
    currency: 'NGN',
    orderHref: '#order/pasta',
    categories: ['pasta', 'continental'],
    tags: ['creamy', 'chicken'],
    rating: 4,
  },
  {
    id: 'shawarma-013',
    imageSrc: '/images/ft13.jpeg',
    name: 'Chicken Shawarma',
    description: 'Delicious wrap filled with spiced chicken, veggies, and creamy sauce.',
    priceFrom: 2500,
    currency: 'NGN',
    orderHref: '#order/shawarma',
    categories: ['wraps', 'snacks'],
    tags: ['wrap', 'chicken', 'street'],
    rating: 4,
  },
  {
    id: 'grilledfish-014',
    imageSrc: '/images/ft14.jpeg',
    name: 'Grilled Tilapia & Chips',
    description: 'Perfectly seasoned grilled tilapia served with crispy fried chips.',
    priceFrom: 4800,
    currency: 'NGN',
    orderHref: '#order/grilledfish',
    categories: ['fish', 'grill'],
    tags: ['tilapia', 'chips'],
    rating: 4,
  },
  {
    id: 'moimoi-015',
    imageSrc: '/images/ft15.jpeg',
    name: 'Moi Moi with Egg',
    description: 'Steamed bean pudding made with blended peppers, onions, and egg.',
    priceFrom: 1800,
    currency: 'NGN',
    orderHref: '#order/moimoi',
    categories: ['snacks', 'continental'],
    tags: ['beans', 'steamed'],
    rating: 3,
  },
  {
    id: 'plantain-016',
    imageSrc: '/images/ft16.jpeg',
    name: 'Dodo & Sauce',
    description: 'Crispy fried plantains served with peppered sauce or stew on the side.',
    priceFrom: 2000,
    currency: 'NGN',
    orderHref: '#order/plantain',
    categories: ['snacks', 'continental'],
    tags: ['plantain', 'veggie'],
    rating: 4,
  },
  {
    id: 'burger-017',
    imageSrc: '/images/ft17.jpeg',
    name: 'Beef Burger & Fries',
    description: 'Juicy grilled beef burger with lettuce, cheese, and golden fries.',
    priceFrom: 3500,
    currency: 'NGN',
    orderHref: '#order/burger',
    categories: ['burgers', 'continental'],
    tags: ['beef', 'fries', 'cheese'],
    rating: 4,
  },
  {
    id: 'salad-018',
    imageSrc: '/images/ft18.jpeg',
    name: 'Chicken Caesar Salad',
    description: 'Fresh greens, grilled chicken, croutons, and Caesar dressing for a light meal.',
    priceFrom: 3000,
    currency: 'NGN',
    orderHref: '#order/salad',
    outOfStock: false,
    categories: ['salads', 'continental'],
    tags: ['light', 'chicken', 'greens'],
    rating: 3,
  },
];

// ---------- Helpers ----------

function shuffleArray<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export const menu: Dish[] = shuffleArray(baseMenu);

/** Full-text-ish search over name, description, and tags */
export function searchDishes(query: string): Dish[] {
  const q = query.trim().toLowerCase();
  if (!q) return menu;
  return menu.filter((d) => {
    const hay = `${d.name} ${d.description} ${(d.tags ?? []).join(' ')}`.toLowerCase();
    return hay.includes(q);
  });
}

export function getDishById(id: string): Dish | undefined {
  return menu.find((d) => d.id === id);
}

export function getDishesByCategory(category: DishCategory): Dish[] {
  return menu.filter((d) => (d.categories ?? []).includes(category));
}

export type DishFilter = {
  categories?: DishCategory[]; // match ANY of these
  tags?: string[];             // must include ALL of these
  maxPrice?: number;           // NGN
  availableOnly?: boolean;     // exclude outOfStock
  minRating?: number;          // 1–5
  badge?: string;              // exact badge match
};

export type DishSort =
  | 'price-asc'
  | 'price-desc'
  | 'rating-desc'
  | 'name-asc'
  | 'name-desc';

export function filterDishes(
  opts: DishFilter = {},
  sortBy?: DishSort,
): Dish[] {
  let list = [...menu];

  if (opts.availableOnly) list = list.filter((d) => !d.outOfStock);
  if (opts.maxPrice != null) list = list.filter((d) => d.priceFrom <= opts.maxPrice!);
  if (opts.minRating != null) list = list.filter((d) => (d.rating ?? 0) >= opts.minRating!);
  if (opts.badge) list = list.filter((d) => d.badge === opts.badge);
  if (opts.categories?.length) {
    list = list.filter((d) => d.categories?.some((c) => opts.categories!.includes(c)));
  }
  if (opts.tags?.length) {
    list = list.filter((d) => (opts.tags as string[]).every((t) => (d.tags ?? []).includes(t)));
  }

  switch (sortBy) {
    case 'price-asc':
      list.sort((a, b) => a.priceFrom - b.priceFrom);
      break;
    case 'price-desc':
      list.sort((a, b) => b.priceFrom - a.priceFrom);
      break;
    case 'rating-desc':
      list.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    case 'name-asc':
      list.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      list.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  return list;
}

/** Paginate any list (default 9) */
export function paginate<T>(items: T[], page = 1, pageSize = 9) {
  const safePage = Math.max(1, page || 1);
  const safePageSize = Math.max(1, pageSize || 9);
  const start = (safePage - 1) * safePageSize;
  return items.slice(start, start + safePageSize);
}

/** Featured picks: has badge → highest rating */
export function getFeatured(count = 6): Dish[] {
  const withBadge = menu.filter((d) => d.badge);
  return withBadge
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0))
    .slice(0, count);
}

/** Quick helpers */
export function getPriceRange() {
  const prices = menu.map((d) => d.priceFrom);
  return { min: Math.min(...prices), max: Math.max(...prices) };
}

/* -------------------- Central page helper (search + filters + sort + pagination) -------------------- */

export type MenuParams = {
  q?: string;
  category?: DishCategory | null;
  availableOnly?: boolean;
  maxPrice?: number | null;
  sort?: DishSort | null;
  page?: number;      // 1-based
  pageSize?: number;  // default = 9
};

/** Returns paginated + filtered menu for UI consumption */
export function getMenuPage(params: MenuParams) {
  const {
    q = '',
    category = null,
    availableOnly = false,
    maxPrice = null,
    sort = null,
    page = 1,
    pageSize = 6,
  } = params;

  // Start with full list
  let items = [...menu];

  // Search
  const qLower = q.trim().toLowerCase();
  if (qLower) {
    items = items.filter((d) => {
      const hay = [d.name, d.description, ...(d.tags ?? [])].join(' ').toLowerCase();
      return hay.includes(qLower);
    });
  }

  // Category
  if (category) {
    items = items.filter((d) => (d.categories ?? []).includes(category));
  }

  // Max price
  if (typeof maxPrice === 'number' && !Number.isNaN(maxPrice)) {
    items = items.filter((d) => d.priceFrom <= maxPrice);
  }

  // Availability
  if (availableOnly) {
    items = items.filter((d) => !d.outOfStock);
  }

  // Sort
  switch (sort) {
    case 'price-asc':
      items.sort((a, b) => a.priceFrom - b.priceFrom);
      break;
    case 'price-desc':
      items.sort((a, b) => b.priceFrom - a.priceFrom);
      break;
    case 'rating-desc':
      items.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
      break;
    case 'name-asc':
      items.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'name-desc':
      items.sort((a, b) => b.name.localeCompare(a.name));
      break;
  }

  // Pagination
  const total = items.length;
  const safePageSize = Math.max(1, pageSize || 9);
  const totalPages = Math.max(1, Math.ceil(total / safePageSize));
  const safePage = Math.min(Math.max(1, page || 1), totalPages);
  const start = (safePage - 1) * safePageSize;
  const pageItems = items.slice(start, start + safePageSize);

  return {
    items: pageItems,
    total,
    page: safePage,
    pageSize: safePageSize,
    totalPages,
  };
}
