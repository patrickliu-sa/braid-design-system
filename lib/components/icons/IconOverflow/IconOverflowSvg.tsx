import React, { AllHTMLAttributes } from 'react';

export const IconOverflowSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <circle cx={12} cy={4} r={2} />
    <circle cx={12} cy={20} r={2} />
    <circle cx={12} cy={12} r={2} />
  </svg>
);
