import type { Book } from '@/types/Book';
import { TYPOGRAPHY } from '@/constants/typography';

type Props = {
  book: Book;
};

export const ItemCardAbout: React.FC<Props> = ({ book }) => {
  return (
    <section className="w-full max-w-160 mx-auto lg:mx-0">
      <h2 className={`${TYPOGRAPHY.h2} text-foreground mb-4`}>About</h2>

      <div className="border-t border-border pt-4 flex flex-col gap-4 text-foreground">
        {book.description.map((paragraph, index) => (
          <p
            key={index}
            className={`${TYPOGRAPHY.body} ${index === 0 ? 'font-bold' : ''}`}
          >
            {paragraph}
          </p>
        ))}
      </div>
    </section>
  );
};
