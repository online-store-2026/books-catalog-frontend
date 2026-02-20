import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { HeaderSearch } from './HeaderSearch';
import { HeaderNav } from './HeaderNav';
import { BurgerMenu } from './BurgerMenu';
import { HeaderToolBar } from './HeaderToolBar';
import { Link } from 'react-router-dom';
import { Bookmark } from './Bookmark';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 639) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white border-b border-elements min-w-[320px]">
        <div
          className={cn(
            'mx-auto flex items-center justify-between pl-4 transition-all',
            'h-[48px]',
            'lg:h-[64px]',
          )}
        >
          <Link
            to="/"
            className="flex mr-4 transition-transform hover:scale-105"
          >
            <img
              src={`${import.meta.env.BASE_URL}img/icons/Logo.svg`}
              alt="Nice Boook logo"
            />
          </Link>

          <HeaderNav />

          <div className="flex items-center h-full">
            <HeaderSearch />
            <div className="relative h-full flex items-center">
              <HeaderToolBar
                onMenuClick={() => setIsMenuOpen(true)}
                onSearchIconClick={() => {}}
              />
              <Bookmark />
            </div>
          </div>
        </div>
      </header>

      {isMenuOpen && <BurgerMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};
