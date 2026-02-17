import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { cn } from '@/lib/utils';

const CATEGORIES = ['Item', 'Item', 'Item', 'Item', 'Item'];

export const HeaderSearch = () => {
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
    <div className="hidden lg:flex items-center gap-[12px] mr-6 h-full">
      <div className="flex items-center gap-2 px-4 h-[40px] min-w-[300px] border border-[#E2E6E9] rounded-[8px] bg-[#FAFBFC] focus-within:border-[#B4BDC3] transition-colors">
        <Search
          size={18}
          className="text-[#313237]"
        />
        <input
          type="text"
          placeholder="Find a book or author"
          className="w-full bg-transparent outline-none text-[14px] text-[#313237] placeholder:text-[#89939A]"
        />
      </div>

      <div
        className="relative"
        ref={dropdownRef}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={cn(
            'flex items-center justify-between gap-3 px-4 h-[40px] min-w-[155px]',
            'border border-[#E2E6E9] rounded-[8px] bg-white transition-all outline-none',
            isOpen ? 'border-[#313237]' : 'hover:border-[#B4BDC3]',
          )}
        >
          <span className="text-[14px] font-sans font-bold text-[#313237] whitespace-nowrap">
            {selectedCategory}
          </span>
          <ChevronDown
            size={16}
            className={cn(
              'text-[#89939A] transition-transform duration-200',
              isOpen && 'rotate-180 text-[#313237]',
            )}
          />
        </button>

        {isOpen && (
          <div className="absolute top-[calc(100%+4px)] left-0 w-full min-w-[180px] bg-white border border-[#E2E6E9] rounded-[8px] shadow-lg py-2 z-50 animate-in fade-in zoom-in-95 duration-100">
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
