import Vuex from 'vuex'
import {
  mount,
  createLocalVue
} from '@vue/test-utils'
import {
  fakeState
}
from '../mocks';
import {
  getters
} from '@/store';
import Cart from '@/views/Cart.vue'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('Cart.vue', () => {

  it('Renders Cart View With Products > 0 Properly', () => {
    let store = new Vuex.Store({
      state: fakeState,
      getters
    })

    const wrapper = mount(Cart, {
      store,
      localVue
    });

    expect(wrapper.find('.no-products').exists()).toBe(false)
    expect(wrapper.find('.cartproduct').exists()).toBe(true)
  })


  it('Renders Cart View With Products == 0 Properly', () => {
    let store = new Vuex.Store({
      state: {
        cartContent: []
      },
      getters
    })

    const wrapper = mount(Cart, {
      store,
      localVue
    });

    expect(wrapper.find('.no-products').exists()).toBe(true)
    expect(wrapper.find('.cartproduct').exists()).toBe(false)
  })
})