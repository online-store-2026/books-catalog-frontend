import { Catalog } from '@/components/Catalog/Catalog';
import { getAudioBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/hooks/useFetchBooks';

export const AudiobookPage = () => {
  const { books, error, isLoading } = useFetchBooks(getAudioBooks);

  if (error) return <div>{error}</div>;

  return (
    <Catalog
      products={books}
      title="Audiobook"
      isLoading={isLoading}
    />
  );
};
