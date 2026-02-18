import { BooksSection } from '@/components/BooksSection';
import { MainBanner } from '@/components/MainBanner';
import { CategoriesSection } from '@/components/CategoriesSection/CategoriesSection.tsx';

export const HomePage = () => {
  return (
    <main className="flex flex-col w-full">
      <MainBanner />
      <BooksSection
        title="New Books"
        //fetchBooks={getNewBooks}
      />

      <CategoriesSection />

      <BooksSection
        title="You may like"
        //fetchBooks={getYouMightLikeBooks}
      />
    </main>
  );
};
