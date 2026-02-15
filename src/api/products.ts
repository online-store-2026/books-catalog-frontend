import type { Audiobook, Kindle, Paperback } from '../types/Product';

export const getAudiobooks = (): Promise<Audiobook[]> => {
  return fetch('/api/audiobook.json').then((response) => {
    return response.json();
  });
};

export const getPaperbacks = (): Promise<Paperback[]> => {
  return fetch('/api/paperback.json').then((response) => {
    return response.json();
  });
};

export const getKindles = (): Promise<Kindle[]> => {
  return fetch('/api/kindle.json').then((response) => {
    return response.json();
  });
};
