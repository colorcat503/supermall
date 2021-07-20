<template>
  <div class="bottom-bar">
    <div class="bar-item bar-left">
      <div>
        <i class="icon service"></i>
        <span class="text">客服</span>
      </div>
      <div>
        <i class="icon shop"></i>
        <span class="text">店铺</span>
      </div>
      <div>
        <i class="icon select"></i>
        <span class="text">收藏</span>
      </div>
    </div>
    <div class="bar-item bar-right">
      <div class="cart" @click="addToCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {};
    },
    methods: {
      addToCart() {
        this.$emit("addToCart");
      }
    }
  };
</script>

<style scoped>
  .bottom-bar {
    height: 49px;
    width: 100%;
    position: absolute;
    bottom: 0;
    z-index: 10;
    display: flex;
    font-size: 14px;
    justify-content: space-between;
    background-color: #ffffff;
    border-top: 1px solid #fcfcfc;
  }
  .bar-item {
    display: flex;
  }
  .bar-left {
    flex: 1;
    display: flex;
    justify-content: space-around;
    font-size: 13px;
  }
  .bar-left .icon {
    display: block;
    width: 22px;
    height: 22px;
    margin: 5px 0 3px 0;
    background-image: url("~assets/img/detail/detail_bottom.png");
    background-repeat: no-repeat;
    background-size: 100%;
  }
  .icon.service {
    background-position: 0 -53px;
  }
  .icon.shop {
    background-position: 0 -97px;
  }

  .cart,
  .buy {
    width: 80px;
    line-height: 49px;
    text-align: center;
  }
  .cart {
    background-color: #ffe817;
  }
  .buy {
    background-color: var(--color-tint);
  }
</style>
