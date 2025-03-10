import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconLocation } from './IconLocation';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconLocation />,
    },
  ],
};

export default docs;
