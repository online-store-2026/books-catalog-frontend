import { HeaderSearch } from './HeaderSearch';
import { Icon } from '../ui/icons';
import { HeaderNav } from './HeaderNav';
import { cn } from '@/lib/utils';

type Props = {
  onClose: () => void;
};

export const BurgerMenu = ({ onClose }: Props) => {
  return (
    <div className="fixed inset-0 z-50 bg-white">
      <div className="flex flex-col justify-between h-full w-full">
        {/* Header: Logo + Close */}
        <div
          className={cn(
            'mx-auto flex items-center justify-between pl-4 w-full max-w-[1280px]',
            'h-[48px] border-b',
          )}
        >
          <div className="flex items-center">
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

        {/* Content: Nav + Search + Dropdown */}
        <div className="flex-1 overflow-y-auto flex flex-col py-8 gap-6">
          <HeaderNav isMobile />

          {/* Search Input */}
          <div className="flex flex-col gap-4">
            {/* Dropdown (categories) */}
            <HeaderSearch isMobile />
          </div>
        </div>

        {/* Footer: Icons */}
        <div className="flex border-t h-[56px]">
          <button className="flex-1 flex items-center justify-center border-b-4 border-transparent transition-all duration-200 hover:border-gray-800">
            <Icon
              name="heart"
              className="w-4 h-4"
            />
          </button>

          <button className="flex-1 flex items-center justify-center border-b-4 border-transparent transition-all duration-200 hover:border-gray-800">
            <Icon
              name="shoppingBag"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
    </div>
  );
};
