<template>
  <div class="row mb-1 cartproduct">
    <div class="col-1 align-self-center text-center">
      <span class="badge badge-light qty" data-cy-cartProductQty>
        x{{cartElement.qty}}
      </span>
    </div>
    <div class="col-8 media">
      <img class="mr-3 mh-100px" :src="product.img">
      <div class="media-body">
        <h5 class="mt-0 name">{{ product.name }}</h5>
        <span class="description">{{ product.description }}</span>
      </div>
    </div>
    <div class="col-3  align-self-center text-right">
      <button class="btn btn-danger" @click="remove()" data-cy-removeCartProduct>Supprimer</button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'CartProduct',
  props: {
    cartElement: {
      type: Object,
      required: true
    }
  },
  computed: {
    ...mapGetters([
      'getProductById'
    ])
  },
  data() {
    return {
      product: new Object()
    }
  },
  methods: {
    ...mapMutations([
      'REMOVE_PRODUCT_FROM_CART'
    ]),
    remove: function () {
      this.REMOVE_PRODUCT_FROM_CART(this.product.id)
    }
  },
  created() {
    this.product = this.getProductById(this.cartElement.id);
  }
}
</script>

<style scoped>
.mh-100px {
  max-height: 100px;
}

.cartproduct {
  border: 1px solid #eee;
  border-radius: 3px;
}

.media {
  padding: 0;
}

.media-body {
  padding: 10px;
}

.badge {
  padding: 1rem;
  font-size: 0.75rem;
}

</style>
