import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconPositive } from './IconPositive';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconPositive />,
    },
  ],
};

export default docs;
