import { useState } from 'react';
import { LiqPayForm } from './LiqPayForm';
import { getLiqPayPayload } from '@/services/paymentAPI';

interface LiqPayButtonProps {
  orderId: string;
  amount: number;
  onError: (msg: string) => void;
}

export const LiqPayButton = ({
  orderId,
  amount,
  onError,
}: LiqPayButtonProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [payload, setPayload] = useState<{
    data: string;
    signature: string;
  } | null>(null);

  const handleClick = async () => {
    setIsLoading(true);
    try {
      const result = await getLiqPayPayload(orderId, amount);
      setPayload(result);

      // Mock — показуємо що буде після підключення бекенду
      if (
        result.data.startsWith('mock') ||
        result.signature.startsWith('mock')
      ) {
        alert(
          '🔧 Mock mode\n\n' +
            'З реальним бекендом тут відбудеться автоматичний редирект на сторінку LiqPay.\n\n' +
            `Order ID: ${orderId}\nAmount: $${amount.toFixed(2)}`,
        );
      }
    } catch {
      onError('Failed to initialize LiqPay payment. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Прихована форма — сабмітить автоматично коли є реальні дані */}
      {payload && (
        <LiqPayForm
          data={payload.data}
          signature={payload.signature}
        />
      )}

      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-3 p-4 bg-blue-50 border border-blue-100 rounded">
          {/* LiqPay logo */}
          <svg
            width="48"
            height="20"
            viewBox="0 0 48 20"
            fill="none"
          >
            <rect
              width="48"
              height="20"
              rx="3"
              fill="#00AAFF"
            />
            <text
              x="7"
              y="14"
              fontFamily="Arial"
              fontWeight="bold"
              fontSize="9"
              fill="white"
            >
              LiqPay
            </text>
          </svg>
          <p className="text-xs text-blue-700">
            Visa, Mastercard, Приват24, monobank — захищена оплата через LiqPay
          </p>
        </div>

        <button
          type="button"
          onClick={handleClick}
          disabled={isLoading}
          className="h-14 bg-[#00AAFF] hover:bg-[#0095e0] disabled:opacity-60 disabled:cursor-not-allowed text-white text-sm font-bold tracking-widest uppercase rounded transition-colors flex items-center justify-center"
        >
          {isLoading ?
            <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          : 'Pay with LiqPay'}
        </button>

        <p className="text-[11px] text-gray-400 text-center">
          You will be redirected to LiqPay&#39;s secure payment page
        </p>
      </div>
    </>
  );
};
