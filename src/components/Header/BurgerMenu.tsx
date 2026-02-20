import { HeaderSearch } from './HeaderSearch';
import { Icon } from '../ui/icons';
import { HeaderNav } from './HeaderNav';
import { cn } from '@/lib/utils';
import { Link, useNavigate } from 'react-router-dom';
import { HeaderIconLink } from './HeaderIconLink';
import { useAuth } from '@/context/authContext';
import { doSingOut } from '@/firebase/auth';

type Props = {
  onClose: () => void;
};

export const BurgerMenu = ({ onClose }: Props) => {
  const { userLoggedIn } = useAuth();
  const navigate = useNavigate();

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
          <Link
            to="/"
            className="flex mr-4 transition-transform hover:scale-105"
          >
            <img
              src="/img/icons/Logo.svg"
              alt="Nice Boook logo"
            />
          </Link>
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
          <HeaderNav
            isMobile
            onLinkClick={onClose}
          />

          {/* Search Input */}
          <div className="flex flex-col gap-4 px-4">
            {/* Dropdown (categories) */}
            <HeaderSearch
              isMobile
              onCategorySelect={onClose}
              onSearchSelect={onClose}
            />
          </div>
        </div>

        {/* Footer: Icons */}
        <div className="flex border-t h-[56px]">
          <HeaderIconLink
            to="/favourites"
            onClick={onClose}
            className="flex-1"
          >
            <Icon
              name="heart"
              className="w-4 h-4"
            />
          </HeaderIconLink>

          <HeaderIconLink
            to="/cart"
            onClick={onClose}
            className="flex-1"
          >
            <Icon
              name="shoppingBag"
              className="w-4 h-4"
            />
          </HeaderIconLink>
          {userLoggedIn ?
            <HeaderIconLink
              className="flex-1"
              onClick={() => {
                doSingOut().then(() => {
                  navigate('/login', { replace: true });
                });
              }}
            >
              <Icon
                name="signOut"
                className="w-4 h-4"
              />
            </HeaderIconLink>
          : <>
              <HeaderIconLink
                to="/login"
                className="flex-1"
              >
                <Icon
                  name="signIn"
                  className="w-4 h-4"
                />
              </HeaderIconLink>
              <HeaderIconLink
                to="/signup"
                className="flex-1"
              >
                <Icon
                  name="signUp"
                  className="w-4 h-4"
                />
              </HeaderIconLink>
            </>
          }
        </div>
      </div>
    </div>
  );
};
