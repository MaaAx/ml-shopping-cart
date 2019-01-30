import Vuex from 'vuex'
import {
  shallowMount,
  createLocalVue
} from '@vue/test-utils'
import {
  fakeState
}
from '../mocks';
import {
  getters
} from '@/store';
import Products from '@/views/Products.vue'


const localVue = createLocalVue()
localVue.use(Vuex)


describe('Products.vue', () => {

  it('Renders Cart View With Products > 0 Properly', () => {

    let store = new Vuex.Store({
      state: fakeState,
      getters
    })

    const wrapper = shallowMount(Products, {
      store,
      localVue
    });

    expect(wrapper.find('.row').exists()).toBe(true)
  })
})