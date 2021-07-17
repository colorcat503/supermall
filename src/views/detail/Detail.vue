<template>
  <div id="detail">
    <detail-bar
      class="detail-bar"
      @titClick="barClick"
      :currentIndex="currentIndex"
    >
    </detail-bar>
    <better-scroll
      class="scrollContent"
      :probe-type="3"
      ref="scroll"
      @scroll="detailScroll"
    >
      <ul>
        <li v-for="item in $store.state.cartList">{{ item }}</li>
      </ul>
      <detail-swiper :topImages="topImages"></detail-swiper>
      <base-info :goods="goods"></base-info>
      <shop-info :shop="shop"></shop-info>
      <goods-info
        :detail-info="detailInfo"
        @imageLoad="detailImgLoad"
      ></goods-info>
      <param-info :param-info="paramInfo" ref="paramInfo"></param-info>
      <comment-info
        :comment-info="commentInfo"
        ref="commentInfo"
      ></comment-info>
      <goods-list :goods="recommends" ref="goodsList"></goods-list>
    </better-scroll>
    <back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
    <bottom-bar @addCart="addCart"></bottom-bar>
  </div>
</template>

<script>
  import DetailBar from "./childComps/DetailBar";
  import DetailSwiper from "./childComps/DetailSwiper";
  import BaseInfo from "./childComps/DetailBaseInfo";
  import ShopInfo from "./childComps/DetailShopInfo";
  import GoodsInfo from "./childComps/DetailGoodsInfo";
  import ParamInfo from "./childComps/DetailParamsInfo";
  import CommentInfo from "./childComps/DetailCommentInfo";
  import BottomBar from "./childComps/DetailBottomBar";

  import BetterScroll from "components/common/scroll/Scroll";
  import GoodsList from "components/content/goods/GoodsList";

  import { debounce } from "common/utils";
  import {
    getDetail,
    Goods,
    Shop,
    GoodsParam,
    getRecommend
  } from "network/detail";
  import { backTopMixin } from "common/mixin";

  export default {
    name: "Detail",
    components: {
      DetailBar,
      DetailSwiper,
      BaseInfo,
      ShopInfo,
      BetterScroll,
      GoodsInfo,
      ParamInfo,
      CommentInfo,
      GoodsList,
      BottomBar
    },
    mixins: [backTopMixin],
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        currentIndex: 0,
        commentInfo: {},
        recommends: [],
        themeTopYs: [],
        newRefresh: null,
        itemImgLister: null,
        getThemeTopY: null,
        isShowBackTop: false
      };
    },
    mounted() {
      this.newRefresh = debounce(this.$refs.scroll.refresh, 500);
      this.itemImgLister = () => {
        this.newRefresh();
      };
      this.$bus.$on("itemImgLoad", this.itemImgLister);
      this.getThemeTopY = debounce(() => {
        this.themeTopYs.push(0);
        this.themeTopYs.push(this.$refs.paramInfo.$el.offsetTop);
        this.themeTopYs.push(this.$refs.commentInfo.$el.offsetTop);
        this.themeTopYs.push(this.$refs.goodsList.$el.offsetTop);
        //添加一个最大值 用于比较判断
        this.themeTopYs.push(Number.MAX_VALUE);
      }, 500);
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        let data = res.result;
        this.topImages = data.itemInfo.topImages;
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );

        this.shop = new Shop(data.shopInfo);
        this.detailInfo = data.detailInfo;
        this.paramInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        this.commentInfo = data.rate.list ? data.rate.list[0] : {};
      });
      getRecommend().then(res => {
        this.recommends = res.data.list;
      });
    },
    updated() {
      // console.log(111);
    },
    methods: {
      detailImgLoad() {
        this.newRefresh();
        this.getThemeTopY();
      },
      barClick(index) {
        this.$refs.scroll.scrollTo(0, -this.themeTopYs[index], 500);
      },
      detailScroll(opsition) {
        // this.currentIndex = 0;
        // if (-opsition.y >= this.themeTopYs[3]) {
        //   this.currentIndex = 3;
        // } else if (-opsition.y >= this.themeTopYs[2]) {
        //   this.currentIndex = 2;
        // } else if (-opsition.y >= this.themeTopYs[1]) {
        //   this.currentIndex = 1;
        // }
        const opsitionY = -opsition.y;
        let length = this.themeTopYs.length;
        for (let i = 0; i < length - 1; i++) {
          //hack做法
          if (
            this.currentIndex !== i &&
            (i < length - 1 &&
              opsitionY >= this.themeTopYs[i] &&
              opsitionY < this.themeTopYs[i + 1])
          ) {
            this.currentIndex = i;
          }
        }
        this.isShowBackTop = opsitionY > 1000 ? true : false;
      },
      addCart() {
        console.log("----");
        const product = {};
        product.image = this.topImages[0];
        product.title = this.goods.title;
        product.desc = this.goods.desc;
        product.price = this.goods.realPrice;
        product.iid = this.iid;
        this.$store.dispatch("addCart", product);
      }
    }
  };
</script>

<style scoped>
  #detail {
    position: relative;
    z-index: 9;
    background-color: #fff;
    height: 100vh;
  }
  .detail-bar {
    position: relative;
    z-index: 10;
    background-color: #fff;
  }
  .scrollContent {
    /* overflow: hidden;
    position: absolute;
    top: 44px;
    bottom: 49px; */
    height: calc(100% - 44px - 49px);
    /* padding-bottom: 50px; */
  }
</style>
