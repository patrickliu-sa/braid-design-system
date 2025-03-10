import React from 'react';
import { ComponentDocs } from '../../../../site/src/types';
import { IconDate } from './IconDate';

const docs: ComponentDocs = {
  category: 'Icon',
  migrationGuide: true,
  foundation: true,
  storybook: false,
  examples: [
    {
      label: 'Default',
      Example: () => <IconDate />,
    },
  ],
};

export default docs;
