import type { Book } from '@/types/Book';
import { useLocalStorage } from './useLocalStorage';

export const useCurrentBook = () => {
  const [currentBook, setCurrentBook] = useLocalStorage<Book | null>(
    'bookstore-current-book',
    null,
  );
  const [bookVariants, setBookVariants] = useLocalStorage<Book[]>(
    'bookstore-book-variants',
    [],
  );

  return {
    currentBook,
    setCurrentBook,
    bookVariants,
    setBookVariants,
  };
};
