/**
 * Design system palette.
 *
 * These hex values are already wired into shadcn CSS variables (see index.css :root).
 * In components prefer Tailwind utility classes listed below.
 * Use the hex constants only when you need a raw value
 * (inline style, SVG fill, canvas, chart config, etc.).
 *
 * ┌──────────────┬───────────┬────────────────────────────────────────────┐
 * │ Token        │ Hex       │ Tailwind (shadcn)                         │
 * ├──────────────┼───────────┼────────────────────────────────────────────┤
 * │ primary      │ #313237   │ text-foreground, bg-foreground             │
 * │ secondary    │ #89939A   │ text-muted-foreground                     │
 * │ icons        │ #B4BDC3   │ text-ring, stroke-ring                    │
 * │ elements     │ #E2E6E9   │ border-border, border-input               │
 * │ hoverAndBg   │ #FAFBFC   │ bg-secondary, bg-muted, bg-accent        │
 * │ white        │ #FFFFFF   │ bg-background, bg-card, bg-popover        │
 * │ green        │ #27AE60   │ bg-primary, text-primary                  │
 * │ red          │ #EB5757   │ bg-destructive, text-destructive          │
 * └──────────────┴───────────┴────────────────────────────────────────────┘
 */
export const COLORS = {
  primary: '#313237',
  secondary: '#89939A',
  icons: '#B4BDC3',
  elements: '#E2E6E9',
  hoverAndBg: '#FAFBFC',
  white: '#FFFFFF',
  green: '#27AE60',
  red: '#EB5757',
} as const;
