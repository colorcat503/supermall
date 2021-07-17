<template>
  <div id="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <better-scroll ref="scroll" class="cart-content" :probe-type="3">
      <cart-list></cart-list>
    </better-scroll>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import BetterScroll from "components/common/scroll/Scroll";
  import CartList from "./childComps/CartList";

  import { mapGetters } from "vuex";
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      BetterScroll
    },
    computed: {
      // 语法1
      ...mapGetters(["cartLength", "cartList"])
      //语法2 自定义变量名
      // ...mapGetters({
      //   cartLen: "cartLength"
      // })
    },
    data() {
      return {};
    },
    activated() {
      console.log(111);
      this.$refs.scroll.refresh();
    }
  };
</script>

<style scoped>
  #cart {
    height: 100vh;
    position: relative;
  }
  .navbar {
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .cart-content {
    width: 100%;
    position: absolute;
    top: 44px;
    bottom: 49px;
    overflow: hidden;
  }
</style>
