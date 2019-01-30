import {
  shallowMount
} from '@vue/test-utils'
import {
  fakeProduct
}
from '../mocks';
import Product from '@/components/Product.vue'

describe('Product.vue', () => {
  it('renders Product with props data correctly', () => {
    let product = fakeProduct(0)

    const wrapper = shallowMount(Product, {
      propsData: {
        product: product
      }
    });

    expect(wrapper.props().product).not.toBe(undefined);
    
    expect(wrapper.props().product.id).toBe(0);

    expect(wrapper.find('.card-title')
      .text().trim()).toEqual('name')
    expect(wrapper.props().product.name).toBe('name');

    expect(wrapper.find('.card-text')
      .text().trim()).toEqual('description')
    expect(wrapper.props().product.description).toBe('description');

    expect(wrapper.props().product.img).toBe('img');
  })
});
