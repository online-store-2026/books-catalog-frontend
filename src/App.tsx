import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { AudiobookPage } from '@/pages/AudiobookPage';
import { CartPage } from '@/pages/CartPage';
import { CatalogPage } from '@/pages/CatalogPage';
import CheckoutPage from '@/pages/CheckoutPage';
import { ContactsPage } from '@/pages/ContactsPage';
import { FavouritesPage } from '@/pages/FavouritesPage';
import { HomePage } from '@/pages/HomePage';
import { ItemCardPage } from '@/pages/ItemCardPage';
import { KindlePage } from '@/pages/KindlePage';
import { NotFoundPage } from '@/pages/NotFoundPage.tsx';
import { PaperPage } from '@/pages/PaperPage';
import { RightsPage } from '@/pages/RightsPage';
import { CategoryPage } from './pages/CategoryPage';
import { BooksProvider } from './context/BooksContext';
import { BookWordsBackground } from '@/components/BookWordsBackground';

function App() {
  return (
    <>
      <BooksProvider>
        <div className="flex min-h-screen flex-col relative">
          <BookWordsBackground />
          <Header />
          <main className="flex-1 relative z-10">
            <Routes>
              <Route
                path="/"
                element={<HomePage />}
              />
              <Route
                path="/home"
                element={<Navigate to="/" />}
              />
              <Route
                path="/catalog"
                element={<CatalogPage />}
              />
              <Route
                path="/paper"
                element={<PaperPage />}
              />
              <Route
                path="/kindle"
                element={<KindlePage />}
              />
              <Route
                path="/audiobook"
                element={<AudiobookPage />}
              />
              <Route
                path="/category/:categoryName"
                element={<CategoryPage />}
              />
              <Route
                path="/favourites"
                element={<FavouritesPage />}
              />
              <Route
                path="/cart"
                element={<CartPage />}
              />
              <Route
                path="/checkout"
                element={<CheckoutPage />}
              />
              <Route
                path="/contacts"
                element={<ContactsPage />}
              />
              <Route
                path="/rights"
                element={<RightsPage />}
              />
              <Route
                path="/item/:type/:bookSlug"
                element={<ItemCardPage />}
              />
              <Route
                path="*"
                element={<NotFoundPage />}
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BooksProvider>
    </>
  );
}

export default App;
