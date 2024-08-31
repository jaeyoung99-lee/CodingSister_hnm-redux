function getProducts(searchQuery) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/jaeyoung99-lee/CodingSister_hnm-shopping-mall/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data :", data);
    dispatch({ type: "GET_PRODUCT_SUCCESS", payload: { data } });
  };
}

function getProductDetail(id) {
  return async (dispatch, getState) => {
    let url = `https://my-json-server.typicode.com/jaeyoung99-lee/CodingSister_hnm-shopping-mall/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log("data :", data);
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: { data } });
  };
}
export const productAction = { getProducts, getProductDetail };
