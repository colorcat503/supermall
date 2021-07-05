<template>
  <div id="app">
    <keep-alive exclude="Detail">
      <router-view></router-view>
    </keep-alive>
    <main-tabbar></main-tabbar>
  </div>
</template>

<script>
  import MainTabBar from "./components/content/mainTabBar/MainTabBar";

  export default {
    name: "App",
    components: {
      "main-tabbar": MainTabBar
    }
  };
</script>

<style>
  @import "assets/css/base.css";
</style>
