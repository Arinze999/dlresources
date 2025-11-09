// data/testimonials.ts
export type Testimonial = {
  imageSrc: string;
  name: string;
  stars: number;   // 1..5
  comment: string;
};

export const testimonials: Testimonial[] = [
  {
    imageSrc: '/images/test1.webp',
    name: 'Oluwatoyin Adeyemi',
    stars: 5,
    comment:
      'We booked Deola Resources for our Friday office lunch service and it was a hit across departments. The jollof rice stayed perfectly smoky, the grilled chicken was juicy even after an hour, and delivery arrived precisely on schedule with tidy labeling for dietary preferences. Customer support kept us updated from dispatch to drop-off, which made coordination effortless.',
  },
  {
    imageSrc: '/images/test2.jpg',
    name: 'Chukwuemeka Okafor',
    stars: 4,
    comment:
      'Ordered a small chops catering tray for a project wrap-up and the variety was impressive—samosa, spring rolls, gizzard skewers, and puff-puff were all fresh and well-seasoned. Portions were generous and the pepper dip had the right kick. We requested a later pickup window and they accommodated without fuss, which made the celebration smooth.',
  },
  {
    imageSrc: '/images/test3.jpg',
    name: 'Ifeoma Nwankwo',
    stars: 5,
    comment:
      'Deola handled our birthday house party buffet and exceeded expectations. The setup looked clean and professional, cooler drinks stayed cold through the evening, and they added a thoughtful fruit platter at no extra cost. Guests kept asking for the vendor’s contact—service was warm, timing precise, and the food tasted like home.',
  },
];
