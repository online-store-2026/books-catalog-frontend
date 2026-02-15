import { cn } from '@/lib/utils';

type FooterLogoProps = {
  className?: string;
};

export const FooterLogo = ({ className }: FooterLogoProps) => {
  return (
    <img
      src="public/img/icons/Logo.svg"
      alt="Nice Boook logo"
      className={cn('w-22.25 h-8 shrink-0', className)}
    />
  );
};
