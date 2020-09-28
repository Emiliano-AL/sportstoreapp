<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col bg-dark text-white">
        <a class="navbar-brand">Sport Store</a>
        <cart-summary />
      </div>
    </div>
    <div class="row">
      <div class="col-3 bg-info p-2">
        <CategoryControls class="mb-5" />
        <button 
          class="btn btn-block btn-warning mt-5" 
          v-on:click="setShowSearch(true)">
          Search
        </button> 
      </div>
      <div class="col-9 bg-success p-2">
        <Search />
        <ProductList />
      </div>
    </div>
  </div>
</template>
<script>
import ProductList from './ProductList';
import CartSummary from './CartSummary';
import CategoryControls from './CategoryControls';
import Search from './Search';
import { mapMutations } from 'vuex';

export default {
  components: {
    ProductList,
    CategoryControls,
    CartSummary,
    Search
  },
  methods: {
    ...mapMutations(['setShowSearch'])
  }
}
</script>