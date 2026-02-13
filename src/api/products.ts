import { Product } from '../types/Product';

export const getPhones = (): Promise<Product[]> => {
  return fetch('/api/phones.json').then((response) => {
    return response.json();
  });
};

export const getTablets = (): Promise<Product[]> => {
  return fetch('/api/tablets.json').then((response) => {
    return response.json();
  });
};

export const getAccessories = (): Promise<Product[]> => {
  return fetch('/api/accessories.json').then((response) => {
    return response.json();
  });
};
