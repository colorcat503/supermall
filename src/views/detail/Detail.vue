<template>
  <div id="detail">
    <detail-bar>
      <div slot="center">详情页</div>
    </detail-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
    <base-info :goods="goods"></base-info>
    <shop-info :shop="shop"></shop-info>
  </div>
</template>

<script>
  import DetailBar from "./childComps/DetailBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import BaseInfo from "./childComps/DetailBaseInfo";
  import ShopInfo from "./childComps/DetailShopInfo";

  import { getDetail, Goods, Shop } from "network/detail";
  export default {
    name: "Detail",
    components: {
      DetailBar,
      DetailSwiper,
      BaseInfo,
      ShopInfo
    },
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {}
      };
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        let data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        this.shop = new Shop(data.shopInfo);
      });
    }
  };
</script>

<style scoped>
  #detail {
    padding-bottom: 100px;
  }
</style>
