import { Heart, ShoppingBag } from 'lucide-react';
import { HeaderSearch } from './HeaderSearch';
import { HeaderNav } from './HeaderNav';
import { Icon } from '../ui/icons';

type Props = {
  onClose: () => void;
};

export const BurgerMenu = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="mx-auto flex flex-col justify-between h-full max-w-[1280px] px-4">
        <div className="flex items-center justify-between h-[64px] border-b">
          <div className="flex mr-4">
            <img
              src="/img/icons/Logo.svg"
              alt="Nice Book logo"
            />
          </div>
          <button
            onClick={onClose}
            className="w-[48px] h-[48px] flex items-center justify-center"
          >
            <Icon
              name="close"
              className="w-4 h-4"
            />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto flex flex-col py-8 gap-6">
          <HeaderNav isMobile />
          <HeaderSearch isMobile />
        </div>

        <div className="flex border-t h-[56px]">
          <button
            className="flex-1 flex items-center justify-center border-b-4 border-transparent transition-all duration-200 hover:border-gray-800"
            aria-label="Favorites"
          >
            <Heart size={16} />
          </button>

          <button
            className="flex-1 flex items-center justify-center border-b-4 border-transparent transition-all duration-200 hover:border-gray-800"
            aria-label="Cart"
          >
            <ShoppingBag size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};
