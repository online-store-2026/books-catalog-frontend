import { Catalog } from '@/components/Catalog/Catalog';
import { getPaperBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/hooks/useFetchBooks';

export const PaperPage = () => {
  const { books, error, isLoading } = useFetchBooks(getPaperBooks);

  if (error) return <div>{error}</div>;

  return (
    <Catalog
      products={books}
      title="Paper books"
    />
  );
};
