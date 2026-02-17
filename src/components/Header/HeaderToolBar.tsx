import { cn } from '@/lib/utils';
import { Heart, Menu, Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const navIconButtonStyles = cn(
  'flex items-center justify-center w-[48px] h-[48px]',
  'border-l border-[#E5E7EB]',
  'text-[#313237]',
  'transition-all duration-200 hover:bg-gray-50 active:opacity-80',
  'outline-none cursor-pointer',
);

export const HeaderToolBar = () => {
  return (
    <>
      <div className="hidden sm:flex items-center">
        <button
          className={`${navIconButtonStyles} lg:hidden`}
          aria-label="Search"
        >
          <Search size={20} />
        </button>
        <button>
          <Link
            to="/favourites"
            className={`${navIconButtonStyles} lg:h-[64px] lg:w-[64px]`}
            aria-label="Favourites"
          >
            <Heart size={20} />
          </Link>
        </button>
        <Link
          to="/cart"
          className={`${navIconButtonStyles} lg:h-[64px] lg:w-[64px]`}
          aria-label="ShoppingBag"
        >
          <ShoppingBag size={20} />
          {/*<span className="absolute top-1 right-1 w-2 h-2 bg-[#27AE60] rounded-full border border-white" />*/}
        </Link>
      </div>
      <button className={`${navIconButtonStyles} sm:hidden`}>
        <Menu size={16} />
      </button>
    </>
  );
};
