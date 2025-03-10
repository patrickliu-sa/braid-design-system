import React, { AllHTMLAttributes } from 'react';

export const IconCreditCardSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M20 4H4C2.3 4 1 5.3 1 7v10c0 1.7 1.3 3 3 3h16c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3zM3 7c0-.6.4-1 1-1h16c.6 0 1 .4 1 1v1H3V7zm18 10c0 .6-.4 1-1 1H4c-.6 0-1-.4-1-1v-7h18v7z" />
    <path d="M6 16h4c.6 0 1-.4 1-1s-.4-1-1-1H6c-.6 0-1 .4-1 1s.4 1 1 1z" />
  </svg>
);
