import React, { AllHTMLAttributes } from 'react';

export const IconVideoSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M18.4 11.1l-12-6c-.3-.1-.6-.1-.9 0-.3.2-.5.6-.5.9v12c0 .3.2.7.5.9.1.1.3.1.5.1s.3 0 .4-.1l12-6c.3-.2.6-.5.6-.9s-.2-.7-.6-.9zM7 16.4V7.6l8.8 4.4L7 16.4z" />
  </svg>
);
