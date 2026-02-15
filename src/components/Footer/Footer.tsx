import { cn } from '@/lib/utils';
import { FooterBackToTop } from './FooterBackToTop';
import { FooterLinks } from './FooterLinks';
import { FooterLogo } from './FooterLogo';

export const Footer = () => {
  return (
    <footer className="border-t border-border font-manrope">
      <div className="max-[639px]:hidden w-full">
        <div className="footer-container">
          <FooterLogo />

          <div className="footer-spacer-left" />

          <FooterLinks className="flex items-center footer-nav-gap" />

          <div className="footer-spacer-right" />

          <FooterBackToTop />
        </div>
      </div>

      <div
        className={cn('hidden max-[639px]:flex', 'flex-col px-4 py-8 gap-8')}
      >
        <FooterLogo className="self-start" />

        <FooterLinks className="flex flex-col items-start gap-4" />

        <FooterBackToTop className="self-center" />
      </div>
    </footer>
  );
};
