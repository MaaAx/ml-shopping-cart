<template>
  <div class="col-3 mb-1">
    <div class="card">
      <img class="card-img-top" :src="product.img" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">
          {{product.name}}
        </h5>
        <p class="card-text">
          {{product.description}}
        </p>
        <button class="btn btn-primary" data-cy-addToCart @click="addToCart()">Ajouter au panier</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Product',
  props: {
    product: {
      type: Object,
      required: true
    }
  },
  methods: {
    ...mapMutations([
      'ADD_PRODUCT_IN_CART'
    ]),
    addToCart: function () {
      this.ADD_PRODUCT_IN_CART(this.product)
    },
  }
}
</script>
