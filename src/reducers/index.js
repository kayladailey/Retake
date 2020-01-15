import { ADD_PRODUCT } from "../actions";
import {
  FETCH_PRODUCTS,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAIL,
  DELETE_PRODUCT_START,
  DELETE_PRODUCT_SUCCESS,
  DELETE_PRODUCT_FAIL,
  UPDATE_PRODUCT_START,
  UPDATE_PRODUCT_SUCCESS,
  UPDATE_PRODUCT_FAIL
} from "../actions";

const initialState = {
  products: [],
  fetchingProducts: false,
  error: null
};


const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS:
      return { ...state, fetchingProducts: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, fetchingProducts: false, products: action.payload };
    case FETCH_PRODUCTS_FAIL:
      return { ...state, fetchingProducts: false, error: action.payload };
    case ADD_PRODUCT:
      return { ...state, products: action.payload };
    case DELETE_PRODUCT_START:
      return { ...state };
    case DELETE_PRODUCT_SUCCESS:
      return { ...state, products: action.payload };
    case DELETE_PRODUCT_FAIL:
      return { ...state, error: action.payload };
      case UPDATE_PRODUCT_START:
      return { ...state, isUpdating: true };
    case UPDATE_PRODUCT_SUCCESS:
      return { ...state, isUpdating:false, products: action.payload };
    case UPDATE_PRODUCT_FAIL:
      return { ...state, error: action.payload };

    default:
      return state;
  }
};

export default productReducer;