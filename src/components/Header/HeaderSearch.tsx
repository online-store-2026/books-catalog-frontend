import { Search } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

const CATEGORIES = [
  { label: 'Programming', value: 'programming' },
  { label: 'Psychology', value: 'psychology' },
  { label: 'Fantasy', value: 'fantasy' },
  { label: 'Drama', value: 'drama' },
  { label: 'Detective', value: 'detective' },
];

export const HeaderSearch = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentCategory =
    location.pathname.startsWith('/category/') ?
      location.pathname.split('/')[2]
    : '';

  const handleCategoryChange = (value: string) => {
    navigate(`/category/${value}`);
  };

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

      <Select
        value={currentCategory}
        onValueChange={handleCategoryChange}
      >
        <SelectTrigger
          className={cn(
            'flex items-center justify-between gap-3 px-4 h-[40px] min-w-[155px]',
            'border border-[#E2E6E9] rounded-[8px] bg-white transition-all outline-none',
            'text-[14px] font-sans font-bold text-[#313237] whitespace-nowrap',
            'hover:border-[#B4BDC3] focus:ring-0 focus:ring-offset-0 data-[state=open]:border-[#313237]',
          )}
        >
          <SelectValue placeholder="Categories" />
        </SelectTrigger>

        <SelectContent className="min-w-[180px] bg-white border border-[#E2E6E9] rounded-[8px] shadow-lg py-2">
          <SelectGroup>
            {CATEGORIES.map((category) => (
              <SelectItem
                key={category.value}
                value={category.value}
                className={cn(
                  'px-4 py-2 text-[14px] cursor-pointer transition-colors outline-none',
                  'text-[#89939A] focus:bg-[#FAFBFC] focus:text-[#313237]',
                  'data-[state=checked]:bg-[#FAFBFC] data-[state=checked]:text-[#313237] data-[state=checked]:font-medium',
                )}
              >
                {category.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
};
