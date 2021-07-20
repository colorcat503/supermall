<template>
  <div id="cart">
    <nav-bar class="navbar">
      <div slot="center">购物车({{ cartLength }})</div>
    </nav-bar>
    <better-scroll ref="scroll" class="cart-content" :probe-type="3">
      <cart-list></cart-list>
    </better-scroll>
    <bottom-bar class="cart-bar"></bottom-bar>
  </div>
</template>

<script>
  import NavBar from "components/common/navbar/NavBar";
  import BetterScroll from "components/common/scroll/Scroll";
  import CartList from "./childComps/CartList";
  import BottomBar from "./childComps/CartBottomBar";

  //引入 mapGetters ，来映射getter里的关系
  import { mapGetters } from "vuex";
  export default {
    name: "Cart",
    components: {
      NavBar,
      CartList,
      BetterScroll,
      BottomBar
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
    bottom: 89px;
    overflow: hidden;
  }
  .cart-bar {
    position: absolute;
    bottom: 49px;
    width: 100%;
  }
</style>
