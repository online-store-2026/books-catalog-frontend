import { Catalog } from '@/components/Catalog/Catalog';
import { getKindleBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/hooks/useFetchBooks';

export const KindlePage = () => {
  const { books, error, isLoading } = useFetchBooks(getKindleBooks);

  if (error) return <div>{error}</div>;

  return (
    <Catalog
      products={books}
      title="Kindle books"
    />
  );
};
