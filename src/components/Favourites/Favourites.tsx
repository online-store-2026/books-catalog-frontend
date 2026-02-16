import { TYPOGRAPHY } from '@/constants/typography';
import { cn } from '@/lib/utils';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { FavouritesEmpty } from './FavouritesEmpty';

export const Favourites = () => {
  const favourites = ['card'];
  const emptyFavourites = favourites.length === 0;

  return (
    <div className="container mx-auto w-full max-w-[1280px] p-4 md:p-8">
      <Link
        to="/catalog"
        className={cn(
          TYPOGRAPHY.small,
          'mb-2 inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors',
        )}
      >
        <ChevronLeft className="size-4" />
        Home / Favourites
      </Link>

      {emptyFavourites ?
        <FavouritesEmpty />
      : <div>
          <h1 className={cn(TYPOGRAPHY.h1, 'mb-8 text-foreground')}>
            Favourites
          </h1>

          <p className="mb-4 text-gray-400">{favourites.length} items</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 [@media(min-width:1200px)]:grid-cols-4 gap-4 justify-items-center">
            {favourites.map((item) => (
              <div
                key={item}
                className="h-[440px] w-full max-w-[288px] border rounded-lg bg-white shadow-sm"
              ></div>
            ))}
          </div>
        </div>
      }
    </div>
  );
};
