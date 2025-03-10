import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconList } from './IconList';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconList />,
    },
  ],
};

export default docs;
