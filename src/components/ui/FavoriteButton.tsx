import React, { useState } from 'react';
import { Heart } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FavoriteButtonProps {
  initialIsFavorite?: boolean;
  className?: string;
  onClick?: (isFavorite: boolean) => void;
}

export const FavoriteButton = ({
  initialIsFavorite = false,
  onClick,
}: FavoriteButtonProps) => {
  const [isFavorite, setIsFavorite] = useState(initialIsFavorite);

  const toggleFavorite = (e: React.MouseEvent) => {
    e.preventDefault();
    const newState = !isFavorite;
    setIsFavorite(newState);
    if (onClick) onClick(newState);
  };

  return (
    <button
      onClick={toggleFavorite}
      className={cn(
        'p-2 rounded-full transition-all duration-200 border border-transparent border-[#E2E6E9] rounded-lg',
        'hover:border-[#313237]',
      )}
      aria-label="Add to favorite"
    >
      <Heart
        className={cn(
          'w-5 h-5 transition-all duration-200',
          isFavorite ? 'fill-[#EB5757] text-[#EB5757]' : 'text-primary-gray',
        )}
      />
    </button>
  );
};
