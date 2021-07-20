<template>
  <div class="toast" v-show="isShow">{{ message }}</div>
</template>

<script>
  export default {
    name: "Toast",
    data() {
      return {
        message: "提示",
        isShow: false
      };
    },
    methods: {
      show(message, duration = 2000) {
        console.log(555);
        this.isShow = true;
        this.message = message;
        setTimeout(() => {
          this.isShow = false;
        }, duration);
      }
    }
  };
</script>

<style scoped>
  .toast {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 999;
    padding: 5px 10px;
    border-radius: 3px;
    font-size: 14px;
    color: #ffffff;
    background-color: rgba(0, 0, 0, 0.6);
  }
</style>
