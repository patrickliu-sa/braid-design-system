import React, { AllHTMLAttributes } from 'react';

export const IconPeopleSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M9 15c2.2 0 4-1.8 4-4s-1.8-4-4-4-4 1.8-4 4 1.8 4 4 4zm0-6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm3 7H6c-1.7 0-3 1.3-3 3 0 .6.4 1 1 1s1-.4 1-1 .4-1 1-1h6c.6 0 1 .4 1 1s.4 1 1 1 1-.4 1-1c0-1.7-1.3-3-3-3zm3-11c1.1 0 2 .9 2 2s-.9 2-2 2h-.4c.2.7.4 1.3.4 2 2.2 0 4-1.8 4-4s-1.8-4-4-4c-1.6 0-3.1 1-3.7 2.5.6.3 1.2.6 1.7 1.1.2-.9 1.1-1.6 2-1.6zm3 7h-3.1c-.1.7-.4 1.4-.7 2H18c.6 0 1 .4 1 1s.4 1 1 1 1-.4 1-1c0-1.7-1.3-3-3-3z" />
  </svg>
);
