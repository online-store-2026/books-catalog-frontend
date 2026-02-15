import { cn } from '@/lib/utils';

const NAV_ITEMS = ['HOME', 'PAPER', 'KINDLE', 'AUDIOBOOK'];

export const HeaderNav = () => {
  return (
    <nav className="hidden sm:flex items-center gap-8 text-[14px] font-bold h-full mr-auto">
      {NAV_ITEMS.map((link) => (
        <a
          key={link}
          href="#"
          className={cn(
            'relative h-full flex items-center px-1',
            'font-sans font-bold text-[12px] tracking-[0.01em] uppercase group',
            link === 'active-link' ? 'text-[#313237]' : (
              'text-[#89939A] hover:text-[#313237] active:text-[#313237] focus:text-[#313237]'
            ),
          )}
        >
          {link}
          <span className="absolute bottom-0 left-0 w-full h-[3px] translate-y-[1px] group-hover:bg-[#313237] group-active:bg-[#313237] group-focus:bg-[#313237]" />
        </a>
      ))}
    </nav>
  );
};
