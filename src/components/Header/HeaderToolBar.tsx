import { Link } from 'react-router-dom';
import { Icon } from '../ui/icons';

type Props = {
  onMenuClick: () => void;
};

export const HeaderToolBar = ({ onMenuClick }: Props) => {
  return (
    <>
      {/* Desktop + Tablet */}
      <div className="hidden sm:flex items-center h-full">
        <button
          className="lg:hidden flex items-center justify-center h-[48px] w-[48px]"
          aria-label="Search"
        >
          <Icon
            name="search"
            className="w-4 h-4"
          />
        </button>

        <Link
          to="/favourites"
          className="flex items-center justify-center h-[48px] w-[48px] lg:h-[64px] lg:w-[64px]"
        >
          <Icon
            name="heart"
            className="w-4 h-4"
          />
        </Link>

        <Link
          to="/cart"
          className="flex items-center justify-center h-[48px] w-[48px] lg:h-[64px] lg:w-[64px]"
        >
          <Icon
            name="shoppingBag"
            className="w-4 h-4"
          />
        </Link>
      </div>

      {/* Mobile burger */}
      <button
        onClick={onMenuClick}
        className="sm:hidden w-[48px] h-[48px] flex items-center justify-center border-l border-border"
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
