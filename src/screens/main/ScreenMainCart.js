// ScreenMainCart.js
import React from 'react';
import { View, Text, ScrollView, Pressable, StyleSheet } from 'react-native';
import styles from '../../../styles';
import { screenMainCartFoot } from './../../../styles';
import CardProduct from '../../components/CardProduct';
import SectionSerializerLabeled from '../../components/common/SectionSerializerLabeled';
import UserCart from '../../utils/UserCart';

const ScreenMainCart = ({ navigation }) => {
  return (
    <View style={styles.containers.pageTabs}>
      <View style={styles.containers.containerSectionDefault}>
        <Text style={styles.typography.labelSectionDefault}>Your Cart</Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UserCart>
          {({ cartProducts, totalPrice, handleClearCart }) => (
            <SectionSerializerLabeled
              data={cartProducts}
              containerStyle={'containerScroller'}
              renderItem={CardProduct}
              keyExtractor={(item) => item.id.toString()}
              horizontal={false}
              numColumns={2}
            />
          )}
        </UserCart>
      </ScrollView>
      <View style={screenMainCartFoot.containerBottomScreenMainCart}>
        <View>
          <Text style={screenMainCartFoot.priceContaineBottomScreenMainCart}>
            Total Price: ${UserCart.totalPrice.toFixed(2)}
          </Text>
        </View>
        <View style={styles.spatial.gapVertical10} />
        <View style={screenMainCartFoot.buttonsContainerBottomScreenMainCart}>
          <Pressable onPress={UserCart.handleClearCart} style={styles.clickables.buttonClearCart}>
            <Text style={styles.buttonText}>Clear Cart</Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ScreenAppCheckout')} style={styles.clickables.buttonCheckoutCart}>
            <Text style={styles.buttonText}>Checkout</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.spatial.gapVertical10} />
    </View>
  );
};

export default ScreenMainCart;
