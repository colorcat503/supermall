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
      @tabClick="tabClick"
    ></tab-control>
    <goods-list :goods="showGoods"> </goods-list>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/Feature";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";

  import { getHomeMultidata, getGoodsData } from "network/home";

  export default {
    name: "Home",
    components: {
      "nav-bar": NavBar,
      "home-swiper": HomeSwiper,
      "recommend-view": RecommendView,
      "feature-view": Feature,
      "tab-control": TabControl,
      "goods-list": GoodsList
    },
    data() {
      return {
        banners: null,
        recommends: null,
        goods: {
          pop: { page: 0, list: [] },
          new: { page: 0, list: [] },
          sell: { page: 0, list: [] }
        },
        currentType: "pop"
      };
    },
    computed: {
      showGoods() {
        return this.goods[this.currentType].list;
      }
    },
    created() {
      this.getHomeMultidata();
      this.getGoodsData("pop");
      this.getGoodsData("new");
      this.getGoodsData("sell");
    },
    methods: {
      // 事件监听
      tabClick(index) {
        switch (index) {
          case 0:
            this.currentType = "pop";
            break;
          case 1:
            this.currentType = "new";
            break;
          case 2:
            this.currentType = "sell";
        }
      },
      // 网络请求方法
      getHomeMultidata() {
        getHomeMultidata().then(res => {
          this.banners = res.data.banner.list;
          this.recommends = res.data.recommend.list;
        });
      },
      getGoodsData(type) {
        const page = this.goods[type].page + 1;
        getGoodsData(type, page).then(res => {
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
    z-index: 8;
  }
</style>
