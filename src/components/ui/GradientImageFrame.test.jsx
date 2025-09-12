import { render, screen } from '@testing-library/react';
import GradientImageFrame from './GradientImageFrame';

describe('GradientImageFrame', () => {
  it('renders its children', () => {
    render(
      <GradientImageFrame>
        <div>Test Child</div>
      </GradientImageFrame>
    );
    const childElement = screen.getByText(/Test Child/i);
    expect(childElement).toBeInTheDocument();
  });
});
