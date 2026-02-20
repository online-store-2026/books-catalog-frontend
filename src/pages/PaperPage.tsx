import { Catalog } from '@/components/Catalog/Catalog';
import { getPaperBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/hooks/useFetchBooks';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/components/ui/Loader';

export const PaperPage = () => {
  const { t } = useTranslation();
  const { books, error, isLoading } = useFetchBooks(getPaperBooks);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Catalog
      products={books}
      title={t('categories.paper')}
    />
  );
};
