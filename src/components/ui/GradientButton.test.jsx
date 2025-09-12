import { render, screen } from '@testing-library/react';
import GradientButton from './GradientButton';

describe('GradientButton', () => {
  it('renders the button with the correct text', () => {
    render(<GradientButton href="#">Click me</GradientButton>);
    const buttonElement = screen.getByText(/Click me/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the button with the correct href', () => {
    render(<GradientButton href="https://example.com">Click me</GradientButton>);
    const buttonElement = screen.getByRole('link');
    expect(buttonElement).toHaveAttribute('href', 'https://example.com');
  });
});
