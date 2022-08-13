import axios from 'axios';
import apiHelper from '../apiHelper';
jest.mock('axios');

describe('apiHelper', () => {
  test('should return empty list', async () => {
    const productList = [];
    axios.get.mockResolvedValue(productList);

    const response = await apiHelper.getProducts();
    expect(response).toBe(productList);

  });
})

;
