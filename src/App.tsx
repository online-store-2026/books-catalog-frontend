import './App.css';

import { Routes, Route, Navigate } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { CatalogPage } from './pages/CatalogPage';
import { FavouritesPage } from './pages/FavouritesPage';
import { HomePage } from './pages/HomePage';
import { ItemCardPage } from './pages/ItemCardPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { CartPage } from './pages/CartPage';

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
              path="/favourites"
              element={<FavouritesPage />}
            />
            <Route
              path="/cart"
              element={<CartPage />}
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
        </main>
        <Footer />
      </div>
    </>
  );
}

export default App;
