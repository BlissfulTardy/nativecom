
// IMPORT React
import React from 'react';
// IMPORT Native
import { View, Text, Image, Button, } from 'react-native';
// IMPORT Redux
import { useDispatch, useSelector } from 'react-redux';
// IMPORT Actions
import { addToCart, removeFromCart, incrementQuantity, decrementQuantity } from '../redux_store/actions/cartActions.js';

// IMPORT Style
import styles, { cardProduct } from '../../styles.js'

// COMPONENT Card for displaying any product
const CardProduct = ({ product }) => {

  // DISPATCH action
  const dispatch = useDispatch();
  // SELECT card
  const cart = useSelector((state) => state.cart);
  // CURRENT card
  const cartItem = cart.find((item) => item.id === product.id);

  // HANDLE cart transactions
  const handleAddToCart = () => { dispatch(addToCart(product)); };
  const handleRemoveFromCart = () => { dispatch(removeFromCart(product.id)); };
  const handleIncrement = () => { dispatch(incrementQuantity(product.id)); };
  const handleDecrement = () => { dispatch(decrementQuantity(product.id)); };

  // RENDER
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.category}>{product.category}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <View style={styles.quantityHandler}>
        {cartItem ? (
          <>
            <Button title="-" color="red" onPress={handleDecrement} />
            <Text>{cartItem.quantity}</Text>
            <Button title="+" color="blue" onPress={handleIncrement} />
          </>
        ) : (
          <Button title="Add" color="green" onPress={handleAddToCart} />
        )}
      </View>
    </View>
  );

};

export default CardProduct;