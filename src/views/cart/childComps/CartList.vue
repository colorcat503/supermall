<template>
  <div class="cart-list">
    <ul>
      <li v-for="(item,index) in cartList">
        <cart-item :cart-item="item" :index="index"></cart-item>
      </li>
    </ul>
  </div>
</template>

<script>
  import CartItem from "./CartItem";

  import { mapGetters } from "vuex";
  export default {
    name: "CartList",
    components: {
      CartItem
    },
    data() {
      return {};
    },
    computed: {
      ...mapGetters(["cartLength", "cartList"])
    }
  };
</script>

<style scoped>
  .cart-list {
    width: 100%;
  }
</style>
