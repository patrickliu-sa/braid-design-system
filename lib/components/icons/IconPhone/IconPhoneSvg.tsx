import React, { AllHTMLAttributes } from 'react';

export const IconPhoneSvg = (props: AllHTMLAttributes<SVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    focusable="false"
    fill="currentColor"
    width={16}
    height={16}
    {...props}
  >
    <path d="M21.4 15.1l-5-2c-.4-.1-.8-.1-1.1.2l-1.4 1.4c-1.9-1.3-3.5-2.9-4.7-4.7l1.6-2.5c.2-.3.2-.7.1-1l-2-4c-.3-.3-.6-.5-1-.5H4c-.8 0-1.5.3-2.1.9C1.3 3.4 1 4.2 1 5v.3C2.1 14.6 9.4 21.9 18.7 23h.3c.7 0 1.4-.2 1.9-.7.6-.5 1-1.2 1.1-2v-4.2c0-.4-.2-.8-.6-1zM20 20v.1c0 .3-.2.5-.4.7-.2.2-.5.2-.7.2C10.5 20 4 13.5 3 5.1V5c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3h3.3l1.5 3-1.7 2.5c-.2.3-.2.7 0 1.1 1.6 2.6 3.8 4.8 6.4 6.4.4.2.9.2 1.2-.1l1.5-1.5 3.8 1.5V20z" />
  </svg>
);
