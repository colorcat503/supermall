<template>
  <div class="recommend">
    <div class="recommend-item" v-for="item in recommends">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: "RecommendView",
    props: {
      recommends: {
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

<style scoped>
  .recommend {
    display: flex;
  }
  .recommend-item {
    flex: 1;
    font-size: 12px;
    text-align: center;
    padding: 10px 0 20px;
    border-bottom: 10px solid #f5f5f5;
  }
  .recommend-item img {
    width: 65px;
    height: 65px;
    margin-bottom: 10px;
  }
</style>
