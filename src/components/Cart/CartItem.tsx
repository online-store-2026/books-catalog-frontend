import { Link } from 'react-router-dom';
import { Minus, Plus, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY } from '@/constants/typography';
import { cn } from '@/lib/utils';

export type CartItemType = {
  id: string;
  category: string;
  itemId: string;
  name: string;
  author: string;
  image: string;
  price: number;
  quantity: number;
};

type CartItemProps = {
  item: CartItemType;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, delta: number) => void;
};

export const CartItem = ({
  item,
  onRemove,
  onQuantityChange,
}: CartItemProps) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-4 rounded-lg border border-border bg-card p-4',
        'sm:flex-row sm:items-center sm:justify-between',
      )}
    >
      <div className="flex items-center gap-4 sm:gap-6">
        <button
          type="button"
          onClick={() => onRemove(item.id)}
          className="flex shrink-0 items-center justify-center text-ring hover:text-muted-foreground transition-colors"
          aria-label="Remove item"
        >
          <X className="size-4" />
        </button>

        <Link
          to={`/${item.category}/${item.itemId}`}
          className="flex items-center gap-4 h-20 sm:gap-6"
        >
          <img
            src={item.image}
            alt={item.name}
            className="h-full object-contain"
          />
          <div className="min-w-0">
            <p className={cn(TYPOGRAPHY.body, 'font-semibold text-foreground')}>
              {item.name}
            </p>
            <p className={cn(TYPOGRAPHY.small, 'text-muted-foreground')}>
              {item.author}
            </p>
          </div>
        </Link>
      </div>

      <div className="flex items-center justify-between gap-6">
        <div className="flex items-center gap-3.5">
          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-full"
            disabled={item.quantity === 1}
            onClick={() => onQuantityChange(item.id, -1)}
            aria-label="Decrease quantity"
          >
            <Minus className="size-4" />
          </Button>

          <span
            className={cn(
              TYPOGRAPHY.body,
              'w-5 text-center font-semibold text-foreground',
            )}
          >
            {item.quantity}
          </span>

          <Button
            variant="outline"
            size="icon-sm"
            className="rounded-full"
            onClick={() => onQuantityChange(item.id, 1)}
            aria-label="Increase quantity"
          >
            <Plus className="size-4" />
          </Button>
        </div>

        <p className={cn(TYPOGRAPHY.h3, 'text-foreground sm:w-20 sm:text-end')}>
          ₴{item.price * item.quantity}
        </p>
      </div>
    </div>
  );
};
