
// IMPORT React
import React from 'react';
// IMPORT Native
import { View, Text, FlatList, Button, } from 'react-native';
// IMPORT Redux
import { useSelector, useDispatch } from 'react-redux';
// IMPORT Components
import CardProduct from '../../components/CardProduct';
// IMPORT Actions
import { clearCart, checkoutCart } from '../../redux_store/actions/cartActions';

// IMPORT Style
import styles, { screenMainCart } from '../../../styles';

// COMPONENT Cart screen
const ScreenMainCart = () => {

  // DISPATCHER
  const dispatch = useDispatch();
  // SELCT cart
  const cart = useSelector((state) => state.cart);
  // CALCULATE current total
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // RENDER
  return (
    <View style={screenMainCart.container}>
      <Text style={screenMainCart.title}>Your Cart</Text>
      <FlatList
        data={cart}
        numColumns={2}
        renderItem={({ item }) => <CardProduct product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <View style={screenMainCart.cartSummary}>
        <Text style={screenMainCart.totalCost}>Total: ${totalCost.toFixed(2)}</Text>
        <Button title="Clear Cart" onPress={handleClearCart} />
        <Button title="Checkout" onPress={() => alert('Proceed to Checkout')} />
      </View>
    </View>
  );
};

export default ScreenMainCart;