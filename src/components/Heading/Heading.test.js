import React from 'react';
import { render, cleanup, fireEvent } from 'react-testing-library';
import Heading from './Heading';

/* Followed the guide at https://link.medium.com/fhDZqcKLNT */

afterEach(cleanup);

describe('Heading', () => {
  it('should contain a message', () => {
    const { getByText } = render(<Heading message="Hello!" />);
    getByText('Hello!');
  });

  it('should click on text', () => {
    const { getByText } = render(<Heading message="World!" />);
    const textEl = getByText('World!');
    fireEvent.click(textEl);
  });
});
