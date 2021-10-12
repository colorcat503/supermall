<template>
  <div id="conB">
      <p>我是组件B</p>
      <p>A传递的信息{{parent}}</p>
      <button @click="toA">子传父</button>
      <p>$attrs{{$attrs}}</p>
      <conC v-bind="$attrs"  name="conC"></conC>
  </div>
</template>

<script>
import conC from './conC.vue';
export default {
  components: { conC },
  name: 'ConB',
  props:['parent'],
  data() {
    return {
        message:'我是组件B的数据',
    };
  },
  computed:{
  },
  watch:{
  },
  mounted(){
      console.log(this.$root)
      console.log(this.$parent.message)
      console.log(this.$children[0].message)
      console.log('this.$listeners')
    //   组件上挂载的传值事件
      console.log(this.$listeners)
    //   this.$attrs 拿到props里除外的传值
      console.log(this.$attrs)
  },
  methods: {
      toA(){
          console.log('子传父')
          this.$emit('fromB',this.message)
      }
  },
};
</script>

<style scoped>

</style>
