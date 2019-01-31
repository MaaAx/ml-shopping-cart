import Vue from 'vue'
import Vuex from 'vuex'
import CONFIG from '@/config/app.config';


Vue.use(Vuex)


export const mutations = {
  /**
   * Adds a cartProduct Object in the state.cartContent Array. 
     Then it saves current cart in the Localstorage
   * @param  {Object} state - Store's state
   * @param  {Int} product - Product you want to add in cart's Id
   */
  ADD_PRODUCT_IN_CART: (state, productId) => {
    const cartProduct = state.cartContent.find(p => p.id == productId)
    if (!cartProduct) {
      state.cartContent.push({
        id: productId,
        qty: 1
      });
    } else {
      cartProduct.qty++;
    }
    localStorage.setItem(CONFIG.LOCAL_STORAGE_NAME, JSON.stringify(state.cartContent));
  },

  /**
   * Removes a cartProduct Object in the state.cartContent Array. 
     Then it saves current cart in the Localstorage
   * @param  {Object} state - Store's state
   * @param  {Int} productId - Product you want to remove from cart's Id
   */
  REMOVE_PRODUCT_FROM_CART: (state, productId) => {
    const cartProductIndex = state.cartContent.findIndex(p => p.id == productId)
    state.cartContent.splice(cartProductIndex, 1);
    localStorage.setItem(CONFIG.LOCAL_STORAGE_NAME, JSON.stringify(state.cartContent));
  },

  /**
   * Sets Store's state.cartContent with given set of data
   * @param  {Object} state - Store's state
   * @param  {Array} cartContent - cartContent you want to set as App's
   */
  SET_CART_PRODUCTS: (state, cartContent) => {
    state.cartContent = cartContent;
  },

  /**
   * Sets Store's state.products with given set of data
   * @param  {Object} state - Store's state
   * @param  {Array} products - products you want to set as App's
   */
  SET_APP_PRODUCTS: (state, products) => {
    state.products = products;
  }
}


export const getters = {
  /**
   * Get's number of product(s) in the cart
   * @param  {Object} state - Store's state
   * @returns {Int} - Number of products in the cart
   */
  countItemsInCart: state => {
    let count = 0;
    state.cartContent.forEach(el => {
      count += el.qty;
    });
    return count;
  },
  
  /**
   * Get's a product with given Id
   * @param  {Object} state - Store's state
   * @returns {Object|undefined} - Product found
   */
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
