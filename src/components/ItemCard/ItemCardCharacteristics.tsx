import { TYPOGRAPHY } from '@/constants/typography';
import type { Book } from '@/types/Book';
import { formatListeningLength } from '@/utils/formatListeningLength';

type Props = {
  book: Book;
};

export const ItemCardCharacteristics: React.FC<Props> = ({ book }) => {
  const langLabel = book.lang.toUpperCase() === 'UK' ? 'Ukrainian' : 'ENG';
  const illustrationsLabel = book.illustrations ? 'Yes' : 'No';

  const items: [string, string | number | null][] = [
    ['Author', book.author],
    ['Cover', book.coverType ?? null],
    [
      'ListeningLength',
      book.listeningLength ? formatListeningLength(book.listeningLength) : null,
    ],
    ['Narrator', book.narrator ?? null],
    ['Pages', book.numberOfPages ?? null],
    ['Year', book.publicationYear ?? null],
    ['Publication', book.publication],
    ['Format', book.format ?? null],
    ['Language', langLabel],
    ['Illustrations', illustrationsLabel],
  ];

  const filteredItems = items.filter(([, value]) => value !== null);

  return (
    <section className="w-full max-w-160 mx-auto lg:mx-0">
      <h2 className={`${TYPOGRAPHY.h2} text-foreground mb-4`}>
        Characteristics
      </h2>

      <div className="border-t border-border">
        {filteredItems.map(([label, value], idx) => (
          <div
            key={label}
            className={`flex justify-between py-2.5 ${idx > 0 ? 'border-t border-border' : ''}`}
          >
            <span
              className={`${TYPOGRAPHY.body} font-medium text-muted-foreground`}
            >
              {label}
            </span>
            <span className={`${TYPOGRAPHY.body} font-medium text-foreground`}>
              {value}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};
