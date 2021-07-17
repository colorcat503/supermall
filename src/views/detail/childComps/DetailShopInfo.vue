<template>
  <div class="shop-info">
    <div class="shop-top">
      <img :src="shop.logo" alt="" />
      <span class="name">{{ shop.name }}</span>
    </div>
    <div class="shop-middle">
      <div class="shop-middle-item shop-middle-left">
        <div class="info-sells">
          <div class="count">{{ shop.sells | sellCountFilter }}</div>
          <div class="text">总销量</div>
        </div>
        <div class="info-goods">
          <div class="count">{{ shop.goodsCount }}</div>
          <div class="text">全部宝贝</div>
        </div>
      </div>
      <div class="shop-middle-item shop-middle-right">
        <table>
          <tr v-for="(item,index) in shop.score" :key="index">
            <td>{{ item.name }}</td>
            <td class="score" :class="{'score-better':item.isBetter}">
              {{ item.score }}
            </td>
            <td class="better" :class="{'better-more':item.isBetter}">
              {{ item.isBetter ? "高" : "低" }}
            </td>
          </tr>
        </table>
      </div>
    </div>
    <div class="shop-bottom">
      <div class="enter-shop">进店逛逛</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ShopInfo",
    props: {
      shop: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    },
    filters: {
      sellCountFilter(value) {
        return value >= 10000 ? (value / 10000).toFixed(1) + "万" : value;
      }
    }
  };
</script>

<style scoped>
  .shop-info {
    padding: 8px;
    border-bottom: 5px solid #fcfcfc;
  }
  .shop-top {
    margin: 10px 0;
    font-size: 12px;
  }
  .shop-top img {
    width: 50px;
    height: 50px;
    vertical-align: middle;
    margin-right: 10px;
  }
  .shop-middle {
    display: flex;
    justify-content: space-between;
  }
  .shop-middle-left {
    display: flex;
    text-align: center;
    justify-content: space-evenly;
    padding: 15px 0;
    width: 50%;
  }
  .shop-middle-left .count {
    margin-bottom: 5px;
  }
  .shop-middle-left .text {
    font-size: 12px;
  }
  .shop-middle-right {
    font-size: 12px;
  }
  .shop-middle-right table tr {
    line-height: 18px;
  }

  .score {
    color: forestgreen;
    padding: 0 10px;
  }
  .better {
    color: #ffffff;
    background-color: forestgreen;
    width: 10px;
  }
  .score-better {
    color: red;
  }

  .better-more {
    background-color: red;
  }
  .shop-bottom {
    display: flex;
    justify-content: center;
    padding: 10px 0;
  }
  .enter-shop {
    background-color: #eeeeee;
    width: 50%;
    text-align: center;
    padding: 5px;
    border-radius: 20px;
  }
</style>
