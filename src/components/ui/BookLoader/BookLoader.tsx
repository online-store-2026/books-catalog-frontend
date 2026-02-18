import { TYPOGRAPHY } from '@/constants/typography';

export const BookLoader = () => {
  return (
    <div className="w-full px-4 pt-14 sm:pt-24">
      <div className="mx-auto w-full max-w-[1150px] flex items-center justify-center min-h-[400px]">
        <p className={`${TYPOGRAPHY.body} text-muted-foreground`}>Loading...</p>
      </div>
    </div>
  );
};
