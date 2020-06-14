import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Heading from '@/components/Heading/Heading';

// unused prop variable needed for reach router typing
// eslint-disable-next-line
const NotFound: React.FC<RouteComponentProps> = (_: RouteComponentProps) => {
  return <Heading message="Not Found" />;
};

export default NotFound;
