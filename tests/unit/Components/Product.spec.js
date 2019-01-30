import {
  shallowMount
} from '@vue/test-utils'
import Product from '@/components/Product.vue'

describe('Product.vue', () => {
  it('renders Product with props data correctly', () => {
    let product = new Object();
    product.id = 0;
    product.name = 'name';
    product.desc = 'desc';
    product.img = 'img';

    const wrapper = shallowMount(Product, {
      propsData: {
        product: product
      }
    });


    expect(wrapper.props().product).not.toBe(undefined);
    expect(wrapper.props().product.id).toBe(0);
    expect(wrapper.props().product.name).toBe('name');
    expect(wrapper.props().product.desc).toBe('desc');
    expect(wrapper.props().product.img).toBe('img');
  })
})
