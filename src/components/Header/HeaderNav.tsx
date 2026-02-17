import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const NAV_ITEMS = [
  { label: 'HOME', path: '/' },
  { label: 'PAPER', path: '/paper' },
  { label: 'KINDLE', path: '/kindle' },
  { label: 'AUDIOBOOK', path: '/audiobook' },
];

type Props = {
  isMobile?: boolean;
};

export const HeaderNav = ({ isMobile }: Props) => {
  const { pathname } = useLocation();

  return (
    <nav
      className={cn(
        isMobile ?
          'flex flex-col items-center gap-6 text-[16px] font-bold'
        : 'hidden sm:flex items-center gap-8 text-[14px] font-bold h-full mr-auto',
      )}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.path;

        return (
          <Link
            key={item.label}
            to={item.path}
            className={cn(
              'relative flex items-center px-1 transition-colors duration-200',
              isMobile ? 'h-auto' : 'h-full',
              'font-sans font-bold tracking-wider uppercase group',
              isActive ? 'text-[#313237]' : (
                'text-[#89939A] hover:text-[#313237]'
              ),
            )}
          >
            {item.label}
            <span
              className={cn(
                'absolute bottom-0 left-0 w-full h-[3px] translate-y-[1px] transition-all duration-300',
                isActive ?
                  'bg-[#313237] opacity-100'
                : 'bg-transparent opacity-0 group-hover:opacity-100 group-hover:bg-[#313237]',
              )}
            />
          </Link>
        );
      })}
    </nav>
  );
};
