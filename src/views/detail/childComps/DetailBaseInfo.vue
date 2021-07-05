<template>
  <div v-if="Object.keys(goods).length !==0" class="base-info">
    <div class="title">{{ goods.title }}</div>
    <div class="price-info">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="info-other">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="info-service">
      <span class="info-service-item" v-for="index in goods.services.length-1">
        <img :src="goods.services[index - 1].icon " />
        <span>{{ index }}{{ goods.services[index - 1].name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "BaseInfo",
    props: {
      goods: {
        type: Object,
        default: {}
      }
    },
    data() {
      return {};
    },
    mounted() {
      console.log(111, this.goods);
    }
  };
</script>

<style scoped>
  .base-info {
    padding: 0 5px;
    border-bottom: 5px solid #fcfcfc;
  }
  .title {
    margin-top: 10px;
    font-size: 13px;
  }
  .price-info {
    padding: 10px 0;
    position: relative;
  }
  .price-info .n-price {
    font-size: 16px;
    color: var(--color-high-text);
  }
  .o-price {
    font-size: 12px;
    color: #cccccc;
    margin-left: 5px;
    text-decoration: line-through;
  }
  .discount {
    position: relative;
    top: -5px;
    margin-left: 5px;
    display: inline-block;
    padding: 1px 3px;
    font-size: 12px;
    color: #ffffff;
    background-color: var(--color-high-text);
    border-radius: 6px;
  }
  .info-other {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    color: #bbbbbb;
    border-bottom: 1px solid #eeeeee;
    padding: 5px 0px;
  }
  .info-service {
    display: flex;
    justify-content: space-between;
    font-size: 12px;
    padding: 14px 0;
    color: #888888;
  }
  .info-service-item img {
    width: 12px;
    height: 12px;
    vertical-align: middle;
    margin-right: 2px;
  }
</style>
