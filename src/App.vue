<template>
  <div id="app">
    <nav class="navbar sticky-top navbar-expand navbar-light bg-light justify-content-end mb-4">
      <router-link class="navbar-brand" to="/">Home</router-link>
      <div class="collapse navbar-collapse justify-content-end">
        <ul class="navbar-nav">
          <router-link tag="li" to="/" class="nav-item" active-class="active" exact>
            <a class="nav-link">Products</a>
          </router-link>
          <router-link tag="li" to="/cart" class="nav-item" active-class="active" exact>
            <a class="nav-link"> 
              Cart 
              <span class="badge badge-pill badge-dark items-in-cart">
                {{ countItemsInCart }}
              </span>
            </a>
          </router-link>
        </ul>
      </div> 
    </nav>
    <transition name="fade">
      <Loader v-if="loading" msg="Loading"/> 
    </transition>

    <router-view/>
  </div>
</template>


<script>
import { mapGetters, mapMutations } from 'vuex';
import Loader from '@/components/Loader.vue';
import CONFIG from '@/config/app.config'
import axios from 'axios';

export default {
  components: {
    Loader
  },
  data() {
    return {
      loading: false,
    }
  },
  computed: {
    ...mapGetters([
        'countItemsInCart'
      ])
  },
  methods: {
    ...mapMutations(['SET_CART_PRODUCTS', 'SET_APP_PRODUCTS']),
    
    /**
     * Gets product(s) saved in cart and sets it in the store if it exists
     */
    getCartContent: function () {
      const savedCart = JSON.parse(localStorage.getItem(CONFIG.LOCAL_STORAGE_NAME));
      if (savedCart) {
        this.SET_CART_PRODUCTS(savedCart);
      }
    }
  },
  
  /**
   * When App is created, loads products from DB and sets it in the stores, then hide the loader
   */
  created() {
    this.loading = true;
    axios
      .get(CONFIG.DB_URL)
      .then(res => {
        this.loading = false;
        this.SET_APP_PRODUCTS(res.data.products);
        this.getCartContent();
      })
      .catch(error => {
        alert(error);
      });
  }
}
</script>


<style>

@import 'https://cdn.jsdelivr.net/npm/animate.css@3.5.1';

html, #app, .home {
  height: 100%;
}

body {
  margin: 0;
  height: 100%;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to  {
  opacity: 0;
}

</style>
