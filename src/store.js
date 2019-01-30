import Vue from 'vue'
import Vuex from 'vuex'
import CONFIG from '@/config/app.config';


Vue.use(Vuex)


export const mutations = {
  ADD_PRODUCT_IN_CART: (state, product) => {
    const cartProduct = state.cartContent.find(p => p.id == product.id)

    if (!cartProduct) {
      state.cartContent.push({
        id: product.id,
        qty: 1
      });
    } else {
      cartProduct.qty++;
    }
    localStorage.setItem(CONFIG.LOCAL_STORAGE_NAME, JSON.stringify(state.cartContent));
  },
  REMOVE_PRODUCT_FROM_CART: (state, productId) => {
    const cartProductIndex = state.cartContent.findIndex(p => p.id == productId)
    state.cartContent.splice(cartProductIndex, 1);
    localStorage.setItem(CONFIG.LOCAL_STORAGE_NAME, JSON.stringify(state.cartContent));
  },
  SET_CART_PRODUCTS: (state, cartContent) => {
    state.cartContent = cartContent;
  },
  SET_APP_PRODUCTS: (state, products) => {
    state.products = products;
  }
}


export const getters = {
  countItemsInCart: state => {
    let count = 0;
    state.cartContent.forEach(el => {
      count += el.qty;
    });
    return count;
  },
  getProductById: (state) => (id) => {
    return state.products.find(product => product.id === id)
  }
}


export const state = {
  products: [],
  cartContent: []
};

export default new Vuex.Store({
  state: state,
  getters: getters,
  mutations: mutations
})
