<template>
  <div class="cart-item">
    <div class="item-selector">
      <div
        class="selector"
        :class="{'check':cartItem.isChecked}"
        @click="itemClick"
      >
        <img src="~assets/img/cart/tick.svg" alt="" />
      </div>
    </div>
    <div class="item-img">
      <img :src="cartItem.image" alt="" />
    </div>
    <div class="item-info">
      <div class="item-title">{{ cartItem.title }}</div>
      <div class="item-desc">{{ cartItem.desc }}</div>
      <div class="info-bottom">
        <div class="item-price">{{ cartItem.price }}</div>
        <div class="item-count">x{{ cartItem.count }}</div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "CartItem",
    props: {
      cartItem: {
        type: Object,
        default() {
          return {};
        }
      }
      // index: {
      //   type: Number,
      //   default: 0
      // }
    },

    data() {
      return {
        // isChecked: false
      };
    },

    methods: {
      itemClick() {
        this.cartItem.isChecked = !this.cartItem.isChecked;
        // this.$store.state.cartList[this.index].activeed = this.isChecked;
      }
    }
  };
</script>

<style scoped>
  .cart-item {
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 10px 0;
  }
  .item-selector {
    width: 30px;
  }
  .item-img img {
    width: 50px;
    border-radius: 5px;
  }
  .item-info {
    padding: 0 10px;
    flex: 1;
    overflow: hidden;
  }
  .item-title {
    color: #333333;
    font-size: 14px;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .item-desc {
    font-size: 12px;
    color: #888888;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .info-bottom {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    align-items: flex-end;
  }
  .item-price {
    color: var(--color-tint);
  }
  .item-selector {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .selector {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid var(--color-tint);
  }
  .selector.check {
    background-color: var(--color-tint);
  }
  .selector img {
    width: 100%;
  }
</style>
