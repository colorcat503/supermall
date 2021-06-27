<template>
  <div class="nav-bar">
    <div class="left"><slot name="left"></slot></div>
    <div class="center"><slot name="center"></slot></div>
    <div class="right"><slot name="right"></slot></div>
  </div>
</template>

<script>
  export default {
    name: "App",
    data() {
      return {};
    }
  };
</script>

<style scoped>
  .nav-bar {
    display: flex;
    line-height: 44px;
    box-shadow: 0 1px 5px 0 #fafafa;
  }
  .left,
  .right {
    width: 60px;
  }
  .center {
    flex: 1;
    text-align: center;
  }
</style>
