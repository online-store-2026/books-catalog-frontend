import React from 'react';
import { cn } from '@/lib/utils';

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const GridContainer: React.FC<Props> = ({ children, className }) => {
  return (
    <div className={cn('mx-auto w-full', className)}>
      <div
        className="
        grid 
        grid-cols-4 gap-4 px-4 
        md:grid-cols-12 md:px-6 
        lg:grid-cols-24 lg:max-w-[1200px] lg:px-8
      "
      >
        {children}
      </div>
    </div>
  );
};
