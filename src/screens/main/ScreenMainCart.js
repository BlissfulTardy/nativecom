import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import styles from '../../../styles';
import { screenMainCartFoot } from './../../../styles';
import { fakeFetchProducts } from '../../api/fakeFetcher';
import CardProduct from '../../components/CardProduct';
import SectionSerializerLabeled from '../../components/common/SectionSerializerLabeled';

const ScreenMainCart = ({ navigation }) => {
  
  const [cartProducts, setCartProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const fetchedProducts = await fakeFetchProducts(5);
      console.log("Fetched products:", fetchedProducts); // Track fetched products
      setCartProducts(fetchedProducts);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let total = 0;
    cartProducts.forEach((product) => {
      console.log(typeof product.price); // TESTLOG
      console.log(product.quantity); // TESTLOG
      total += product.price * product.quantity;
      console.log(total); // TESTLOG
    });
    console.log("Cart products:", cartProducts); // Track cart products
    setTotalPrice(total);
  }, [cartProducts]);

  const handleCheckout = () => {
    navigation.navigate('ScreenAppCheckout');
  };

  const handleClearCart = () => {
    setCartProducts([]);
  };

  const handleProductPress = (product) => {
    navigation.navigate('ScreenAppProduct', { product });
  };

  return (
    <View style={styles.containers.pageTabs}>
      <View style={styles.containers.containerSectionDefault}>
        <Text style={styles.typography.labelSectionDefault}>Your Cart</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <SectionSerializerLabeled
          data={cartProducts}
          containerStyle={'containerScroller'}
          renderItem={CardProduct}
          keyExtractor={(item) => item.id.toString()}
          horizontal={false}
          numColumns={2}
        />
      </ScrollView>
      <View style={screenMainCartFoot.containerBottomScreenMainCart}>
        <View>
          <Text style={screenMainCartFoot.priceContaineBottomScreenMainCart}>
            Total Price: ${totalPrice.toFixed(2)}
          </Text>
        </View>
        <View style={styles.spatial.gapVertical10} />
        <View style={screenMainCartFoot.buttonsContainerBottomScreenMainCart}>
          <Pressable onPress={handleClearCart} style={styles.clickables.buttonClearCart}>
            <Text style={styles.buttonText}>Clear Cart</Text>
          </Pressable>
          <Pressable onPress={handleCheckout} style={styles.clickables.buttonCheckoutCart}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.spatial.gapVertical10} />
    </View>
  );
};

export default ScreenMainCart;

const localStyles = StyleSheet.create({});

