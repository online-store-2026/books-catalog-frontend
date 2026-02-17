import type { Book } from '@/types/Book';
import { ProductCard } from '../ProductCard';

type Props = {
  books: Book[];
};

export const BooksList = ({ books }: Props) => {
  return (
    <>
      {books.map((book) => (
        <div
          key={book.id}
          className="
            col-span-4
            md:col-span-6
            lg:col-span-6
            w-full
            max-w-[288px]
            mb-[24px]
            justify-self-center
            flex justify-center
          "
        >
          <ProductCard book={book} />
        </div>
      ))}
    </>
  );
};
