<template>
  <div class="wrapper" ref="wrapper" @click="scrollClick">
    <ul class="content">
      <button @click.stop="btnClick">按钮</button>
      <li>分类列表1</li>
      <li>分类列表2</li>
      <li>分类列表3</li>
      <li>分类列表4</li>
      <li>分类列表5</li>
      <li>分类列表6</li>
      <li>分类列表7</li>
      <li>分类列表8</li>
      <li>分类列表9</li>
      <li>分类列表10</li>
      <li>分类列表11</li>
      <li>分类列表12</li>
      <li>分类列表13</li>
      <li>分类列表14</li>
      <li>分类列表15</li>
      <li>分类列表16</li>
      <li>分类列表17</li>
      <li>分类列表18</li>
      <li>分类列表19</li>
      <li>分类列表20</li>
      <li>分类列表21</li>
      <li>分类列表22</li>
      <li>分类列表23</li>
      <li>分类列表24</li>
      <li>分类列表25</li>
      <li>分类列表26</li>
      <li>分类列表27</li>
      <li>分类列表28</li>
      <li>分类列表29</li>
      <li>分类列表30</li>
      <li>分类列表31</li>
      <li>分类列表32</li>
      <li>分类列表33</li>
      <li>分类列表34</li>
      <li>分类列表35</li>
      <li>分类列表36</li>
      <li>分类列表37</li>
      <li>分类列表38</li>
      <li>分类列表39</li>
      <li>分类列表40</li>
      <li>分类列表41</li>
      <li>分类列表42</li>
      <li>分类列表43</li>
      <li>分类列表44</li>
      <li>分类列表45</li>
      <li>分类列表46</li>
      <li>分类列表47</li>
      <li>分类列表48</li>
      <li>分类列表49</li>
      <li>分类列表50</li>
      <li>分类列表51</li>
      <li>分类列表52</li>
      <li>分类列表53</li>
      <li>分类列表54</li>
      <li>分类列表55</li>
      <li>分类列表56</li>
      <li>分类列表57</li>
      <li>分类列表58</li>
      <li>分类列表59</li>
      <li>分类列表60</li>
      <li>分类列表61</li>
      <li>分类列表62</li>
      <li>分类列表63</li>
      <li>分类列表64</li>
    </ul>
  </div>
</template>

<script>
  import BScroll from "better-scroll";

  export default {
    name: "Category",
    data() {
      return {
        srcoll: null
      };
    },
    created() {
      // 这个函数里拿不到dom
      // this.srcoll = new BScroll("this.$refs.wrapper", {});
    },
    mounted() {
      this.srcoll = new BScroll(this.$refs.wrapper, {
        probeType: 3,
        pullUpLoad: true,
        //这里的click 属性监听的是 .wrapper 的click事件 默认是false
        click: true
      });
      this.srcoll.on("scroll", position => {
        // console.log(position);
      });
      this.srcoll.on("pullingUp", () => {
        console.log("上拉加载更多");
        this.srcoll.finishPullUp();
      });
    },
    methods: {
      btnClick() {
        console.log(123);
      },
      scrollClick() {
        console.log(5555);
      }
    }
  };
</script>

<style scoped>
  .wrapper {
    height: 150px;
    background-color: red;
    /* position: absolute;
    left: 0; */
    /* top: 0; */
    overflow: hidden;
    /* overflow-y: scroll; */
  }
</style>
