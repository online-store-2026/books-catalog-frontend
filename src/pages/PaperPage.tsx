import { Catalog } from '@/components/Catalog/Catalog';
import { getPaperBooks } from '@/services/booksAPI';
import { useFetchBooks } from '@/hooks/useFetchBooks';
import { TYPOGRAPHY } from '@/constants/typography';
import { useTranslation } from 'react-i18next';

export const PaperPage = () => {
  const { t } = useTranslation();
  const { books, error, isLoading } = useFetchBooks(getPaperBooks);

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
      title={t('categories.paper')}
    />
  );
};
