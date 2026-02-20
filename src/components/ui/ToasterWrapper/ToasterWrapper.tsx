import { Toaster } from 'sonner';

export default function ToasterWrapper() {
  return (
    <Toaster
      closeButton
      toastOptions={{
        classNames: {
          closeButton:
            '!left-auto !-right-1 !top-0 !translate-x-0 !translate-y-0',
          success:
            '[&>[data-icon]>svg]:!text-green-500 [&>[data-icon]>svg]:!fill-green-500 [&>[data-title]]:!text-green-500 !text-green-500',
          error:
            '[&>[data-icon]>svg]:!text-red-500 [&>[data-icon]>svg]:!fill-red-500 [&>[data-title]]:!text-red-500 !text-red-500',
          info: '[&>[data-icon]>svg]:!text-blue-500 [&>[data-icon]>svg]:!fill-blue-500 [&>[data-title]]:!text-blue-500 !text-blue-500',
        },
      }}
    />
  );
}
