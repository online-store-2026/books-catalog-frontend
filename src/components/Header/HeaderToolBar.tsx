// import { cn } from '@/lib/utils';
import { Heart, /* Menu, */ Search, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
// import { Icon } from '../ui/icons';

// const navIconButtonStyles = '...'; // TODO: define or import

/*const baseButton =
  'flex items-center justify-center transition-all duration-200 hover:bg-gray-50 active:opacity-80 outline-none cursor-pointer text-[#313237]';
*/
// type Props = {
//   onMenuClick: () => void;
// };

export const HeaderToolBar = (/* { onMenuClick }: Props */) => {
  return (
    <>
      {/* Desktop + Tablet icons */}
      <div className="hidden sm:flex items-center h-full">
        <button
          className="lg:hidden flex items-center justify-center h-[48px] w-[48px]"
          aria-label="Search"
        >
          <Search size={20} />
        </button>
        {/* <button> */}
        <Link
          to="/favourites"
          className="flex items-center justify-center h-[48px] w-[48px] lg:h-[64px] lg:w-[64px]"
          aria-label="Favourites"
        >
          <Heart size={20} />
        </Link>
        {/* </button> */}
        <Link
          to="/cart"
          className="flex items-center justify-center h-[48px] w-[48px] lg:h-[64px] lg:w-[64px]"
          aria-label="ShoppingBag"
        >
          <ShoppingBag size={20} />
          {/*<span className="absolute top-1 right-1 w-2 h-2 bg-[#27AE60] rounded-full border border-white" />*/}
        </Link>
      </div>

      {/* Mobile burger ONLY */}
      {/* <button
        onClick={onMenuClick}
        className={cn(
          baseButton,
          'sm:hidden w-[48px] h-[48px] border-l border-[#E5E7EB]',
        )}
        aria-label="Menu"
      >
        <Icon
          name="menu"
          className="w-4 h-4"
        />
      </button> */}
    </>
  );
};
