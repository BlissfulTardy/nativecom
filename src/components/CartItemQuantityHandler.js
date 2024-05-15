import React from 'react';
import { View, Text, Pressable } from 'react-native'; // Import necessary components
import Icon from 'react-native-vector-icons/FontAwesome'; // Import Icon component
import { itemCartCount } from '../../styles';

const CartItemQuantityHandler = ({ item, onIncrease, onDecrease }) => {
  const disableDecrement = item.quantity <= 0; // Check if the item quantity is 0 or negative
  const isSingleItem = item.quantity === 1; // Check if the item quantity is exactly 1

  return (
    <View style={itemCartCount.containerItemCartCount}>
      {/* DECREASE AMOUNT */}
      <Pressable onPress={onDecrease} disabled={disableDecrement} style={[itemCartCount.buttonItemCartCount, { backgroundColor: isSingleItem ? 'red' : 'blue', opacity: disableDecrement ? 0.5 : 1 }]}>
        <View style={itemCartCount.iconButtonItemCartCount}>
          {/* Trash icon if quantity is 1, minus icon otherwise */}
          <Icon name={isSingleItem ? 'trash' : 'minus'} size={24} color={'#fff'} />
        </View>
      </Pressable>
      {/* DISPLAY AMOUNT */}
      <View style={itemCartCount.displayItemCartCount}>
        <Text style={itemCartCount.textDisplayItemCartCount}>{item.quantity}</Text>
      </View>
      {/* INCREASE AMOUNT */}
      <Pressable onPress={onIncrease} style={[itemCartCount.buttonItemCartCount, { backgroundColor: 'green' }]}>
        <View style={itemCartCount.iconButtonItemCartCount}>
          <Icon name={'plus'} size={24} color={'#fff'} />
        </View>
      </Pressable>
    </View>
  );
};

export default CartItemQuantityHandler;
