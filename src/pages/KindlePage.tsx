import { Catalog } from '@/components/Catalog/Catalog';
import { getKindleBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/hooks/useFetchBooks';
import { TYPOGRAPHY } from '@/constants/typography';
import { useTranslation } from 'react-i18next';

export const KindlePage = () => {
  const { t } = useTranslation();
  const { books, error, isLoading } = useFetchBooks(getKindleBooks);

  if (error) return <div>{error}</div>;

  if (isLoading) {
    return (
      <div className="w-full min-h-[60vh] flex items-center justify-center">
        <p className={TYPOGRAPHY.h3}>Loading...</p>
      </div>
    );
  }

  return (
    <Catalog
      products={books}
      title={t('categories.kindle')}
    />
  );
};
