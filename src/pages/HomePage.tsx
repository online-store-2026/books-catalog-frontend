import { useTranslation } from 'react-i18next';
import { useBooks } from '../context/BooksContext';
//import type { Book } from '@/types/Book';
import { BooksSection } from '@/components/BooksSection';
import { MainSlider } from '@/components/MainSlider';
import { CategoriesSection } from '@/components/CategoriesSection/CategoriesSection.tsx';

export const HomePage = () => {
  const { newBooks, suggestedBooks, isLoading } = useBooks();
  const { t } = useTranslation();

  if (isLoading) return <div>Loading...</div>;

  return (
    <main className="flex flex-col w-full gap-[56px] lg:gap-[80px]">
      <MainSlider />
      <BooksSection
        title={t('categories.newBooks')}
        books={newBooks}
      />
      <CategoriesSection />
      <BooksSection
        title={t('categories.youMayLike')}
        books={suggestedBooks}
      />
    </main>
  );
};
