<template>
  <div id="detail">
    <detail-bar>
      <div slot="center">详情页</div>
    </detail-bar>
  </div>
</template>

<script>
  import DetailBar from "./childComps/DetailBar";
  export default {
    name: "App",
    components: {
      "detail-bar": DetailBar
    },
    data() {
      return {
        iid: null
      };
    },
    created() {
      this.iid = this.$route.params.iid;
      console.log(this.iid);
    }
  };
</script>

<style scoped></style>
