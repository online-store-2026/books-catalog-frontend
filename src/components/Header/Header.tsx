import { cn } from '@/lib/utils';
import { HeaderSearch } from './HeaderSearch';
import { HeaderNav } from './HeaderNav';
import { HeaderToolBar } from './HeaderToolBar';

export const Header = () => {
  return (
    <header className="w-full bg-white border-b border-elements min-w-[320px]">
      <div
        className={cn(
          'mx-auto flex items-center justify-between pl-4 transition-all',
          'h-[48px]',
          'desktop:h-[64px]',
        )}
      >
        <div className="flex mr-4">
          <img
            src="/img/icons/Logo.svg"
            alt="Nice Boook logo"
          />
        </div>

        <HeaderNav />

        <div className="flex items-center h-full">
          <HeaderSearch />
          <HeaderToolBar />
        </div>
      </div>
    </header>
  );
};
