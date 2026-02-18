import { Catalog } from '@/components/Catalog/Catalog';
import { getAudioBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/store/useFetchBooks';

export const AudiobookPage = () => {
  const { data: books, loading, error } = useFetchBooks(getAudioBooks, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="text-xl font-manrope animate-pulse text-[#89939A]">
          Loading...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center text-red-500 pt-10">
        <p>Failed to load audiobooks</p>
      </div>
    );
  }

  return (
    <Catalog
      products={books}
      title="Audiobook"
    />
  );
};
