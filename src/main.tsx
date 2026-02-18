import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { BrowserRouter } from 'react-router-dom';
import { CartFavoritesProvider } from '@/context/CartFavoritesContext';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <CartFavoritesProvider>
      <App />
    </CartFavoritesProvider>
  </BrowserRouter>,
);
