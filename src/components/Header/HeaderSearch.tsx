import { useState, useRef, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Icon } from '../ui/icons';
import { SearchInput } from '../ui/input/SearchInput';

const CATEGORIES = ['Item', 'Item', 'Item', 'Item', 'Item'];

type Props = {
  isMobile?: boolean;
};

export const HeaderSearch = ({ isMobile }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('Categories');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as HTMLElement)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div
      className={cn(
        'w-full',
        isMobile ?
          'flex flex-col gap-4 mt-4' // vertical для burger menu
        : 'hidden lg:flex items-center gap-3 h-full', // горизонтально для desktop
      )}
    >
      <SearchInput />

      <div
        className="relative"
        ref={dropdownRef}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center justify-between gap-3 px-4 h-[40px] border border-[#E2E6E9] rounded-[8px] bg-white transition-all outline-none',
            isMobile ? 'w-[289px] mt-2' : 'w-[176px]',
            isOpen ? 'border-[#313237]' : 'hover:border-[#B4BDC3]',
            !isMobile && 'mr-6',
          )}
        >
          <span className="text-[14px] font-sans font-bold text-[#313237] whitespace-nowrap">
            {selectedCategory}
          </span>
          <Icon
            name="chevronDown"
            className={cn(
              'text-[#89939A] transition-transform duration-200 w-4 h-4',
              isOpen && 'rotate-180 text-[#313237]',
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute top-[calc(100%+4px)] left-0 w-full min-w-[180px] bg-white border border-[#E2E6E9] rounded-[8px] shadow-lg py-2 z-50">
            {CATEGORIES.map((category) => (
              <div
                key={category}
                onClick={() => {
                  setSelectedCategory(category);
                  setIsOpen(false);
                }}
                className={cn(
                  'px-4 py-2 text-[14px] cursor-pointer transition-colors',
                  'text-[#89939A] hover:bg-[#FAFBFC] hover:text-[#313237]',
                  selectedCategory === category &&
                    'bg-[#FAFBFC] text-[#313237] font-medium',
                )}
              >
                {category}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
