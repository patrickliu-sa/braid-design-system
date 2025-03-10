import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconEdit } from './IconEdit';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconEdit />,
    },
  ],
};

export default docs;
