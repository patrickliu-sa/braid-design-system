import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconVideo } from './IconVideo';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconVideo />,
    },
  ],
};

export default docs;
