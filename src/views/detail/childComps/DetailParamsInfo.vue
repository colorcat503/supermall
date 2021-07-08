<template>
  <div class="param-info" v-if="Object.keys(paramInfo).length !== 0">
    <table
      class="info-size"
      v-for="(table,index) in paramInfo.sizes"
      :key="index"
    >
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{ td }}</td>
      </tr>
    </table>

    <table class="info-param">
      <tr v-for="(info,index) in paramInfo.infos">
        <td class="param-key">{{ info.key }}</td>
        <td class="param-value">{{ info.value }}</td>
      </tr>
    </table>

    <div class="info-img" v-if="paramInfo.image.length !== 0">
      <img :src="paramInfo.image" />
    </div>
  </div>
</template>

<script>
  export default {
    name: "ParamInfo",
    props: {
      paramInfo: {
        type: Object,
        default() {
          return {};
        }
      }
    },
    data() {
      return {};
    }
  };
</script>

<style scoped>
  .param-info {
    padding: 0 8px;
    font-size: 14px;
  }
  td {
    height: 40px;
  }
  .info-size {
    border-top: 2px solid #eeeeee;
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }
  .info-size td {
    border-bottom: 1px solid #eeeeee;
  }
  .info-param {
    width: 100%;
  }
  .info-param .param-key {
    width: 25%;
  }
  .info-param .param-value {
    color: var(--color-tint);
  }
  .info-img img {
    width: 100%;
  }
</style>
