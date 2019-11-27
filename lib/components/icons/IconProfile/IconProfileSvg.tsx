import React, { AllHTMLAttributes } from 'react';

export const IconProfileSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M12 14c2.8 0 5-2.2 5-5s-2.2-5-5-5-5 2.2-5 5 2.2 5 5 5zm0-8c1.7 0 3 1.3 3 3s-1.3 3-3 3-3-1.3-3-3 1.3-3 3-3zm3 9H9c-2.2 0-4 1.8-4 4 0 .6.4 1 1 1s1-.4 1-1c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2 0 .6.4 1 1 1s1-.4 1-1c0-2.2-1.8-4-4-4z" />
  </svg>
);
