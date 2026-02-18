import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY } from '@/constants/typography';
import { cn } from '@/lib/utils';

export const EmptyCart: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
      <img
        src="/public/img/cart-is-empty.webp"
        alt="Empty cart illustration"
        className="w-48 h-auto opacity-80"
      />
      <p className={cn(TYPOGRAPHY.h3, 'text-foreground')}>Your cart is empty</p>
      <p className={cn(TYPOGRAPHY.body, 'text-muted-foreground pb-4')}>
        Your cart is still sleeping...
        <br />
        Add some books to wake it up
      </p>
      <Link to="/">
        <Button
          className="w-full md:w-80 bg-foreground text-background hover:bg-foreground/90"
          size="lg"
        >
          Back to Shop
        </Button>
      </Link>
    </div>
  );
};
