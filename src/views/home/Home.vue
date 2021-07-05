<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物街</div>
    </nav-bar>
    <tab-control
      :titles="['流行','新款','精选']"
      @tabClick="tabClick"
      ref="tabControl1"
      v-show="isTabFixed"
    ></tab-control>
    <better-scroll
      class="scrollContent"
      ref="scroll"
      :probe-type="3"
      :pull-up-load="true"
      @scroll="contentScroll"
      @pullingUp="loadMore"
    >
      <home-swiper :banners="banners" @imgLoad="swiperLoad"></home-swiper>
      <recommend-view :recommends="recommends"></recommend-view>
      <feature-view></feature-view>
      <tab-control
        :titles="['流行','新款','精选']"
        @tabClick="tabClick"
        ref="tabControl2"
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
  import { debounce } from "common/utils";

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
        isShowBackTop: false,
        tabOffsetTop: 0,
        isTabFixed: false,
        saveY: 0
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
    activated() {
      this.$refs.scroll.refresh();
      this.$refs.scroll.scrollTo(0, this.saveY, 0);
    },
    deactivated() {
      this.saveY = this.$refs.scroll.scroll.y;
    },
    mounted() {
      const refresh = debounce(this.$refs.scroll.refresh, 500);
      this.$bus.$on("itemImgLoad", () => {
        refresh();
      });
    },
    // updated() {
    //   this.tabOffsetTop = this.$refs.tabControl.$el.offsetTop;
    // },
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
        this.$refs.tabControl1.currentIndex = index;
        this.$refs.tabControl2.currentIndex = index;
      },
      backClick() {
        // 回到顶部
        this.$refs.scroll.scrollTo(0, 0, 500);
      },
      contentScroll(opsition) {
        // backTop 组件的显示隐藏
        this.isShowBackTop = -opsition.y > 1000 ? true : false;
        this.isTabFixed = -opsition.y > this.tabOffsetTop ? true : false;
      },
      loadMore() {
        // 下拉加载更多
        this.getGoodsData(this.currentType);
      },
      swiperLoad() {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
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
          if (this.goods[type].page < 2) return;
          this.$refs.scroll.finishPullUp();
        });
      }
    }
  };
</script>

<style scoped>
  #home {
    height: 100vh;
    position: relative;
  }
  .home-nav {
    background-color: var(--color-tint);
    color: #ffffff;
  }
  .tab-control {
    position: sticky;
    top: 44px;
    z-index: 8;
  }
  .fixed {
    position: fixed;
    top: 44px;
    left: 0;
  }
  .scrollContent {
    overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px;
  }
</style>
