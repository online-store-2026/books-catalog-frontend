import { client } from '@/services/fetchClient';
import type { Book } from '@/types/Book';

export const getBookAndVariants = async (
  type: 'paperback' | 'kindle' | 'audiobook',
  slug: string,
): Promise<{ current: Book; variants: Book[] }> => {
  const books = await client.get<Book[]>(type);

  const current = books.find((b) => b.slug === slug);
  if (!current) {
    throw new Error('Book not found');
  }

  const variants = books.filter((b) => b.namespaceId === current.namespaceId);

  return { current, variants };
};
