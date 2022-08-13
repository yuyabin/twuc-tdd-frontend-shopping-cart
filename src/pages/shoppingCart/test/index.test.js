import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import ShoppingCart from '../index';

describe('Shopping Cart', () => {
  test('should show shopping cart page', () => {
    const { getByText } = render(<ShoppingCart/>);

    expect(getByText('Shopping Cart')).toBeInTheDocument();
  });

  test('should render shopping car title', () => {
    const { container } = render(<ShoppingCart/>);
    const thElements = container.getElementsByTagName('th');

    // then
    expect(thElements.length).toBe(3);
    ['商品名称', '单 价', '数 量'].forEach((text, index) => {
      expect(thElements.item(index)).toHaveTextContent(text);
    });
  });
});
