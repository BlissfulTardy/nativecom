
/**
 * REDUCER for handling product-based data operations
 */

const initialState = [];

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return action.payload;
    default:
      return state;
  }
};

export default productReducer;