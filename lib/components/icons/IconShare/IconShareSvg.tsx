import React, { AllHTMLAttributes } from 'react';

export const IconShareSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M20.7 11.3L14.4 5c-.4-.4-.9-.6-1.4-.6-1.1 0-2 .9-2 2v1.7C4.7 9.5 3 15.7 3 19c0 .5.3.9.8 1H4c.4 0 .7-.2.9-.5 1.2-2.2 3.6-3.6 6.1-3.6v1.7c0 .5.2 1 .6 1.4.8.8 2 .8 2.8 0l6.3-6.3c.4-.4.4-1 0-1.4zM13 17.6V15c0-.5-.4-.9-.9-1-.4-.1-.8-.1-1.2-.1-1.9 0-3.8.6-5.4 1.8.7-2.4 2.5-5.2 6.6-5.7.5-.1.9-.5.9-1V6.4l5.6 5.6-5.6 5.6z" />
  </svg>
);
