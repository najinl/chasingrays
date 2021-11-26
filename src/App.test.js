import { render, screen } from '@testing-library/react';
import App from './components/App/App';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/RAY/i);
  expect(linkElement).toBeInTheDocument();
});
