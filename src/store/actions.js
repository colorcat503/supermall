export default {
  addCart({ state, commit }, payload) {
    return new Promise((resolve, reject) => {
      let oldProduct = state.cartList.find(item => item.iid == payload.iid);
      if (oldProduct) {
        commit("addCounter", oldProduct);
        resolve("当前商品数量+1");
      } else {
        payload.count = 1;
        console.log(payload);
        payload.price = parseInt(
          payload.price.substr(1, payload.price.length - 1)
        );
        commit("addToCart", payload);
        resolve("添加购物车成功");
      }
    });
  }
};
