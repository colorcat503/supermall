<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommends="recommends"></recommend-view>
    <feature-view></feature-view>
    <tab-control
      class="tab-control"
      :titles="['流行','新款','精选']"
    ></tab-control>
    <ul>
      <li>列表1</li>
      <li>列表2</li>
      <li>列表3</li>
      <li>列表4</li>
      <li>列表5</li>
      <li>列表6</li>
      <li>列表7</li>
      <li>列表8</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
      <li>列表9</li>
      <li>列表10</li>
      <li>列表11</li>
      <li>列表12</li>
      <li>列表13</li>
      <li>列表14</li>
      <li>列表15</li>
      <li>列表16</li>
      <li>列表17</li>
      <li>列表18</li>
      <li>列表19</li>
      <li>列表20</li>
    </ul>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/Feature";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";

  import { getHomeMultidata, getGoodsData } from "network/home";

  export default {
    name: "Home",
    components: {
      "nav-bar": NavBar,
      "home-swiper": HomeSwiper,
      "recommend-view": RecommendView,
      "feature-view": Feature,
      "tab-control": TabControl
    },
    data() {
      return {
        banners: null,
        recommends: null,
        goods: {
          pop: { page: 0, list: [] },
          news: { page: 0, list: [] },
          sell: { page: 0, lise: [] }
        }
      };
    },
    created() {
      this.getHomeMultidata();
      this.getGoodsData("pop");
      this.getGoodsData("news");
      this.getGoodsData("sell");
    },
    methods: {
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getGoodsData(type) {
        const page = this.goods[type].page + 1;
        getGoodsData(type, page).then(res => {
          console.log(res.data.list);
          this.goods[type].list.push(...res.data.list);
          this.goods[type].page += 1;
        });
      }
    }
  };
</script>

<style scoped>
  #home {
    padding-bottom: 50px;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
  }
  .tab-control {
    position: sticky;
    top: 44px;
  }
</style>
