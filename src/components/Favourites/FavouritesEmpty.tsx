import {
  Heart,
  MousePointerClick,
  ArrowRight,
  ShoppingBag,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { TYPOGRAPHY } from '@/constants/typography';

export const FavouritesEmpty = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-20">
        <div className="relative mb-8">
          <Heart
            className="size-32 text-gray-100 animate-pulse"
            strokeWidth={0.5}
          />
          <Heart
            className="size-12 text-red-500 absolute bottom-2 right-2 animate-bounce"
            fill="currentColor"
          />
        </div>

        <h2 className={cn(TYPOGRAPHY.h2, 'mb-6')}>
          Your heart is still looking for a match
        </h2>

        <div className="flex flex-col items-center gap-6 mb-10">
          <p className="text-gray-500 text-lg">
            It looks like you haven&apos;t found any items to fall in love with
            yet.
          </p>

          <div className="inline-flex items-center gap-3 bg-gray-50 px-6 py-4 rounded-2xl border border-dashed border-gray-300">
            <MousePointerClick className="size-5 text-blue-500" />
            <p className="text-sm font-medium text-gray-700">
              Just click the{' '}
              <Heart
                className="inline size-4 text-red-500 mx-1"
                fill="currentColor"
              />{' '}
              icon on any product to save it here
            </p>
          </div>
        </div>

        <Link
          to="/catalog"
          className="group flex items-center gap-2 bg-[#313237] text-white px-10 py-4 rounded-full font-semibold transition-all hover:bg-black hover:shadow-xl active:scale-95"
        >
          <ShoppingBag className="size-5" />
          <span>Explore Catalog</span>
          <ArrowRight className="size-5 transition-transform group-hover:translate-x-2" />
        </Link>
      </div>

      <div className="border-t border-gray-100 pt-16">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h3 className="text-2xl font-bold">Top Products</h3>
            <p className="text-gray-400 text-sm mt-1">
              Maybe your &quot;match&quot; is waiting here?
            </p>
          </div>
          {/* Можна зробити блок з рандомним вибором топ-книг */}
          <Link
            to="/catalog"
            className="group flex items-center gap-1text-muted-foreground hover:text-foreground transition-colors"
          >
            View all{' '}
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
};
