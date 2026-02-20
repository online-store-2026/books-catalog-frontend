import React, { useState } from 'react';
import {
  PaymentElement,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';
import { Button } from '@/components/ui/button';
import { TYPOGRAPHY } from '@/constants/typography';
import { Loader } from 'lucide-react';

interface StripePaymentFormProps {
  onSuccess: () => void;
  onError: (msg: string) => void;
}

export const StripePaymentForm = ({
  onSuccess,
  onError,
}: StripePaymentFormProps) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setIsLoading(true);

    const isMock = !stripe || window.location.hostname === 'localhost';

    if (isMock) {
      await new Promise((res) => setTimeout(res, 1000));
      setIsLoading(false);
      onSuccess();
      return;
    }

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: window.location.origin + '/#/order-success/pending',
      },
      redirect: 'if_required',
    });

    if (error) {
      onError(error.message ?? 'Payment failed');
    } else {
      onSuccess();
    }

    setIsLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-6"
    >
      <PaymentElement options={{ layout: 'tabs' }} />
      <Button
        type="submit"
        disabled={!stripe || isLoading}
        className={`h-14 ${TYPOGRAPHY.uppercase}`}
      >
        {isLoading ?
          <Loader />
        : 'Pay now'}
      </Button>
    </form>
  );
};
