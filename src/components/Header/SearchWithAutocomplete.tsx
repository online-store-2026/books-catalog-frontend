import React, { useEffect, useState } from 'react';
import { SearchInput } from '../ui/input/SearchInput';
import type { Book } from '@/types/Book';
import { useNavigate } from 'react-router-dom';
import { searchAllBooks } from '@/hooks/searchAllBooks';
import { TextHighlighter } from './TextHighlighter';

type Props = {
  onSelect?: () => void;
};

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

export const SearchWithAutocomplete = ({ onSelect }: Props) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [results, setResults] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);

  const showResults = isFocused && searchTerm.trim().length > 0;
  const navigate = useNavigate();
  const clearSearch = () => {
    setSearchTerm('');
    setResults([]);
    setIsFocused(false);
  };

  const handleBookChange = (newBook: Book) => {
    navigate(`/item/${newBook.type}/${newBook.slug}`);
    clearSearch();
    onSelect?.();
  };

  useEffect(() => {
    if (!searchTerm.trim()) {
      return;
    }

    searchAllBooks(searchTerm)
      .then((data) => setResults(data))
      .catch((err) => console.error(err))
      .finally(() => setLoading(false));
  }, [searchTerm]);

  return (
    <div className="relative">
      <SearchInput
        value={searchTerm}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setSearchTerm(e.target.value)
        }
        onFocus={() => setIsFocused(true)}
        onBlur={() => setTimeout(clearSearch, 200)}
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
                      onClick={() => handleBookChange(book)}
                      className={STYLES.listItem}
                    >
                      <p className={STYLES.bookName}>
                        <TextHighlighter
                          text={book.name}
                          query={searchTerm}
                        />
                      </p>
                      <p className={STYLES.bookAuthor}>
                        <TextHighlighter
                          text={book.author}
                          query={searchTerm}
                        />
                      </p>
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
