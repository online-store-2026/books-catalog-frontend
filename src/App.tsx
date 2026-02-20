import './App.css';

import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
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
import ToasterWrapper from './components/ui/ToasterWrapper/ToasterWrapper';
import OrderSuccessPage from '@/pages/OrderSuccessPage';
import OrdersPage from '@/pages/OrderPage.tsx';
import { LoginPage } from './pages/LoginPage';
import { SignUpPage } from './pages/SignUpPage';

// import { CategoriesSection } from '@/components/CategoriesSection/CategoriesSection';

function App() {
  const location = useLocation();

  const hideLayout =
    location.pathname === '/login' || location.pathname === '/signup';

  return (
    <>
      <div className="flex min-h-screen flex-col">
        {!hideLayout && <Header />}
        <main className="flex-1">
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
              path="/login"
              element={<LoginPage />}
            />
            <Route
              path="/signup"
              element={<SignUpPage />}
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
              path="/order-success/:orderId"
              element={<OrderSuccessPage />}
            />
            <Route
              path="/orders"
              element={<OrdersPage />}
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
          {/* <CategoriesSection /> */}
        </main>
        <Footer />
        <ToasterWrapper />
      </div>
    </>
  );
}

export default App;
