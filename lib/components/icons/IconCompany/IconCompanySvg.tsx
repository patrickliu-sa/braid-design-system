import React, { AllHTMLAttributes } from 'react';

export const IconCompanySvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M9 6h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2zm-4 4h2v2H9zm4 0h2v2h-2z" />
    <path d="M17 2.2V2c0-.6-.4-1-1-1H8c-.6 0-1 .4-1 1v.2C5.9 2.6 5 3.7 5 5v16c0 .6.4 1 1 1h12c.6 0 1-.4 1-1V5c0-1.3-.9-2.4-2-2.8zM17 20h-3v-2h-4v2H7V5c0-.6.4-1 1-1h8c.6 0 1 .4 1 1v15z" />
  </svg>
);
