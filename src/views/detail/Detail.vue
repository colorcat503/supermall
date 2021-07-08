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
      <detail-swiper :topImages="topImages"></detail-swiper>
      <base-info :goods="goods"></base-info>
      <shop-info :shop="shop"></shop-info>
      <goods-info :detail-info="detailInfo" @imageLoad="imageLoad"></goods-info>
      <param-info :param-info="paramInfo" ref="paramInfo"></param-info>
      <comment-info
        :comment-info="commentInfo"
        ref="commentInfo"
      ></comment-info>
    </better-scroll>
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

  import BetterScroll from "components/common/scroll/Scroll";

  import { getDetail, Goods, Shop, GoodsParam } from "network/detail";
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
      CommentInfo
    },
    data() {
      return {
        iid: null,
        topImages: null,
        goods: {},
        shop: {},
        detailInfo: {},
        paramInfo: {},
        currentIndex: 0,
        commentInfo: {}
      };
    },
    mounted() {
      this.$refs.scroll.refresh;
    },
    created() {
      this.iid = this.$route.params.iid;
      getDetail(this.iid).then(res => {
        let data = res.result;
        console.log(data);
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
    },
    methods: {
      imageLoad() {
        this.$refs.scroll.refresh();
      },
      barClick(index) {
        let scrollToY = 0;
        switch (index) {
          case 0:
            scrollToY = 0;
            break;
          case 1:
            scrollToY = -this.$refs.paramInfo.$el.offsetTop;
            break;
          case 2:
            scrollToY = -this.$refs.commentInfo.$el.offsetTop;
        }
        this.$refs.scroll.scrollTo(0, scrollToY, 500);
      },
      detailScroll(opsition) {
        this.currentIndex = 0;
        if (-opsition.y >= this.$refs.paramInfo.$el.offsetTop) {
          this.currentIndex = 1;
        } else if (-opsition.y >= this.$refs.commentInfo.$el.offsetTop) {
          this.currentIndex = 2;
        }
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
    height: calc(100% - 44px);
    /* padding-bottom: 50px; */
  }
</style>
