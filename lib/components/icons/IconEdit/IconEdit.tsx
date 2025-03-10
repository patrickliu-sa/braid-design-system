import React from 'react';
import { Box } from '../../Box/Box';
import useIcon, { UseIconProps } from '../../../hooks/useIcon';
import { IconEditSvg } from './IconEditSvg';

export type IconEditProps = UseIconProps;

export const IconEdit = (props: IconEditProps) => {
  const iconProps = useIcon(props);

  return <Box component={IconEditSvg} {...iconProps} />;
};
