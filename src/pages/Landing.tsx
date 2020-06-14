import * as React from 'react';
import { RouteComponentProps } from '@reach/router';
import Heading from '@/components/Heading/Heading';

// unused prop variable needed for reach router typing
// eslint-disable-next-line
const Landing: React.FunctionComponent<Props> = (_: RouteComponentProps) => {
  return <Heading message="Hello World" />;
};

export default Landing;
