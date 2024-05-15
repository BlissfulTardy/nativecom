
/**
 * ACTIONS bound to the user cart 
 */

export const clearCart = () => ({
  type: 'CLEAR_CART',
});

export const checkoutCart = () => ({
  type: 'CHECKOUT_CART',
});

export const addToCart = (product) => ({
  type: 'ADD_TO_CART',
  payload: product,
});

export const removeFromCart = (productId) => ({
  type: 'REMOVE_FROM_CART',
  payload: productId,
});

export const incrementQuantity = (productId) => ({
  type: 'INCREMENT_QUANTITY',
  payload: productId,
});

export const decrementQuantity = (productId) => ({
  type: 'DECREMENT_QUANTITY',
  payload: productId,
});