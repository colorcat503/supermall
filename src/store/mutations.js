export default {
  //mutations的唯一目的是修改state中的状态
  //每个方式尽量处理单一的事件
  addCounter(state, payload) {
    payload.count += 1;
  },
  addToCart(state, payload) {
    payload.isChecked = false;
    state.cartList.push(payload);
  }
};
