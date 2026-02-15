import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TYPOGRAPHY } from '@/constants/typography';

type FooterBackToTopProps = {
  className?: string;
};

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

export const FooterBackToTop = ({ className }: FooterBackToTopProps) => {
  return (
    <div
      role="button"
      tabIndex={0}
      onClick={scrollToTop}
      onKeyDown={(e) => e.key === 'Enter' && scrollToTop()}
      className={cn(
        'group flex items-center gap-4 cursor-pointer shrink-0',
        className,
      )}
    >
      <p
        className={cn(
          TYPOGRAPHY.small,
          'leading-none whitespace-nowrap text-muted-foreground group-hover:text-foreground transition-colors',
        )}
      >
        Back to top
      </p>
      <button
        type="button"
        className="grid h-8 w-8 place-items-center border-none bg-transparent p-0 cursor-pointer text-muted-foreground group-hover:text-foreground transition-colors"
        aria-label="Scroll to top"
      >
        <ChevronUp className="h-4 w-4" />
      </button>
    </div>
  );
};
