import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
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

it('should renders the result list', async () => {
  render(<App />);

  await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(2));
  screen.getByText('Star Wars (8.2)');
  screen.getByText('Star Wars: The Rise of Skywalker (6.5)');
});
