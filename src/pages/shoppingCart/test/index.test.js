import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';

describe('Shopping Cart', () => {
  test('should show shopping cart page', () => {
    const { getByText } = render(<ShoppingCart/>);

    expect(getByText('Shopping Cart')).toBeInTheDocument();
  });
});
