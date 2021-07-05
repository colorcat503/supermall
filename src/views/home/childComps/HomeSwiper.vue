<template>
  <div>
    <swiper-box>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" @load="imgLoadFun" />
        </a>
      </swiper-item>
    </swiper-box>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper";
  export default {
    name: "HomeSwiper",
    components: {
      "swiper-box": Swiper,
      "swiper-item": SwiperItem
    },
    props: {
      banners: {
        type: Array,
        default() {
          return [];
        }
      }
    },
    data() {
      return {
        imgLoad: false
      };
    },
    methods: {
      imgLoadFun() {
        if (this.imgLoad) return;
        this.$emit("imgLoad");
        this.imgLoad = true;
      }
    }
  };
</script>

<style scoped></style>
