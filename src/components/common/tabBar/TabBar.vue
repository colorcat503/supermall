<template>
  <div id="tab-bar" class="ignore">
    <slot></slot>
    <!-- <tabbar-item> -->
    <!-- 使用路径别名的时候前面必须加~ -->
    <!-- <img slot="item-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">首页</div> -->
    <!-- </tabbar-item>
    <tabbar-item> -->
    <!-- <img slot="item-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">分类</div> -->
    <!-- </tabbar-item> -->
    <!-- <tabbar-item> -->
    <!-- <img slot="item-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">购物车</div> -->
    <!-- </tabbar-item>
    <tabbar-item> -->
    <!-- <img slot="item-img" src="~assets/img/tabbar/home.svg" />
      <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" />
      <div slot="item-text">我的</div> -->
    <!-- </tabbar-item> -->
  </div>
</template>

<script>
  export default {
    name: "Tabbar",
    data() {
      return {};
    }
  };
</script>

<style scoped>
  #tab-bar {
    display: flex;
    background-color: #f6f6f6;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.2);
  }
</style>
