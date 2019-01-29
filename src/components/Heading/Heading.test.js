import React from 'react';
import { render } from 'react-testing-library';
import Heading from './Heading';

describe('Heading', () => {
  it('should contain a message', () => {
    const { getByText, rerender } = render(<Heading message="Hello" />);
    const text = getByText('Hello');
    expect(text).toHaveTextContent('Hello');

    rerender(<Heading message="World!" />);
    getByText('World!');
  });
});
