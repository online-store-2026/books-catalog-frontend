/**
 * Design system typography (font: Manrope).
 *
 * Desktop/Tablet values are applied by default.
 * Mobile overrides kick in below 640 px (`max-sm:` prefix).
 *
 * Usage:
 *   import { TYPOGRAPHY } from '@/constants/typography';
 *   <h1 className={TYPOGRAPHY.h1}>…</h1>
 */
export const TYPOGRAPHY = {
  /** H1 — Desktop: Bold 48/56 -0.02em · Mobile: Bold 32/41 -0.01em */
  h1: 'font-bold text-[48px] leading-[56px] tracking-[-0.02em] max-sm:text-[32px] max-sm:leading-[41px] max-sm:tracking-[-0.01em]',

  /** H2 — Desktop: Bold 32/41 -0.01em · Mobile: Bold 22/31 */
  h2: 'font-bold text-[32px] leading-[41px] tracking-[-0.01em] max-sm:text-[22px] max-sm:leading-[31px] max-sm:tracking-normal',

  /** H3 — Desktop: Bold 22/31 · Mobile: SemiBold 20/26 */
  h3: 'font-bold text-[22px] leading-[31px] max-sm:font-semibold max-sm:text-[20px] max-sm:leading-[26px]',

  /** H4 — Desktop: SemiBold 20/26 · Mobile: SemiBold 16/20 */
  h4: 'font-semibold text-[20px] leading-[26px] max-sm:text-base max-sm:leading-5',

  /** H5 — SemiBold 16/24 (same on all breakpoints) */
  h5: 'font-semibold text-base leading-6',

  /** UPPERCASE — Bold 12/11 0.01em */
  uppercase: 'text-xs font-bold leading-[11px] tracking-[0.01em] uppercase',

  /** Buttons — SemiBold 14/21 */
  buttons: 'font-semibold text-sm leading-[21px]',

  /** Body text — Regular 14/21 */
  body: 'font-normal text-sm leading-[21px]',

  /** Small text — SemiBold 12/15 */
  small: 'text-xs font-semibold leading-[15px]',
} as const;
