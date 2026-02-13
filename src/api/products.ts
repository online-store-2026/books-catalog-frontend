import type { Product } from '../types/Product';

export const getAudiobooks = (): Promise<Product[]> => {
  return fetch('/api/audiobook.json').then((response) => {
    return response.json();
  });
};

export const getPaperbacks = (): Promise<Product[]> => {
  return fetch('/api/paperback.json').then((response) => {
    return response.json();
  });
};

export const getKindles = (): Promise<Product[]> => {
  return fetch('/api/kindle.json').then((response) => {
    return response.json();
  });
};
