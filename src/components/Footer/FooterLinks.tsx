import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { TYPOGRAPHY } from '@/constants/typography';

const linkClass = cn(
  TYPOGRAPHY.uppercase,
  'no-underline text-muted-foreground hover:text-foreground transition-colors',
);

type FooterLinksProps = {
  className?: string;
};

export const FooterLinks = ({ className }: FooterLinksProps) => {
  return (
    <nav className={cn('shrink-0', className)}>
      <a
        href="https://github.com/online-store-2026/books-catalog-frontend"
        target="_blank"
        rel="noreferrer"
        className={linkClass}
      >
        Github
      </a>
      <Link
        to="/contacts"
        className={linkClass}
      >
        Contacts
      </Link>
      <Link
        to="/rights"
        className={linkClass}
      >
        Rights
      </Link>
    </nav>
  );
};
