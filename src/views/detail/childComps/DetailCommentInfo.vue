<template>
  <div class="comment-info">
    <div v-if="Object.keys(commentInfo).length !== 0">
      <div class="info-header">
        <div class="header-title">用户评价</div>
        <div class="header-more">更多<i class="arrow-right"></i></div>
      </div>
      <div class="info-user">
        <img :src="commentInfo.user.avatar" alt="" />
        <span>{{ commentInfo.user.uname }}</span>
      </div>
      <div class="info-detail">
        <p>{{ commentInfo.content }}</p>
        <div class="info-other">
          <span class="date">{{ commentInfo.created }}</span>
          <span>{{ commentInfo.style }}</span>
        </div>
        <div class="info-imgs">
          <img
            :src="item"
            v-for="(item,index) in commentInfo.images"
            :key="index"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "DetailCommentInfo",
    props: {
      commentInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    filters: {
      //   showDate
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
  .comment-info {
    padding: 0 8px;
  }
  .info-header {
    margin-top: 20px;
    border-top: 2px solid #eeeeee;
    border-bottom: 1px solid #eeeeee;
    display: flex;
    justify-content: space-between;
    font-size: 14px;
    line-height: 40px;
  }
  .info-header .header-more {
    color: #444444;
  }
  .info-user {
    margin: 15px 0;
    font-size: 14px;
  }
  .info-user img {
    width: 50px;
    border-radius: 50%;
    margin-right: 10px;
    vertical-align: middle;
  }
  .info-detail {
    font-size: 13px;
    color: #999999;
  }
  .info-detail .info-other {
    margin: 8px 0;
  }
  .info-detail .info-other span {
    margin-right: 8px;
  }
  .info-detail .info-imgs {
    display: flex;
    justify-content: flex-start;
  }
  .info-detail .info-imgs img {
    width: 50px;
    margin: 0 3px 3px 0;
  }
</style>
