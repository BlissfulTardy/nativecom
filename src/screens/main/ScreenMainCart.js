// IMPORT REACT
import React, { useState, useEffect } from 'react';

// IMPORT REACT NATIVE
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';

// IMPORT STYLES
import styles from '../../../styles';
import { screenMainCartFoot } from './../../../styles';

// IMPORT API
import { fakeFetchProducts } from '../../api/fakeFetcher';

// IMPORT COMPONENTS
import CardCartProduct from '../../components/CardProduct';
import SectionSerializerLabeled from '../../components/common/SectionSerializerLabeled';

// SCREEN COMPONENT
const ScreenMainCart = ({ navigation }) => {

  // HANDLING CART AND PRICE AS STATES
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  // USE EFFECT IMPLEMENTATION FOR DATA FETCH WITH API
  useEffect(() => {
    // FETCH DATA
    const fetchData = async () => {
      // TODO: REPLACE WITH ACTUAL FETCH WHEN READY
      const fetchedProducts = await (fakeFetchProducts(5));
      setCartProducts(fetchedProducts)
    }
    fetchData();
  }, []);

  // CALCULATE TOTAL PRICE
  useEffect(() => {
    let total = 0;
    cartProducts.forEach((product) => {
      total += product.price * product.quantity;
    });
    setTotalPrice(total);
  }, [cartProducts]);

  // FUNCTION HANDLING CHECKOUT REQUEST
  const handleCheckout = () => {
    // Navigate to ScreenAppCheckout
    navigation.navigate('ScreenAppCheckout');
  };

  // FUNCTION HANDLING CLEARING CART
  const handleClearCart = () => {
    // Clear the cart
    setCartProducts([]);
  };

  // FUNCTION HANDLING CARD PRESS
  const handleProductPress = (product) => {
    // Navigate to ScreenAppProduct with the selected product
    navigation.navigate('ScreenAppProduct', { product });
  };

  // PAGE COMPOSITION
  return (

    /* PAGE COMPONENT */
    <View style={styles.containers.pageTabs}>

      {/* FIXED PAGE TITLE */}
      <View style={styles.containers.containerSectionDefault}>
        <Text style={styles.typography.labelSectionDefault}>
          Your Cart
        </Text>
      </View>

      {/* SCROLLABLE CART ITEMS SECTIPN */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionSerializerLabeled
          data={cartProducts}
          containerStyle={'containerScroller'}
          renderItem={CardCartProduct}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
        />
      </ScrollView>

      {/* FIXED TOTAL PRICE & ACTIONS SECTION*/}
      <View style={screenMainCartFoot.containerBottomScreenMainCart}>

        {/* DISPLAY TOTAL PRICE */}
        <View>
          <Text style={screenMainCartFoot.priceContaineBottomScreenMainCart}>
            Total Price: ${totalPrice.toFixed(2)}
          </Text>
        </View>

        {/* GAP ELEMENT */}
        <View style={styles.spatial.gapVertical10} />

        {/* DISPLAY BUTTONS */}
        <View style={screenMainCartFoot.buttonsContainerBottomScreenMainCart}>
          <Pressable onPress={handleClearCart} style={styles.clickables.buttonClearCart}>
            <Text style={styles.buttonText}>Clear Cart</Text>
          </Pressable>
          <Pressable onPress={handleCheckout} style={styles.clickables.buttonCheckoutCart}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </View>

      </View>

      {/* GAP ELEMENT */}
      <View style={styles.spatial.gapVertical10} />

    </View>
  );
};

export default ScreenMainCart;

// Local styles
const localStyles = StyleSheet.create({

});
