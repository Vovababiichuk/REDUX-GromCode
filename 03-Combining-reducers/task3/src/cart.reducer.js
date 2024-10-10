import { initialState } from './store';
import { ADD_PRODUCT, REMOVE_PRODUCT } from './cart.actions';

export const cartReducer = (state = initialState.cart, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload.productData],
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(product => product.id !== action.payload.productId),
      };

    default:
      return state;
  }
};
