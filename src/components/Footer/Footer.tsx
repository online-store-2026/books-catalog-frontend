import { Link } from 'react-router-dom';
import { ChevronUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const linkClass = cn(
  'text-xs font-bold leading-[11px] tracking-[0.01em]',
  'uppercase no-underline',
  'text-[#89939A] hover:text-[#313237] transition-colors',
);

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="border-t border-[#E2E6E9] font-manrope">
      <div className="max-[639px]:hidden w-full">
        <div className="footer-container">
          <img
            src="public/img/icons/Logo.svg"
            alt="Nice Boook logo"
            className="w-22.25 h-8 shrink-0"
          />

          <div className="footer-spacer-left" />

          <nav className="flex items-center shrink-0 footer-nav-gap">
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

          <div
            className="flex items-center gap-4 cursor-pointer shrink-0"
            onClick={scrollToTop}
          >
            <p className="text-xs font-medium leading-none text-[#89939A] whitespace-nowrap">
              Back to top
            </p>
            <button
              className="grid h-8 w-8 place-items-center border-none bg-transparent p-0 cursor-pointer"
              aria-label="Scroll to top"
            >
              <ChevronUp className="h-4 w-4 text-[#313237]" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={cn('hidden max-[639px]:flex', 'flex-col px-4 py-8 gap-8')}
      >
        <img
          src="public/img/icons/Logo.svg"
          alt="Nice Boook logo"
          className="w-22.25 h-8 self-start"
        />

        <nav className="flex flex-col items-start gap-4">
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

        <div
          className="flex items-center gap-4 cursor-pointer self-center"
          onClick={scrollToTop}
        >
          <p className="text-xs font-medium leading-none text-[#89939A] whitespace-nowrap">
            Back to top
          </p>
          <button
            className="grid h-8 w-8 place-items-center border-none bg-transparent p-0 cursor-pointer"
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-4 w-4 text-[#313237]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
