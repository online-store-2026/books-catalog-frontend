import { useEffect, useRef } from 'react';

interface LiqPayFormProps {
  data: string;
  signature: string;
}

export const LiqPayForm = ({ data, signature }: LiqPayFormProps) => {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (data && signature && !data.startsWith('mock')) {
      formRef.current?.submit();
    }
  }, [data, signature]);

  return (
    <form
      ref={formRef}
      method="POST"
      action="https://www.liqpay.ua/api/3/checkout"
      acceptCharset="utf-8"
      className="hidden"
    >
      <input
        type="hidden"
        name="data"
        value={data}
      />
      <input
        type="hidden"
        name="signature"
        value={signature}
      />
    </form>
  );
};
