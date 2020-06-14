import * as React from 'react';
import { render } from '@testing-library/react';
import App from './App.tsx';

describe('App', () => {
  it('should render without crashing', () => {
    expect(render(<App />)).toBeDefined();
  });
});
