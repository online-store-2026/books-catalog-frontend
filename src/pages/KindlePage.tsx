import { Catalog } from '@/components/Catalog/Catalog';
import { getKindleBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/hooks/useFetchBooks';
import { useTranslation } from 'react-i18next';
import { Loader } from '@/components/ui/Loader';

export const KindlePage = () => {
  const { t } = useTranslation();
  const { books, error, isLoading } = useFetchBooks(getKindleBooks);

  if (error) {
    return <div>{error}</div>;
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <Catalog
      products={books}
      title={t('categories.kindle')}
    />
  );
};
