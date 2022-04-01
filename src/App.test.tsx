import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './app/App';

describe('Link click', () => {
  it('link clicked', () => {
    render(<App />);
    screen.debug();
  });
});
