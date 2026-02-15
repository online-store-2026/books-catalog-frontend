export type ProductType = 'paperback' | 'kindle' | 'audiobook';

export interface BaseProduct {
  id: string;
  type: ProductType;
  namespaceId: string;
  name: string;
  slug: string;
  priceRegular: number;
  priceDiscount: number | null;
  images: string[];
  langAvailable: string[];
  lang: string;
  author: string;
  publicationYear: number;
  publication: string;
  category: string[];
  description: string[];
}

export interface Paperback extends BaseProduct {
  type: 'paperback';
  coverType: string;
  numberOfPages: number;
  format: string;
  illustrations: boolean;
}

export interface Kindle extends BaseProduct {
  type: 'kindle';
  coverType: string | null;
  numberOfPages: number;
  format: string;
  illustrations: boolean;
}

export interface Audiobook extends BaseProduct {
  type: 'audiobook';
  narrator: string;
  listeningLength: number;
}

export type Product = Paperback | Kindle | Audiobook;
