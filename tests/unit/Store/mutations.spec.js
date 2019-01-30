import {
  mutations
} from '@/store';
import { fakeProduct } from '../mocks';

const {
  ADD_PRODUCT_IN_CART,
  REMOVE_PRODUCT_FROM_CART
} = mutations

describe('ADD_PRODUCT_IN_CART', () => {
  it('Adds Product In Empty Cart', () => {
    const state = {
      cartContent: []
    }

    ADD_PRODUCT_IN_CART(state, fakeProduct(0))

    expect(state.cartContent.length).toBe(1)
    expect(state.cartContent[0].id).toBe(0)
    expect(state.cartContent[0].qty).toBe(1)
  })


  it('Adds Other Product In Not Empty Cart', () => {
    const state = {
      cartContent: []
    }

    ADD_PRODUCT_IN_CART(state, fakeProduct(0))
    ADD_PRODUCT_IN_CART(state, fakeProduct(1))

    expect(state.cartContent.length).toBe(2)
  })

  it('Adds Same Product In Not Empty Cart', () => {
    const state = {
      cartContent: []
    }
    ADD_PRODUCT_IN_CART(state, fakeProduct(0))
    ADD_PRODUCT_IN_CART(state, fakeProduct(0))
    expect(state.cartContent.length).toBe(1)
    expect(state.cartContent[0].id).toBe(0)
    expect(state.cartContent[0].qty).toBe(2)
  })

})


describe('REMOVE_PRODUCT_FROM_CART', () => {
  it('Remove Product from cart', () => {
    const state = {
      cartContent: []
    }
    ADD_PRODUCT_IN_CART(state, fakeProduct(0));
    ADD_PRODUCT_IN_CART(state, fakeProduct(1));
    REMOVE_PRODUCT_FROM_CART(state, 1);
    expect(state.cartContent.length).toBe(1)
    expect(state.cartContent[0].id).toBe(0)
    expect(state.cartContent[0].qty).toBe(1)
  })
})