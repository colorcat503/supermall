<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <better-scroll
      class="content"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        class="tab-control"
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
      ></tab-control>
      <goods-list :goods="showGoods"> </goods-list>
    </better-scroll>
    <!-- .native 监听元素组件根元素的事件处理 -->
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
  </div>
</template>

<script>
  import HomeSwiper from "./childComps/HomeSwiper";
  import RecommendView from "./childComps/RecommendView";
  import Feature from "./childComps/Feature";

  import NavBar from "components/common/navbar/NavBar";
  import TabControl from "components/content/tabControl/TabControl";
  import GoodsList from "components/content/goods/GoodsList";
  import Scroll from "components/common/scroll/Scroll";
  import BackTop from "components/content/backTop/BackTop";

  import { getHomeMultidata, getGoodsData } from "network/home";

  export default {
    name: "Home",
    components: {
      "nav-bar": NavBar,
      "home-swiper": HomeSwiper,
      "recommend-view": RecommendView,
      "feature-view": Feature,
      "tab-control": TabControl,
      "goods-list": GoodsList,
      "better-scroll": Scroll,
      "back-top": BackTop
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
        currentType: "pop",
        isShowBackTop: false
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
    mounted() {
      const refresh = this.debounce(this.$refs.scroll.refresh, 500);
      this.$bus.$on("itemImgLoad", () => {
        refresh();
      });
    },
    methods: {
      // 事件监听
      // 防抖函数
      debounce(func, delay) {
        // debugger;
        let timer = null;
        return function(...args) {
          if (timer) clearTimeout(timer);
          timer = setTimeout(() => {
            func.apply(this, args);
          }, delay);
        };
      },
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
      backClick() {
        // 回到顶部
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
      contentScroll(opsition) {
        // backTop 组件的显示隐藏
        this.isShowBackTop = -opsition.y > 1000 ? true : false;
      },
      loadMore() {
        // 下拉加载更多
        this.getGoodsData(this.currentType);
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
          this.$refs.scroll.finishPullUp();
        });
      }
    }
  };
</script>

<style scoped>
  #home {
    padding-top: 44px;
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
    position: fixed;
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
  .content {
    /* height: 300px; */
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
  /* .content {
    height: calc(100% - 93px);
    overflow: hidden;
    margin-top: 44px;
  } */
</style>
