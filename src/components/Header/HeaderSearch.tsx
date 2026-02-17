// import { useState, useRef, useEffect } from 'react';
// import { Icon } from '../ui/icons';
// import { SearchInput } from '../ui/input/SearchInput';
import { cn } from '@/lib/utils';
import { Search } from 'lucide-react';
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

// type Props = {
//   isMobile?: boolean;
// };

// export const HeaderSearch = ({ isMobile }: Props) => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedCategory, setSelectedCategory] = useState('Categories');
//   const dropdownRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const handleClickOutside = (event: MouseEvent) => {
//       if (
//         dropdownRef.current &&
//         !dropdownRef.current.contains(event.target as HTMLElement)
//       ) {
//         setIsOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   return (
//     <div
//       className={cn(
//         'w-full',
//         isMobile ?
//           'flex flex-col gap-4 mt-4'
//         : 'hidden lg:flex items-center gap-3 h-full',
//       )}
//     >
//       <SearchInput />
//       <div
//         ref={dropdownRef}
//         className={cn(
//           'relative flex items-center justify-between gap-3 px-4 h-[40px] min-w-[155px]',
//           'border border-[#E2E6E9] rounded-[8px] bg-white transition-all outline-none cursor-pointer',
//           isOpen ? 'border-[#313237]' : 'hover:border-[#B4BDC3]',
//           isMobile ? 'w-[289px] mt-2' : 'w-[176px]',
//           !isMobile && 'mr-6',
//         )}
//         onClick={() => setIsOpen(!isOpen)}
//       >
//         <span className="text-[14px] font-sans font-bold text-[#313237] whitespace-nowrap">
//           {selectedCategory}
//         </span>
//         <Icon
//           name="chevronDown"
//           className={cn(
//             'text-[#89939A] transition-transform duration-200 w-4 h-4',
//             isOpen && 'rotate-180 text-[#313237]',
//           )}
//         />
//         {isOpen && (
//           <div className="absolute top-[calc(100%+4px)] left-0 w-full min-w-[180px] bg-white border border-[#E2E6E9] rounded-[8px] shadow-lg py-2 z-50">
//             {CATEGORIES.map((cat) => (
//               <div
//                 key={cat.value}
//                 className="px-4 py-2 text-[14px] text-[#89939A] hover:bg-[#FAFBFC] hover:text-[#313237] cursor-pointer"
//                 onClick={() => {
//                   setSelectedCategory(cat.label);
//                   setIsOpen(false);
//                 }}
//               >
//                 {cat.label}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

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
    <div className="hidden lg:flex items-center gap-3 mr-6 h-full">
      <div className="flex items-center gap-2 px-4 h-[40px] min-w-[300px] border border-border rounded-md bg-secondary focus-within:border-ring transition-colors">
        <Search
          size={18}
          className="text-foreground"
        />
        <input
          type="text"
          placeholder="Find a book or author"
          className="w-full bg-transparent outline-none text-sm text-foreground placeholder:text-muted-foreground"
        />
      </div>

      <Select
        value={currentCategory}
        onValueChange={handleCategoryChange}
      >
        <SelectTrigger
          className={cn(
            'flex items-center justify-between gap-3 px-4 h-[40px] w-[176px]',
            'border border-border rounded-md bg-background transition-all outline-none',
            'text-sm font-bold text-foreground whitespace-nowrap',
            'hover:border-ring focus:ring-0 focus:ring-offset-0 data-[state=open]:border-foreground',
          )}
        >
          <SelectValue placeholder="Categories" />
        </SelectTrigger>

        <SelectContent className="min-w-[180px] bg-background border border-border rounded-md shadow-lg py-2">
          <SelectGroup>
            {CATEGORIES.map((category) => (
              <SelectItem
                key={category.value}
                value={category.value}
                className={cn(
                  'px-4 py-2 text-sm cursor-pointer transition-colors outline-none',
                  'text-muted-foreground focus:bg-secondary focus:text-foreground',
                  'data-[state=checked]:bg-secondary data-[state=checked]:text-foreground data-[state=checked]:font-medium',
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
