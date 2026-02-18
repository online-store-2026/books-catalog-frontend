import React from 'react';
import { Link } from 'react-router-dom';
import { Truck } from 'lucide-react';
import { AddButton } from '@/components/ui/Buttons/AddButton';
import { HeartButton } from '@/components/ui/Buttons/HeartButton';
import { Icon } from '@/components/ui/icons';
import { useCartFavorites } from '@/context/CartFavoritesContext';
import { TYPOGRAPHY } from '@/constants/typography';
import { cn } from '@/lib/utils';
import type { Book } from '@/types/Book';

type Props = {
  book: Book;
};

export const ProductCard: React.FC<Props> = ({ book }) => {
  const { addToCart, removeFromCart, toggleFavorite, isFavorite, isInCart } =
    useCartFavorites();

  const isBookInCart = isInCart(book.id);
  const isBookInFavorites = isFavorite(book.id);
  const price = book.priceDiscount ?? book.priceRegular;

  const toggleAddToCart = () => {
    if (isBookInCart) removeFromCart(book.id);
    else addToCart(book);
  };

  return (
    <div className="relative flex flex-col gap-4 flex-shrink-0 w-[214px] h-[400px] p-5 sm:w-[272px] sm:h-[506px] sm:p-8 rounded-xl border border-border bg-card hover:shadow-lg transition-shadow">
      {book.type === 'audiobook' && (
        <div className="absolute top-8 right-6 w-10 h-10 flex items-center justify-center bg-primary rounded-full z-10">
          <Icon
            name="headphones"
            className="text-white"
            style={{ width: '24px', height: '24px' }}
          />
        </div>
      )}

      <Link
        to={`/item/${book.type}/${book.slug}`}
        className="relative flex-shrink-0 flex items-center justify-center w-[174px] h-[185px] sm:w-[208px] sm:h-[263px]"
      >
        {book.type === 'kindle' ?
          <>
            <img
              className="w-full h-full object-contain"
              src="/books/img/audiobook/2.webp"
              alt="iPad"
            />
            <img
              className="absolute top-[8.7%] left-[10.5%] w-[79.5%] h-[82%] object-cover"
              src={`/${book.images[0]}`}
              alt={book.name}
            />
          </>
        : <img
            src={`/${book.images[0]}`}
            alt={book.name}
            className="w-full h-full object-contain rounded-md"
          />
        }
      </Link>

      <Link
        to={`/item/${book.type}/${book.slug}`}
        className="flex flex-col gap-2 min-w-0"
      >
        <h5 className={cn(TYPOGRAPHY.h5, 'text-foreground truncate')}>
          {book.name}
        </h5>
        <p className={cn(TYPOGRAPHY.body, 'text-muted-foreground truncate')}>
          {book.author}
        </p>

        <div className="flex items-baseline gap-1 sm:gap-2">
          <span className={cn(TYPOGRAPHY.h3, 'text-foreground')}>${price}</span>
          {book.priceDiscount && (
            <span
              className={cn(
                TYPOGRAPHY.h4,
                'line-through text-muted-foreground',
              )}
            >
              ${book.priceRegular}
            </span>
          )}
        </div>

        <div className="flex items-center gap-1">
          <Truck className="text-primary w-4 h-4" />
          <span className={cn(TYPOGRAPHY.buttons, 'text-primary')}>
            In stock
          </span>
        </div>
      </Link>

      <div className="mt-auto flex gap-2 w-full">
        <AddButton
          onClick={toggleAddToCart}
          isSelected={isBookInCart}
          className="flex-1"
        />
        <HeartButton
          onClick={() => toggleFavorite(book)}
          isSelected={isBookInFavorites}
        />
      </div>
    </div>
  );
};
