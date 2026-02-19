import { useState } from 'react';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { InvoicePDF } from './InvoicePDF';
import { imageToBase64 } from '@/utils/imageToBase64';
import type { Order } from '@/types/Order';

interface DownloadInvoiceButtonProps {
  order: Order;
  className?: string;
}

export const DownloadInvoiceButton = ({
  order,
  className,
}: DownloadInvoiceButtonProps) => {
  const [ready, setReady] = useState(false);
  const [convertedOrder, setConvertedOrder] = useState<Order | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  const handlePrepare = async () => {
    if (ready) return;
    setIsConverting(true);

    const convertedItems = await Promise.all(
      order.items.map(async (item) => {
        const base64Images = await Promise.all(item.images.map(imageToBase64));
        return { ...item, images: base64Images.filter(Boolean) };
      }),
    );

    setConvertedOrder({ ...order, items: convertedItems });
    setReady(true);
    setIsConverting(false);
  };

  if (!ready || !convertedOrder) {
    return (
      <button
        type="button"
        onClick={handlePrepare}
        disabled={isConverting}
        className={
          className ??
          'h-14 border border-gray-200 hover:border-gray-400 text-gray-900 text-sm font-semibold rounded flex items-center justify-center gap-2 transition-colors w-full disabled:opacity-50'
        }
      >
        {isConverting ?
          <>
            <span className="w-4 h-4 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
            Preparing...
          </>
        : <>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8 1v9M8 10l-3-3M8 10l3-3"
                stroke="#111"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"
                stroke="#111"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
            Download Invoice
          </>
        }
      </button>
    );
  }

  return (
    <PDFDownloadLink
      document={<InvoicePDF order={convertedOrder} />}
      fileName={`invoice-${order.id}.pdf`}
    >
      {({ loading }) => (
        <button
          type="button"
          disabled={loading}
          className={
            className ??
            'h-14 border border-gray-200 hover:border-gray-400 text-gray-900 text-sm font-semibold rounded flex items-center justify-center gap-2 transition-colors w-full disabled:opacity-50'
          }
        >
          {loading ?
            <>
              <span className="w-4 h-4 border-2 border-gray-300 border-t-gray-900 rounded-full animate-spin" />
              Generating...
            </>
          : <>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M8 1v9M8 10l-3-3M8 10l3-3"
                  stroke="#111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M2 12v1a1 1 0 001 1h10a1 1 0 001-1v-1"
                  stroke="#111"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Download Invoice
            </>
          }
        </button>
      )}
    </PDFDownloadLink>
  );
};
