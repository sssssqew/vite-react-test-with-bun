import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import App from './App'
import { describe, expect, test } from 'bun:test' // replaced jest or vitest to bun
    
describe('App', () => {
  test('counter increments when button is clicked', async () => {
    render(<App />)
    const button = screen.getByText('count is 0');
    fireEvent.click(button);
    // Use waitFor to wait for the DOM to update
    await waitFor(() => {
      // Expect the counter to be 1
      expect(screen.getByText('count is 1')).toBeTruthy()
   });
  });
});
