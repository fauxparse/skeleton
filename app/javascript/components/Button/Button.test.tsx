import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from '.';

test('renders button', () => {
  render(<Button />);
  const button = screen.getByRole('button');
  expect(button).toBeInTheDocument();
});
