<template>
  <div class="goods">
    <goods-item v-for="item in goods" :goodsItem="item"></goods-item>
  </div>
</template>

<script>
  import GoodsItem from "components/content/goods/GoodsListItem";
  export default {
    name: "Goods",
    props: {
      goods: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {};
    },
    components: {
      "goods-item": GoodsItem
    }
  };
</script>

<style scoped>
  .goods {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;

    padding: 2px;
  }
</style>
