import type { Order, CreateOrderPayload } from '../types/Order';

const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
const generateOrderId = () =>
  `ORD-${Date.now()}-${Math.random().toString(36).slice(2, 7).toUpperCase()}`;

const STORAGE_KEY = 'niceboook_orders';

const getStoredOrders = (): Order[] => {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]');
  } catch {
    return [];
  }
};

export const createOrder = async (
  payload: CreateOrderPayload,
): Promise<Order> => {
  await delay(600);

  const subtotal = payload.items.reduce((sum, item) => {
    const price = item.priceDiscount ?? item.priceRegular;
    return sum + price * item.quantity;
  }, 0);

  const order: Order = {
    id: generateOrderId(),
    createdAt: new Date().toISOString(),
    status: 'pending',
    paymentMethod: payload.paymentMethod,
    customer: payload.customer,
    items: payload.items,
    subtotal,
    total: subtotal,
  };

  const orders = getStoredOrders();
  orders.unshift(order);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(orders));

  return order;
};

export const getOrder = async (orderId: string): Promise<Order | null> => {
  await delay(300);
  return getStoredOrders().find((o) => o.id === orderId) ?? null;
};

export const getUserOrders = async (): Promise<Order[]> => {
  await delay(400);
  return getStoredOrders();
};

export const createStripeIntent = async (
  orderId: string,
  amount: number,
): Promise<{ clientSecret: string }> => {
  await delay(500);
  console.log('[MOCK] createStripeIntent', { orderId, amount });
  return {
    clientSecret: 'pi_mock_secret_' + Math.random().toString(36).slice(2),
  };
};

export const getLiqPayPayload = async (
  orderId: string,
  amount: number,
): Promise<{ data: string; signature: string }> => {
  await delay(500);
  console.log('[MOCK] getLiqPayPayload', { orderId, amount });
  return {
    data: btoa(JSON.stringify({ order_id: orderId, amount, currency: 'USD' })),
    signature: 'mock_sig_' + Math.random().toString(36).slice(2),
  };
};
