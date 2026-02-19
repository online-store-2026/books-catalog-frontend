import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getUserOrders } from '@/services/paymentAPI';
import type { Order } from '@/types/Order';

const StatusBadge = ({ status }: { status: Order['status'] }) => {
  const config = {
    paid: { label: 'Paid', className: 'bg-green-100 text-green-700' },
    pending: { label: 'Pending', className: 'bg-yellow-100 text-yellow-700' },
    processing: { label: 'Processing', className: 'bg-blue-100 text-blue-700' },
    failed: { label: 'Failed', className: 'bg-red-100 text-red-700' },
    cancelled: { label: 'Cancelled', className: 'bg-gray-100 text-gray-500' },
  };
  const { label, className } = config[status] ?? config.pending;
  return (
    <span
      className={`inline-flex items-center px-2.5 py-1 rounded text-xs font-semibold ${className}`}
    >
      {label}
    </span>
  );
};

const OrdersPage = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getUserOrders()
      .then(setOrders)
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-32">
        <span className="w-8 h-8 border-2 border-gray-200 border-t-gray-900 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="py-10 pb-24">
      <div className="max-w-3xl mx-auto px-6">
        {/* ── Header ──────────────────────────────────── */}
        <div className="mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-1">
            My Orders
          </h1>
          <p className="text-sm text-gray-400">
            {orders.length === 0 ?
              'No orders yet'
            : `${orders.length} ${orders.length === 1 ? 'order' : 'orders'}`}
          </p>
        </div>

        {/* ── Empty state ──────────────────────────────── */}
        {orders.length === 0 && (
          <div className="flex flex-col items-center gap-6 py-20 text-center">
            <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <line
                  x1="3"
                  y1="6"
                  x2="21"
                  y2="6"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M16 10a4 4 0 01-8 0"
                  stroke="#9ca3af"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div>
              <p className="text-base font-semibold text-gray-900 mb-1">
                No orders yet
              </p>
              <p className="text-sm text-gray-400">
                Your orders will appear here after checkout
              </p>
            </div>
            <Link
              to="/"
              className="h-12 px-8 bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold tracking-widest uppercase rounded flex items-center justify-center transition-colors"
            >
              Start shopping
            </Link>
          </div>
        )}

        {/* ── Orders list ──────────────────────────────── */}
        {orders.length > 0 && (
          <ul className="flex flex-col gap-4">
            {orders.map((order) => (
              <li key={order.id}>
                <Link
                  to={`/order-success/${order.id}`}
                  className="block border border-gray-200 rounded-lg overflow-hidden hover:border-gray-400 transition-colors group"
                >
                  {/* Card header */}
                  <div className="flex items-center justify-between px-5 py-4 bg-gray-50 border-b border-gray-200">
                    <div className="flex flex-col gap-0.5">
                      <p className="text-[11px] font-bold tracking-widest uppercase text-gray-400">
                        Order ID
                      </p>
                      <p className="text-sm font-semibold text-gray-900 font-mono">
                        {order.id}
                      </p>
                    </div>
                    <div className="flex flex-col items-end gap-1.5">
                      <StatusBadge status={order.status} />
                      <p className="text-[11px] text-gray-400">
                        {new Date(order.createdAt).toLocaleDateString('en-GB', {
                          day: 'numeric',
                          month: 'short',
                          year: 'numeric',
                        })}
                      </p>
                    </div>
                  </div>

                  {/* Books preview */}
                  <div className="px-5 py-4 flex items-center gap-4">
                    {/* Images stack */}
                    <div className="flex -space-x-3">
                      {order.items.slice(0, 3).map((item, i) => (
                        <img
                          key={item.id}
                          src={item.images[0]}
                          alt={item.name}
                          className="w-10 h-14 object-cover rounded-sm border-2 border-white"
                          style={{ zIndex: 10 - i }}
                        />
                      ))}
                      {order.items.length > 3 && (
                        <div
                          className="w-10 h-14 rounded-sm border-2 border-white bg-gray-100 flex items-center justify-center"
                          style={{ zIndex: 7 }}
                        >
                          <span className="text-[10px] font-bold text-gray-500">
                            +{order.items.length - 3}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {order.items.map((i) => i.name).join(', ')}
                      </p>
                      <p className="text-xs text-gray-400 mt-0.5 capitalize">
                        {order.paymentMethod} ·{' '}
                        {order.items.reduce((s, i) => s + i.quantity, 0)} items
                      </p>
                    </div>

                    {/* Total + arrow */}
                    <div className="flex items-center gap-3 flex-shrink-0">
                      <span className="text-base font-extrabold text-gray-900">
                        ${order.total.toFixed(2)}
                      </span>
                      <svg
                        width="7"
                        height="11"
                        viewBox="0 0 7 11"
                        fill="none"
                        className="rotate-180 text-gray-400 group-hover:text-gray-900 transition-colors"
                      >
                        <path
                          d="M6 1L1 5.5L6 10"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default OrdersPage;
