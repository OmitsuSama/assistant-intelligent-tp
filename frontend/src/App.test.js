import { render, screen } from '@testing-library/react';
import App from './App';

test('affiche le titre Assistant Intelligent', () => {
  render(<App />);
  const titleElement = screen.getByText(/Assistant Intelligent/i);
  expect(titleElement).toBeInTheDocument();
});
