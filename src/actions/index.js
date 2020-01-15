import axios from 'axios'


export const FETCH_PRODUCTS = 'FETCH_PRODUCTS';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAIL = 'FETCH_PRODUCTS_FAIL';

export const ADD_PRODUCT = 'ADD_PRODUCT';

export const DELETE_PRODUCT_START = 'DELETE_PRODUCT_START';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCT_SUCCESS';
export const DELETE_PRODUCT_FAIL = 'DELETE_PRODUCT_FAIL';

export const UPDATE_PRODUCT_START = 'UPDATE_PRODUCT_START';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCT_SUCCESS';
export const UPDATE_PRODUCT_FAIL = 'UPDATE_PRODUCT_FAIL';



export const getProducts = () => dispatch => {
dispatch({type: FETCH_PRODUCTS})
axios
.get('https://farm-life.herokuapp.com/farmer/product/products')
.then(res=> {
  console.log(res);
  dispatch({type: FETCH_PRODUCTS_SUCCESS, payload: res.data})
})
.catch(err=> {
  console.log('Broken')
  dispatch({type: FETCH_PRODUCTS_FAIL, payload: err})
})

}

export const addProduct = product => dispatch => {
  axios
    .post('https://farm-life.herokuapp.com/farmer/product', product)
    .then(res=> {
      dispatch({type:ADD_PRODUCT, payload: res.data})
    })
    .catch(err=> console.log(err))

}

export const deleteProduct = product => dispatch => {
  dispatch({type: DELETE_PRODUCT_START})
  axios
    .delete(`https://farm-life.herokuapp.com/farmer/product/${product}`)
    .then(res=> {
      dispatch({type:DELETE_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch(err=> dispatch({type:DELETE_PRODUCT_FAIL, payload:err}))

}

export const updateProduct = product => dispatch => {
  dispatch({type: UPDATE_PRODUCT_START})
  axios
    .put(`https://farm-life.herokuapp.com/farmer/product/${product.product_name}`, product)
    .then(res=> {
      dispatch({type:UPDATE_PRODUCT_SUCCESS, payload: res.data})
    })
    .catch(err=> dispatch({type:UPDATE_PRODUCT_FAIL, payload:err}))

}