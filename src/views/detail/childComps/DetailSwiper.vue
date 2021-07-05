<template>
  <swiper-con class="swiper-con">
    <swiper-item v-for="item in topImages">
      <img :src="item" alt="" />
    </swiper-item>
  </swiper-con>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper";
  export default {
    name: "DetailSwiper",
    props: {
      topImages: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    components: {
      "swiper-con": Swiper,
      "swiper-item": SwiperItem
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
  .swiper-con {
    height: 300px;
    overflow: hidden;
  }
</style>
