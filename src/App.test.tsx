import React from 'react';
import { render, screen } from '@testing-library/react';
import { App } from './App';

it('should display loading text', () => {
  render(<App />);
  screen.getByText('loading...');
});

it('should initial search for Star Wars', () => {
  render(<App />);
  const searchInput = screen.getByRole('textbox', {
    name: 'search',
  }) as HTMLInputElement;

  expect(searchInput.value).toBe('Star Wars');
});
