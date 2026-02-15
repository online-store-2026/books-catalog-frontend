import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

type FooterLogoProps = {
  className?: string;
};

export const FooterLogo = ({ className }: FooterLogoProps) => {
  return (
    <Link
      to="/"
      className={cn('shrink-0', className)}
    >
      <img
        src="public/img/icons/Logo.svg"
        alt="Nice Boook logo"
        className="w-22.25 h-8 transition-transform hover:scale-105"
      />
    </Link>
  );
};
