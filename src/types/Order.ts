import type { CartItem } from './Book';

export type OrderStatus =
  | 'pending'
  | 'processing'
  | 'paid'
  | 'failed'
  | 'cancelled';
export type PaymentMethod = 'stripe' | 'liqpay';

export interface CustomerData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  zip: string;
  country: string;
}

export interface Order {
  id: string;
  createdAt: string;
  status: OrderStatus;
  paymentMethod: PaymentMethod;
  customer: CustomerData;
  items: CartItem[];
  subtotal: number;
  total: number;
  invoiceUrl?: string;
}

export interface CreateOrderPayload {
  customer: CustomerData;
  items: CartItem[];
  paymentMethod: PaymentMethod;
}
