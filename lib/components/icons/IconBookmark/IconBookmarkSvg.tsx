import React, { AllHTMLAttributes } from 'react';

export const IconBookmarkSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M19 5.1c.1-1.6-1.1-2.9-2.7-3.1H7.6C6.1 2.1 4.9 3.5 5 5v16c0 .4.2.7.5.9.3.2.7.2 1 0l5.4-3.6 5.4 3.6c.2.1.4.2.6.2.2 0 .3 0 .5-.1.3-.2.5-.5.5-.9l.1-16zm-2 14l-4.4-3c-.3-.2-.8-.2-1.1 0l-4.4 3L7 4.9c0-.4.3-.9.7-.9h8.5c.5 0 .8.5.8 1v14.1z" />
  </svg>
);
