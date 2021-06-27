<template>
  <div>
    <swiper-box>
      <swiper-item v-for="item in banners">
        <a :href="item.link">
          <img :src="item.image" alt="" />
        </a>
      </swiper-item>
    </swiper-box>
  </div>
</template>

<script>
  import { Swiper, SwiperItem } from "components/common/swiper";
  export default {
    name: "App",
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
      return {};
    }
  };
</script>

<style scoped></style>
