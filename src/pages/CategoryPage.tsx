import { Catalog } from '@/components/Catalog/Catalog';
import {
  getAudioBooks,
  getKindleBooks,
  getPaperBooks,
} from '@/services/booksAPI';
import type { Book } from '@/types/Book';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function filtredBooks(incomingBooks: Book[], category: string | undefined) {
  let filtredBooks = [...incomingBooks];

  if (category) {
    filtredBooks = filtredBooks.filter((book) => {
      return book.category?.some((cat) => cat.toLowerCase() === category);
    });
  }

  return filtredBooks;
}

export const CategoryPage = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const { categoryName } = useParams<{ categoryName: string }>();

  const title =
    categoryName ?
      categoryName?.charAt(0).toUpperCase() + categoryName?.slice(1)
    : '';

  useEffect(() => {
    Promise.all([getPaperBooks(), getKindleBooks(), getAudioBooks()])
      .then(([paper, kindle, audio]) => {
        setBooks([...paper, ...kindle, ...audio]);
      })
      .catch(console.error);
  }, []);

  const visibleBooks = filtredBooks(books, categoryName);

  return (
    <Catalog
      products={visibleBooks}
      title={title}
    />
  );
};
