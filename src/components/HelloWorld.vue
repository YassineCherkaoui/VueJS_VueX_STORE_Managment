

<template>
  <div class="greetings">
    <h1 class="green">sdsdf</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>



<script>
import { computed } from 'vue'
import { useStore } from 'vuex'


export default {
  setup () {
    const store = useStore()
    var user= {id:"2", name:"yassine2"}

    store.dispatch('users/addUsers', user)



    console.log(store.state.users, "store");




    const users = store.getters['users/users']
    // console.log(this.me, " getters");

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
    // const store = useStore()
    // console.log(store, "store");
    // console.log(this.me)
  },
  mounted() {
    const store = useStore()
    store.dispatch('users/addUsers', {id:"3", name:"yassine3"})
    console.log(this.me) // 'bar'
    console.log(store.state.users, "store");
  }
}
</script>



