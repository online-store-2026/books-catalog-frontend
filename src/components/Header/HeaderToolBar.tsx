import { cn } from '@/lib/utils';
import { Icon } from '../ui/icons/Icon';

type Props = {
  onMenuClick: () => void;
};

const baseButton =
  'flex items-center justify-center transition-all duration-200 hover:bg-gray-50 active:opacity-80 outline-none cursor-pointer text-[#313237]';

export const HeaderToolBar = ({ onMenuClick }: Props) => {
  return (
    <>
      {/* Desktop + Tablet icons */}
      <div className="hidden sm:flex items-center h-full">
        <button
          className={cn(
            baseButton,
            'border-l border-[#E5E7EB] w-[48px] h-[48px] lg:hidden',
          )}
          aria-label="Favorites"
        >
          <Icon
            name="search"
            className="w-4 h-4"
          />
        </button>
        <button
          className={cn(
            baseButton,
            'border-l border-[#E5E7EB] w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]',
          )}
          aria-label="Favorites"
        >
          <Icon
            name="heart"
            className="w-4 h-4"
          />
        </button>

        <button
          className={cn(
            baseButton,
            'border-l border-[#E5E7EB] w-[48px] h-[48px] lg:w-[64px] lg:h-[64px]',
          )}
          aria-label="Cart"
        >
          <Icon
            name="shoppingBag"
            className="w-4 h-4"
          />
        </button>
      </div>

      {/* Mobile burger ONLY */}
      <button
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
      </button>
    </>
  );
};
