import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ChevronLeft } from 'lucide-react';
import { getPaperbacks } from '@/api/products';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY } from '@/constants/typography';
import { cn } from '@/lib/utils';
import type { Paperback } from '@/types/Product';
import { CartCheckout, CartItem, type CartItemType } from '@/components/Cart';

/** IDs of products (hardcoded for now) */
const CART_PRODUCT_IDS = [
  'de4cdd13-4819-4b76-8ac6-d8dbc8d182ff', // Don't Make Me Think
  '01df779d-fcca-40be-8ac8-6e2ef15bc0df', // Grokking Algorithms
  'e6360591-a4b1-418a-922f-de193ff7e096', // Graphic Design: The New Basics
];

function toCartItem(product: Paperback): CartItemType {
  return {
    id: product.id,
    category: product.type,
    itemId: product.slug,
    name: product.name,
    author: product.author,
    image: product.images[0],
    price: product.priceDiscount ?? product.priceRegular,
    quantity: 1,
  };
}

export const Cart = () => {
  const navigate = useNavigate();
  const [items, setItems] = useState<CartItemType[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getPaperbacks()
      .then((products) => {
        const cartProducts = products
          .filter((p) => CART_PRODUCT_IDS.includes(p.id))
          .map(toCartItem);

        setItems(cartProducts);
        setError(null);
      })
      .catch((err) => {
        console.error('Failed to load cart:', err);
        setError('Failed to load cart items. Please try again later.');
      })
      .finally(() => setIsLoading(false));
  }, []);

  const removeItem = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setItems((prev) =>
      prev.map((item) => {
        if (item.id !== id) {
          return item;
        }

        const next = item.quantity + delta;

        return { ...item, quantity: next < 1 ? 1 : next };
      }),
    );
  };

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0,
  );
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="mx-auto max-w-312 px-4 pt-6 pb-16 sm:px-6 lg:px-8 lg:pb-20">
      <Link
        to="/catalog"
        className={cn(
          TYPOGRAPHY.small,
          'mb-2 inline-flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors',
        )}
      >
        <ChevronLeft className="size-4" />
        Back
      </Link>

      <h1 className={cn(TYPOGRAPHY.h1, 'mb-8 text-foreground')}>Cart</h1>

      {isLoading ?
        <p className={cn(TYPOGRAPHY.body, 'text-muted-foreground')}>
          Loading...
        </p>
      : error ?
        <div className="text-center py-12">
          <p className={cn(TYPOGRAPHY.body, 'text-destructive mb-4')}>
            {error}
          </p>
          <Button onClick={() => window.location.reload()}>Try Again</Button>
        </div>
      : items.length === 0 ?
        <div className="text-center py-12">
          <p className={cn(TYPOGRAPHY.h3, 'text-foreground mb-2')}>
            Your cart is empty
          </p>
          <p className={cn(TYPOGRAPHY.body, 'text-muted-foreground mb-6')}>
            Add some books to get started
          </p>
          <Link to="/catalog">
            <Button
              size="lg"
              className="bg-foreground text-background hover:bg-foreground/90"
            >
              Continue Shopping
            </Button>
          </Link>
        </div>
      : <div className="flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="flex-1 space-y-4">
            {items.map((item) => (
              <CartItem
                key={item.id}
                item={item}
                onRemove={removeItem}
                onQuantityChange={updateQuantity}
              />
            ))}
          </div>

          <div className="w-full shrink-0 lg:w-80">
            <CartCheckout
              total={total}
              totalItems={totalItems}
              onCheckout={() => navigate('/checkout')}
            />
          </div>
        </div>
      }
    </div>
  );
};
