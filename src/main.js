import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import FastClick from "fastclick";
import VueLazyload from "vue-lazyload";
import toast from "./components/common/toast";

Vue.config.productionTip = false;
// 添加事件总线对象
Vue.prototype.$bus = new Vue();
// 安装toast
Vue.use(toast);
Vue.use(VueLazyload, {
  loading: require("./assets/img/common/placeholder.png")
});
// fastclick 解决移动端 click 300ms(防止重复点击)延迟问题
FastClick.attach(document.body);

new Vue({
  render: h => h(App),
  router,
  store
}).$mount("#app");
