import type { Book } from '@/types/Book';
import { client } from './fetchClient';

export const getPaperBooks = () => {
  return client.get<Book[]>('paperback');
};

export const getKindleBooks = () => {
  return client.get<Book[]>('kindle');
};

export const getAudioBooks = () => {
  return client.get<Book[]>('audiobook');
};
