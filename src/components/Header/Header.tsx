import { useState } from 'react';
import { cn } from '@/lib/utils';
import { HeaderSearch } from './HeaderSearch';
import { HeaderNav } from './HeaderNav';
import { BurgerMenu } from './BurgerMenu';
import { HeaderToolBar } from './HeaderToolBar';
import { Link } from 'react-router-dom';
import { SearchWithAutocomplete } from './SearchWithAutocomplete';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const handleSearchClick = () => {
    setIsSearchOpen((prev) => !prev);
  };

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
              src="/img/icons/Logo.svg"
              alt="Nice Boook logo"
            />
          </Link>

          <HeaderNav />

          <div className="flex items-center h-full">
            <HeaderSearch />
            {isSearchOpen && <SearchWithAutocomplete />}
            <HeaderToolBar
              onMenuClick={() => setIsMenuOpen(true)}
              onSearchIconClick={handleSearchClick}
            />
          </div>
        </div>
      </header>

      {isMenuOpen && <BurgerMenu onClose={() => setIsMenuOpen(false)} />}
    </>
  );
};
