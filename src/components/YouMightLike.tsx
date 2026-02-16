import { useState, useEffect } from 'react';
import { getPaperbacks } from '../api/products';
import { ProductCard } from './ProductCard';
//import { Product } from '../types/Product';

export const YouMightLike = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getPaperbacks()
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
      w-full
      mt-[2191px] md:mt-[1522px] lg:mt-[1800px]
      pl-[16px] md:pl-[24px] lg:pl-[32px]
      gap-[24px]
      bg-pink-200
    "
    >
      <div
        className="
        flex flex-row 
        max-w-[1136px]
        w-full
        pr-[16px] md:pr-[24px] lg:pr-0
        justify-between 
        items-center
      "
      >
        <h2 className="text-[32px] font-bold leading-[41px]">
          You may also like
        </h2>
      </div>

      <div
        className="
        flex flex-row 
        overflow-x-auto
        lg:overflow-x-hidden
        gap-[16px]
        w-full
        h-[455px] lg:h-[571px]
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
