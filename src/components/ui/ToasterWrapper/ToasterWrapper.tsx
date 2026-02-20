import { Toaster } from 'sonner';

export default function ToasterWrapper() {
  return (
    <Toaster
      closeButton
      toastOptions={{
        classNames: {
          toast:
            '!rounded-xl !shadow-md !border !border-gray-200 dark:!border-gray-700 dark:!bg-[#1e2130]',
          title: '!font-semibold !text-sm',
          description: '!text-xs !text-gray-500 dark:!text-gray-400',
          closeButton:
            '!left-auto !-right-1 !top-0 !translate-x-0 !translate-y-0',
          success:
            '![--toast-icon-color:#4caf50] [&_[data-title]]:!text-green-500',
          error: '![--toast-icon-color:#f44336] [&_[data-title]]:!text-red-500',
          info: '![--toast-icon-color:#2196f3] [&_[data-title]]:!text-blue-500',
        },
      }}
    />
  );
}
