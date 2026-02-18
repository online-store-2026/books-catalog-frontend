import React, { useState } from 'react';
import { SearchInput } from '../ui/input/SearchInput';
import { useFetchBooks } from '@/store/useFetchBooks';
import { searchAllBooks } from '@/services/searchAllBooks';
import type { Book } from '@/types/Book';

const TEXTS = {
  placeholder: 'Find a book or author',
  searching: 'Searching...',
  noResults: 'No books found',
};

const STYLES = {
  dropdown:
    'absolute top-full left-0 w-full mt-2 bg-white border border-gray-300 rounded-lg shadow-xl z-[100] animate-in fade-in zoom-in-95 duration-200',
  scrollArea: 'max-h-[320px] overflow-y-auto custom-scrollbar',
  listItem: 'p-3 hover:bg-slate-50 cursor-pointer transition-colors group',
  bookName:
    'text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate',
  bookAuthor: 'text-[12px] text-gray-500',
};

export const SearchWithAutocomplete = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const { data: results, loading } = useFetchBooks(
    () => searchAllBooks(searchTerm),
    [searchTerm],
  );

  const showResults = isFocused && searchTerm.trim().length > 0;

  return (
    <div className="relative w-[289px]">
      <SearchInput
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(() => setIsFocused(false), 200)}
        placeholder={TEXTS.placeholder}
      />

      {showResults && (
        <div className={STYLES.dropdown}>
          <div className={STYLES.scrollArea}>
            {loading ?
              <div className={STYLES.listItem + ' flex items-center gap-2'}>
                <div className={STYLES.bookName}>{TEXTS.searching}</div>
                {TEXTS.searching}
              </div>
            : <ul className="divide-y divide-gray-100">
                {results.length > 0 ?
                  results.map((book: Book) => (
                    <li
                      key={book.id}
                      className="p-3 hover:bg-slate-50 cursor-pointer transition-colors group"
                      onMouseDown={() => {
                        console.log('Вибрано:', book.name);
                        setSearchTerm(book.name);
                      }}
                    >
                      <p className="text-sm font-medium text-gray-900 group-hover:text-blue-600 truncate">
                        {book.name}
                      </p>
                      <p className="text-[12px] text-gray-500">{book.author}</p>
                    </li>
                  ))
                : <li className="p-4 text-sm text-gray-400 text-center italic">
                    {TEXTS.noResults}
                  </li>
                }
              </ul>
            }
          </div>
        </div>
      )}
    </div>
  );
};
