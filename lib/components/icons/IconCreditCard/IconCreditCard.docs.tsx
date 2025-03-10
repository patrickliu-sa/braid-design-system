import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconCreditCard } from './IconCreditCard';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconCreditCard />,
    },
  ],
};

export default docs;
