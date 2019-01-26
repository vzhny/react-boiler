import React from 'react';
import { render, cleanup } from 'react-testing-library';
import Heading from './Heading';

/* Followed the guide at https://link.medium.com/fhDZqcKLNT */

afterEach(cleanup);

describe('Heading', () => {
  it('should contain a message', () => {
    const { getByText, rerender } = render(<Heading message="Hello" />);
    getByText('Hello');
    rerender(<Heading message="World!" />);
    getByText('World!');
  });
});
