import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';
import { TYPOGRAPHY } from '@/constants/typography';

const linkClass = cn(
  TYPOGRAPHY.uppercase,
  'no-underline text-muted-foreground hover:text-foreground transition-colors',
);

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};

export const Footer = () => {
  return (
    <footer className="border-t border-border font-manrope">
      <div className="max-[639px]:hidden w-full">
        <div className="footer-container">
          <Link
            to="/"
            className="shrink-0"
          >
            <img
              src="public/img/icons/Logo.svg"
              alt="Nice Boook logo"
              className="w-22.25 h-8 transition-transform hover:scale-105"
            />
          </Link>

          <div className="footer-spacer-left" />

          <nav className="shrink-0 flex items-center footer-nav-gap">
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

          <div className="footer-spacer-right" />

          <button
            type="button"
            onClick={scrollToTop}
            className="group flex items-center gap-4 cursor-pointer shrink-0 border-none bg-transparent p-0"
            aria-label="Scroll to top"
          >
            <span
              className={cn(
                TYPOGRAPHY.small,
                'leading-none whitespace-nowrap text-muted-foreground group-hover:text-foreground transition-colors',
              )}
            >
              Back to top
            </span>
            <ChevronUp className="h-4 w-4 text-muted-foreground group-hover:text-foreground transition-colors" />
          </button>
        </div>
      </div>

      <div className="hidden max-[639px]:flex flex-col px-4 py-8 gap-8">
        <Link
          to="/"
          className="shrink-0 self-start"
        >
          <img
            src="public/img/icons/Logo.svg"
            alt="Nice Boook logo"
            className="w-22.25 h-8 transition-transform hover:scale-105"
          />
        </Link>

        <nav className="shrink-0 flex flex-col items-start gap-4">
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

        <button
          type="button"
          onClick={scrollToTop}
          className="group flex items-center gap-4 cursor-pointer shrink-0 self-center border-none bg-transparent p-0"
          aria-label="Scroll to top"
        >
          <span
            className={cn(
              TYPOGRAPHY.small,
              'leading-none whitespace-nowrap text-muted-foreground group-hover:text-foreground transition-colors',
            )}
          >
            Back to top
          </span>
          <span className="grid h-8 w-8 place-items-center text-muted-foreground group-hover:text-foreground transition-colors">
            <ChevronUp className="h-4 w-4" />
          </span>
        </button>
      </div>
    </footer>
  );
};
