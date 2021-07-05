<template>
  <div id="detail">
    <detail-bar>
      <div slot="center">详情页</div>
    </detail-bar>
    <detail-swiper :topImages="topImages"></detail-swiper>
  </div>
</template>

<script>
  import DetailBar from "./childComps/DetailBar";
  import DetailSwiper from "./childComps/DetailSwiper";

  import { getDetail, goods } from "network/detail";
  export default {
    name: "Detail",
    components: {
      DetailBar,
      DetailSwiper
    },
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {}
      };
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        console.log(res);
        let data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
      });
    }
  };
</script>

<style scoped></style>
