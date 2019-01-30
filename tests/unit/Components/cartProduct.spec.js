import Vuex from 'vuex'
import {
  mount,
  createLocalVue
}
from '@vue/test-utils'
import {
  getters
} from '@/store';
import {
  fakeState, fakeProduct
}
from '../mocks';
import CartProduct from '@/components/CartProduct.vue'
import { wrap } from 'module';



const localVue = createLocalVue()
localVue.use(Vuex)

describe('CartProduct.vue', () => {
  let store
  beforeEach(() => {
    store = new Vuex.Store({
      state: fakeState,
      getters
    })
  })

  it('renders CartProduct correctly', () => {
    const wrapper = mount(CartProduct, {
      propsData: {
        cartElement: fakeState.cartContent[0]
      },
      store,
      localVue
    })

    expect(wrapper.find('.name')
      .text()).toEqual('name')
    expect(wrapper.find('.description')
      .text()).toEqual('description')
    expect(wrapper.find('.qty')
      .text()).toEqual(wrapper.props.cartElement.qty)
      
    expect(wrapper.vm.product.img).toBe('img');
  })
})