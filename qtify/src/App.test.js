import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the feedback button from the navbar', () => {
  render(<App />);
  expect(screen.getByRole('button', { name: /give feedback/i })).toBeInTheDocument();
});
