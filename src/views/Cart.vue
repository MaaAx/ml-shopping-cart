<template>
  <div class="container">
    <transition-group tag="div" name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <CartProduct v-for="cartElement in cartContent" :key="cartElement.id" :cartElement="cartElement" />
    </transition-group>
  </div>
</template>


<script>
import { mapState } from 'vuex';
import CartProduct from '@/components/CartProduct.vue';

export default {
  name: 'cart',
  components: {
    CartProduct
  },
  computed: {
    ...mapState([
      'cartContent'
    ])
  },
}
</script>