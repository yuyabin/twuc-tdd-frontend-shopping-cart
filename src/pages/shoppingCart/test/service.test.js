import apiHelper from '../apiHelper';
jest.mock('../apiHelper');

const getProductsList = async ()=> {
  try {
    const { data: { products = [] } = {}} = await apiHelper.getProducts();
    return products;
  } catch (e) {
    return [];
  }
};


describe('service api', () => {
  test('return response product', async () =>{

    apiHelper.getProducts.mockResolvedValueOnce({
      data:{
        'products': [
          {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
          {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099.00, 'count': 2}
        ]
      }
    });
    //when
    const list = await getProductsList();
    expect(list).toEqual([
      {'id': 1, 'name': '小米手环', 'price': 299.00, 'count': 1},
      {'id': 2, 'name': '任天堂 Nintendo Switch', 'price': 2099.00, 'count': 2}
    ]);
  }
  );

});
