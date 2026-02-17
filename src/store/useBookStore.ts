/**
 * BOOK STORE (Zustand)
 *
 * This is a global state: cart, favorites, search, current book.
 * Any component can read it with useBookStore() and update it by calling the actions.
 */

import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Book, CartItem } from '@/types/Book';

// --- Type: what data and functions live in the store ---
type BookStore = {
  // Data (the actual values)
  cart: CartItem[];
  favorites: Book[];
  query: string;
  currentBook: Book | null;
  bookVariants: Book[];

  // Cart: add, remove, change quantity
  addToCart: (book: Book) => void;
  removeFromCart: (id: string) => void;
  increaseQuantity: (id: string) => void;
  decreaseQuantity: (id: string) => void;

  // Favorites: add / remove book
  addToFavorites: (book: Book) => void;
  removeFromFavorites: (book: Book) => void;

  // Search box and current product (for item page)
  setQuery: (query: string) => void;
  setCurrentBook: (book: Book) => void;
  setBookVariants: (books: Book[]) => void;
};

const MAX_CART_QUANTITY = 10;

// create() = make the store. persist() = save part of it to localStorage.
// "set" is the function we use to update the store (we pass new values to set()).
export const useBookStore = create<BookStore>()(
  persist(
    (set) => ({
      // --- Starting values (empty cart, no favorites, etc.) ---
      cart: [],
      favorites: [],
      query: '',
      currentBook: null,
      bookVariants: [],

      setCurrentBook: (book) => set({ currentBook: book }),
      setBookVariants: (books) => set({ bookVariants: books }),
      setQuery: (query) => set({ query: query.trim() }),

      // --- addToCart: put book in cart. If it's already there, just +1 quantity ---
      addToCart: (book) => {
        set((state) => {
          const existing = state.cart.find((b) => b.id === book.id);
          const updated =
            existing ?
              state.cart.map((b) =>
                b.id === book.id ? { ...b, quantity: b.quantity + 1 } : b,
              )
            : [...state.cart, { ...book, quantity: 1 }];
          return { cart: updated };
        });
      },

      // --- removeFromCart: remove one item from cart by id ---
      removeFromCart: (id) =>
        set((state) => ({ cart: state.cart.filter((b) => b.id !== id) })),

      // --- increaseQuantity: +1 for this item, but not more than MAX_CART_QUANTITY ---
      increaseQuantity: (id) =>
        set((state) => ({
          cart: state.cart.map((b) =>
            b.id === id && b.quantity < MAX_CART_QUANTITY ?
              { ...b, quantity: b.quantity + 1 }
            : b,
          ),
        })),

      // --- decreaseQuantity: -1 for this item. If it was 1, remove from cart ---
      decreaseQuantity: (id) =>
        set((state) => {
          const found = state.cart.find((b) => b.id === id);
          return {
            cart:
              found?.quantity === 1 ?
                state.cart.filter((b) => b.id !== id)
              : state.cart.map((b) =>
                  b.id === id ? { ...b, quantity: b.quantity - 1 } : b,
                ),
          };
        }),

      // --- addToFavorites: add book if not already in favorites ---
      addToFavorites: (book) =>
        set((state) => ({
          favorites:
            state.favorites.some((b) => b.id === book.id) ?
              state.favorites
            : [...state.favorites, book],
        })),

      // --- removeFromFavorites: remove this book from favorites ---
      removeFromFavorites: (book) =>
        set((state) => ({
          favorites: state.favorites.filter((b) => b.id !== book.id),
        })),
    }),
    {
      name: 'bookstore-storage',
      // Save only cart and favorites to localStorage. Rest (query, currentBook, etc.) is not saved.
      partialize: (state) => ({
        cart: state.cart,
        favorites: state.favorites,
      }),
    },
  ),
);
