import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

type Props = {
  to?: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
};

export const HeaderIconLink = ({ to, children, onClick, className }: Props) => {
  const { pathname } = useLocation();
  const isActive = to ? pathname === to : false;

  const content = (
    <>
      {children}

      <span
        className={cn(
          'absolute bottom-0 left-0 w-full h-[3px] transition-all duration-200',
          isActive ? 'bg-[#313237]' : 'bg-transparent group-hover:bg-[#313237]',
        )}
      />
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        onClick={onClick}
        className={cn(
          'relative flex items-center justify-center group',
          className,
        )}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        'relative flex items-center justify-center group',
        className,
      )}
    >
      {content}
    </button>
  );
};
