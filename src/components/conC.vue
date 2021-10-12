<template>
  <div>
      <p>我是组件C</p>
      <button @click="bus">组件c触发bus</button>
      <p>{{$attrs}}</p>
      <p>{{name}}</p>
  </div>
</template>

<script>
export default {
  name: 'ConC',
  inject:['name'],
  data() {
    return {
        message:'我是组件C的数据'
    };
  },
  mounted(){
        console.log('this.$listeners')
        console.log(this.$listeners)
        console.log(localStorage.getItem('aData'))
  },
  computed:{

  },
  watch:{
  },
  methods: {
      bus(){
        this.$bus.$emit('conC',this.message)
      }
  },
};
</script>

<style scoped>

</style>
