import React from 'react';
import { render, screen } from '@testing-library/react';
import { LittleComponent } from './index';

describe('LittleComponent', () => {
  test('renders with id', () => {
    render(<LittleComponent id="test" />);
    const element = screen.getByRole('generic', { hidden: true });
    expect(element).toHaveAttribute('name', 'test');
  });

  test('stores customData in ref', () => {
    const ref = React.createRef();
    render(<LittleComponent ref={ref} id="test" customProp="value" />);
    expect(ref.current.customData).toEqual({ customProp: 'value' });
  });
});