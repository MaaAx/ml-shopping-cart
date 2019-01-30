<template>
  <div class="container">
    <transition-group v-if="countItemsInCart > 0" tag="div" name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <CartProduct v-for="cartElement in cartContent" :key="cartElement.id" :cartElement="cartElement" />
    </transition-group>

    <transition name="no-product" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <div class="alert alert-warning" v-if="countItemsInCart == 0" >
        <p class="mb-0">
          Votre panier est vide.
        </p>
      </div>
    </transition>
  </div>
</template>


<script>
import { mapState, mapGetters } from 'vuex';
import CartProduct from '@/components/CartProduct.vue';

export default {
  name: 'cart',
  components: {
    CartProduct
  },
  computed: {
    ...mapState([
      'cartContent'
    ]),
    ...mapGetters([
      'countItemsInCart'
      ])
  },
}
</script>