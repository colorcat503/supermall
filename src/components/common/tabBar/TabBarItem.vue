<template>
  <div class="tab-bar-item" @click="itemClick">
    <slot v-if="!isActive" name="item-img"></slot>
    <slot v-else name="item-img-active"></slot>
    <div>
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "App",
    props: {
      path: String,
      color: {
        type: String,
        default: "deeppink"
      }
    },
    data() {
      return {
        // isActive: true
      };
    },
    computed: {
      isActive() {
        // 当前页面的导航为选中状态
        return this.$route.path.indexOf(this.path) !== -1;
      }
    },
    methods: {
      itemClick() {
        console.log(this.$route);
        this.$router.replace(this.path).catch(err => {});
      }
    }
  };
</script>

<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }

  .tab-bar-item img {
    width: 24px;
    height: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
</style>
