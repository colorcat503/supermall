<template>
  <div id="MainTabBar">
    <tab-bar>
      <tabbar-item path="/home">
        <!-- 使用路径别名的时候前面必须加~ -->
        <img slot="item-img" src="~assets/img/tabbar/home.svg" />
        <img slot="item-img-active" src="~assets/img/tabbar/home_active.svg" />
        <div slot="item-text">首页</div>
      </tabbar-item>
      <tabbar-item path="/category">
        <img slot="item-img" src="~assets/img/tabbar/category.svg" />
        <img
          slot="item-img-active"
          src="~assets/img/tabbar/category_active.svg"
        />
        <div slot="item-text">分类</div>
      </tabbar-item>
      <tabbar-item path="/cart">
        <img slot="item-img" src="~assets/img/tabbar/shopcart.svg" />
        <img
          slot="item-img-active"
          src="~assets/img/tabbar/shopcart_active.svg"
        />
        <div slot="item-text">购物车</div>
      </tabbar-item>
      <tabbar-item path="/profile">
        <img slot="item-img" src="~assets/img/tabbar/profile.svg" />
        <img
          slot="item-img-active"
          src="~assets/img/tabbar/profile_active.svg"
        />
        <div slot="item-text">我的</div>
      </tabbar-item>
    </tab-bar>
  </div>
</template>

<script>
  import TabBar from "../../common/tabBar/TabBar";
  import TabBarItem from "../../common/tabBar/TabBarItem";
  export default {
    name: "MainTabBar",
    components: {
      "tab-bar": TabBar,
      "tabbar-item": TabBarItem
    },
    data() {
      return {};
    }
  };
</script>

<style scoped></style>
