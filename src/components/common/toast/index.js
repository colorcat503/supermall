import Toast from "./Toast";
const toastObj = {};
toastObj.install = function(Vue) {
  console.log(111);
  //   创建组件构造器
  const toastContrustor = Vue.extend(Toast);
  //   new 根据组件构造器 创建出一个组件对象
  const toast = new toastContrustor();
  // 将组件对象手动挂载到某一个元素上
  toast.$mount(document.createElement("div"));
  document.body.appendChild(toast.$el);
  Vue.prototype.$toast = toast;
};
export default toastObj;
