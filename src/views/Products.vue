<template>
  <div class="container">
    <transition-group tag="div" class="row" name="list" enter-active-class="animated bounceInUp" leave-active-class="animated bounceOutDown">
      <Product v-for="product in products" :key="product.id" :product="product" />
    </transition-group>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Product from '@/components/Product.vue';

export default {
  name: 'products',
  components: {
    Product,
  },
  computed: {
    ...mapState([
      'products'
    ])
  }
}
</script>



