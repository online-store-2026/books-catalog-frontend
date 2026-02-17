import { useState, useEffect, useRef } from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
//import { Product } from '../types/Product';
import './BooksSection.css';
import { getPaperBooks } from '@/services/booksAPI';
import type { Book } from '@/types/Book';
import { ScrollButton } from '@/utils/ScrollButtons';

interface Props {
  title: string;
}

export const BooksSection = ({ title }: Props) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    getPaperBooks()
      .then((data) => {
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div className="text-center p-10">Loading suggested books...</div>;
  }

  return (
    <section
      className="
    flex flex-col
    mt-[56px] pl-[16px] gap-[24px]
    min-[640px]:mt-[56px] min-[640px]:pl-[24px]
    min-[1200px]:mt-[80px] min-[1200px]:pl-[32px]
  "
    >
      <div
        className="
      flex flex-row justify-between items-center w-full max-w-[1136px]
      pr-[16px]
      min-[640px]:pr-[24px]
      min-[1200px]:pr-0
    "
      >
        <h2
          className="
        font-bold text-foreground
        text-[22px] leading-normal
        min-[640px]:text-[32px] min-[640px]:leading-[41px]
      "
        >
          {title}
        </h2>

        <div className="flex gap-[16px]">
          <ScrollButton
            scrollRef={scrollRef}
            direction="left"
          />
          <ScrollButton
            scrollRef={scrollRef}
            direction="right"
          />
        </div>
      </div>

      <div
        ref={scrollRef}
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        className="
        flex flex-row w-full scroll-smooth
        [&::-webkit-scrollbar]:hidden
        overflow-x-auto gap-[16px] h-[400px]
        min-[640px]:h-[506px]
        min-[1200px]:overflow-x-hidden min-[1200px]:h-[571px]
      "
      >
        {books.map((book, index) => (
          <ProductCard
            key={`${book.id}-${index}`}
            book={book}
          />
        ))}
      </div>
    </section>
  );
};
