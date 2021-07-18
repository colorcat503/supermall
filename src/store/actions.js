export default {
  addCart({ state, commit }, payload) {
    let oldProduct = state.cartList.find(item => item.iid == payload.iid);
    if (oldProduct) {
      commit("addCounter", oldProduct);
    } else {
      payload.count = 1;
      payload.price = parseInt(
        payload.price.substr(1, payload.price.length - 1)
      );
      commit("addToCart", payload);
    }
  }
};