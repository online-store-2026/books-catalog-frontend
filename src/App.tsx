import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { AudiobookPage } from './pages/AudiobookPage';
import { CartPage } from './pages/CartPage';
import { CatalogPage } from './pages/CatalogPage';
import { ContactsPage } from './pages/ContactsPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import { ItemCardPage } from './pages/ItemCardPage';
import { KindlePage } from './pages/KindlePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { PaperPage } from './pages/PaperPage';
import { RightsPage } from './pages/RightsPage';
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection';

function App() {
  return (
    <>
      <div>
        <Header />
        <main>
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
              path="/favourites"
              element={<FavouritesPage />}
            />
            <Route
              path="/cart"
              element={<CartPage />}
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
              path="/item/:id"
              element={<ItemCardPage />}
            />
            <Route
              path="*"
              element={<NotFoundPage />}
            />
          </Routes>
          <CategoriesSection />
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
