import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TYPOGRAPHY } from '@/constants/typography';
import { cn } from '@/lib/utils';
import { CategoriesSectionSkeleton } from './CategoriesSectionSkeleton';

const CATEGORIES = [
  {
    label: 'Paper books',
    path: '/paper',
    image: '/img/categories/Paper-books.png',
  },
  {
    label: 'Audiobooks',
    path: '/audiobook',
    image: '/img/categories/Audiobooks.png',
  },
  {
    label: 'Kindle books',
    path: '/kindle',
    image: '/img/categories/Kindle-books.png',
  },
];

export const CategoriesSection = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <CategoriesSectionSkeleton />;

  return (
    <section className="flex flex-col mt-[56px] px-4 gap-6 min-[640px]:mt-[56px] min-[640px]:px-6 min-[1200px]:mt-[80px] min-[1200px]:w-[1136px] min-[1200px]:mx-auto min-[1200px]:px-0">
      <h2 className={cn(TYPOGRAPHY.h2, 'text-foreground')}>Shop by category</h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
        {CATEGORIES.map((cat) => (
          <Link
            key={cat.path}
            to={cat.path}
            className="group"
          >
            <div className="overflow-hidden rounded-2xl">
              <img
                src={cat.image}
                alt={cat.label}
                className="w-full aspect-[4/3] object-cover transition duration-500 group-hover:scale-105"
              />
            </div>
            <h3 className={cn(TYPOGRAPHY.h4, 'mt-4 text-foreground')}>
              {cat.label}
            </h3>
          </Link>
        ))}
      </div>
    </section>
  );
};
