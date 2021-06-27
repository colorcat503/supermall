<template>
  <div id="app">
    <router-view></router-view>
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
