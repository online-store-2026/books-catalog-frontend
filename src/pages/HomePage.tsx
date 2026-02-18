import { BooksSection } from './../components/BooksSection';
import { MainBanner } from '@/components/MainBanner';

export const HomePage = () => {
  return (
    <main className="flex flex-col w-full">
      <MainBanner />
      <BooksSection
        title="New Books"
        //fetchBooks={getNewBooks}
      />

      <BooksSection
        title="You may like"
        //fetchBooks={getYouMightLikeBooks}
      />
    </main>
  );
};
