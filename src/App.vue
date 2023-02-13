<script setup>
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <header>
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'

export default {
  setup () {
    const store = useStore()
    const products = computed(() => store.state.products.all)
    console.log(store, "products");

    store.dispatch('addProductToCart', "product2022")



    // const products = computed(() => store.state.products.all)

    // const addProductToCart = (product) => store.dispatch('cart/addProductToCart', product)

    // store.dispatch('products/getAllProducts')

    return {
      // products,
      // addProductToCart,
      // currency
    }
  },
  computed(){
    const store = useStore()
    console.log(store, "store");
  }
}
</script>
