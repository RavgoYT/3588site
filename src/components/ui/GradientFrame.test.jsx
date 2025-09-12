import { render, screen } from '@testing-library/react';
import GradientFrame from './GradientFrame';

describe('GradientFrame', () => {
  it('renders its children', () => {
    render(
      <GradientFrame>
        <div>Test Child</div>
      </GradientFrame>
    );
    const childElement = screen.getByText(/Test Child/i);
    expect(childElement).toBeInTheDocument();
  });
});
