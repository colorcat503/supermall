<template>
  <div v-if="Object.keys(detailInfo).length !== 0" class="detail-info">
    <div class="info-desc">
      <div class="start"></div>
      <div class="desc">{{ detailInfo.desc }}</div>
      <div class="end"></div>
    </div>
    <div class="info-key">{{ detailInfo.detailImage[0].key }}</div>
    <div class="info-list">
      <img
        v-for="(item,index) in detailInfo.detailImage[0].list"
        :key="index"
        :src="item"
        @load="imgLoad"
      />
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailInfo",
    props: {
      detailInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {
        counter: 0,
        imgLength: 0
      };
    },
    watch: {
      detailInfo() {
        this.imgLength = this.detailInfo.detailImage[0].list.length;
      }
    },
    methods: {
      imgLoad() {
        // // 最后一张图片加载完后 发送事件
        // if (++this.counter === this.imgLength) {
        //   this.$emit("imageLoad");
        // }
        this.$emit("imageLoad");
      }
    }
  };
</script>

<style scoped>
  .detail-info {
    padding: 20px 8px;
    font-size: 12px;
  }
  .info-key {
    margin: 10px 0 20px 0;
  }
  .info-list img {
    width: 100%;
  }
</style>
