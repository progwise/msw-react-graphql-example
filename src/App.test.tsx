import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { App } from './App';
import { server } from './mocks/server';
import { networkErrorHandlers } from './mocks/networkErrorHandlers';

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

it('should render the result list', async () => {
  render(<App />);

  await waitFor(() => expect(screen.getAllByRole('listitem')).toHaveLength(2));
  screen.getByText('Star Wars (8.2)');
  screen.getByText('Star Wars: The Rise of Skywalker (6.5)');
});

it('should display an error message on network error', async () => {
  server.use(...networkErrorHandlers);

  render(<App />);
  await screen.findByText('Network Error');
});
