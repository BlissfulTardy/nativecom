
// IMPORT REACT
import React from 'react';

//IMPORT REACT NATIVE
import { View, Text, Image, Pressable } from 'react-native';

// IMPORT STYLES
import styles from '../../styles';

// IMPORT IONICONS
import Icon from 'react-native-vector-icons/FontAwesome'

// COMPONENT RENDER FUNCTION
const CardCartProduct = ({ item, onPress, onIncrease, onDecrease }) => {
  return (
    // HANDLES HANDLING APPROPRIATE ONPRESS HANDLER AS A FUNCTION PARAMETER
    <Pressable onPress={onPress} style={styles.cardCartProduct}>
      {/* PRODUCT IMAGE */}
      <Image source={{ uri: item.image }} style={styles.imageCartProduct} />
      {/* PRODUCT NAME */}
      <Text style={styles.nameCartProduct} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
      {/* PRODUCT DESCRIPTION */}
      <Text style={styles.descriptionCartProduct} numberOfLines={3} ellipsizeMode="tail">
        {item.description}
      </Text>
      {/* PRODUCT CATEGORY */}
      <Text style={styles.categoryCartProduct}>
        {item.category}
      </Text>
      {/* PRODUCT PRICE */}
      <Text style={styles.priceCartProduct}>${item.price}</Text>
      {/* PRODUCT COUNTER SECTION */}
      <View style={styles.containerItemCartCount}>
        {/* DECRESE AMOUNT */}
        <Pressable onPress={onDecrease} style={styles.buttonItemCartCount}>
          <View style={styles.iconButtonItemCartCount}>
            <Icon name={'minus'} size={'large'} />
          </View>
        </Pressable>
        {/* DISPLAY AMOUNT */}
        <View style={styles.displayItemCartCount}>
          <Text style={styles.textDisplayItemCartCount}>{item.quantity}</Text>
        </View>
        {/* INCREASE AMOUNT */}
        <Pressable onPress={onIncrease} style={styles.buttonItemCartCount}>
          <View style={styles.iconButtonItemCartCount}>
            <Icon name={'plus'} size={'large'}/>
          </View>
        </Pressable>
      </View>
    </Pressable>
  );
};

export default CardCartProduct;
