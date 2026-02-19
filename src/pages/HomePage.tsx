import { useTranslation } from 'react-i18next';
import { BooksSection } from '@/components/BooksSection';
import { MainBanner } from '@/components/MainBanner';
import { CategoriesSection } from '@/components/CategoriesSection/CategoriesSection.tsx';

export const HomePage = () => {
  const { t } = useTranslation();
  return (
    <main className="flex flex-col w-full gap-[56px] lg:gap-[80px]">
      <MainBanner />
      <BooksSection
        title={t('categories.newBooks')}
        //fetchBooks={getNewBooks}
      />

      <CategoriesSection />

      <BooksSection
        title={t('categories.youMayLike')}
        //fetchBooks={getYouMightLikeBooks}
      />
    </main>
  );
};
