import { Favourites } from '@/components/Favourites';
import { useCartFavorites } from '@/context/CartFavoritesContext';

export const FavouritesPage = () => {
  const { favorites } = useCartFavorites();

  return <Favourites books={favorites} />;
};
