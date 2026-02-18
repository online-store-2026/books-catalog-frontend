import { useState, useEffect } from 'react';
import type { Book } from '@/types/Book';

export const useFetchBooks = (fetchFn: () => Promise<Book[]>) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const loadBooks = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const data = await fetchFn();
        setBooks(data);
      } catch (err) {
        console.error('Помилка завантаження:', err);
        setError('');
      } finally {
        setIsLoading(false);
      }
    };

    loadBooks();
  }, [fetchFn]);

  return { books, error, isLoading };
};
