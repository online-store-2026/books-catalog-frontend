import { useState, useEffect, useRef } from 'react';
import { getPaperbacks } from '../../api/products';
import { ProductCard } from '../ProductCard/ProductCard';
//import { Product } from '../types/Product';
import './YouMightLikePage.css';

export const YouMightLikePage = () => {
  const [books, setBooks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -288 : 288;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

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
    <section className="you-might-like w-full">
      <div className="section-header">
        <h2 className="section-title font-bold">You may like</h2>
        <div className="flex gap-[16px]">
          <button
            onClick={() => scroll('left')}
            className="w-[40px] h-[40px] flex items-center justify-center border border-border rounded-full hover:bg-accent"
          >
            ←
          </button>
          <button
            onClick={() => scroll('right')}
            className="w-[40px] h-[40px] flex items-center justify-center border border-border rounded-full hover:bg-accent"
          >
            →
          </button>
        </div>
      </div>

      <div
        className="products-slider"
        ref={scrollRef}
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
