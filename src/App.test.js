import { render, screen } from '@testing-library/react';
import App from './components/App/App.js';
import { BrowserRouter } from 'react-router-dom';

test('renders learn react link', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const linkElement = screen.getByText(/RAY/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders activities', () => {
  render(<BrowserRouter><App /></BrowserRouter>);
  const climbActivity = screen.getByText(/Climbing/i);
  const hikeActivity = screen.getByText(/Hiking/i);
  const bikeActivity = screen.getByText(/Mountain Biking/i);
  expect(climbActivity).toBeInTheDocument();
  expect(hikeActivity).toBeInTheDocument();
  expect(bikeActivity).toBeInTheDocument();
});
