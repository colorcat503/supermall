<template>
  <div class="bottom-bar">
    <div class="all-checked">
      <div class="bottom-selector">
        <div class="selector" :class="{'check':allChecked}" @click="itemClick">
          <img src="~assets/img/cart/tick.svg" alt="" />
        </div>
      </div>
      <div>
        <span class="total-text">合计</span><span>{{ totalPrice }}</span>
      </div>
    </div>
    <div class="to-pay">去计算{{ checkLength }}</div>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";
  export default {
    name: "BottomBar",
    data() {
      return {
        allChecked: false
        // totalPrice: 0
      };
    },
    computeds: {
      ...mapGetters(["cartList"]),
      totalPrice() {
        return this.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((proValue, item) => {
            return proValue + item.price * item.count;
          }, 0)
          .toFixed(2);
      },
      checkLength() {
        return this.cartList.filter(item => {
          return item.checked;
        }).length;
      }
    },
    methods: {
      itemClick() {}
    }
  };
</script>

<style scoped>
  .bottom-bar {
    height: 40px;
    line-height: 40px;
    background-color: #eeeeee;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
  }
  .all-checked {
    display: flex;
    flex: 1;
  }
  .bottom-selector {
    width: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .selector {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    border: 1px solid var(--color-tint);
    background-color: #fff;
  }
  .selector.check {
    background-color: var(--color-tint);
  }
  .selector img {
    width: 12px;
    height: 12px;
    margin-bottom: 13px;
  }
  .total-text {
    margin-right: 10px;
  }
  .to-pay {
    padding: 0 10px;
    background-color: var(--color-tint);
    color: #ffffff;
  }
</style>
