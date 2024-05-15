
// IMPORT REACT
import React from 'react';

//IMPORT REACT NATIVE
import { View, Text, Image, Pressable } from 'react-native';

// IMPORT STYLES
import styles from '../../styles';

// IMPORT IONICONS
import Icon from 'react-native-vector-icons/FontAwesome'

// COMPONENT RENDER FUNCTION
const CardProduct = ({ item, onPress, onIncrease, onDecrease }) => {
  return (
    // HANDLES HANDLING APPROPRIATE ONPRESS HANDLER AS A FUNCTION PARAMETER
    <Pressable onPress={onPress} style={styles.containers.CardProduct}>
      {/* PRODUCT IMAGE */}
      <Image source={{ uri: item.image }} style={styles.visuals.imageCartProduct} />
      {/* PRODUCT NAME */}
      <Text style={styles.typography.nameCartProduct} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
      {/* PRODUCT DESCRIPTION */}
      <Text style={styles.typography.descriptionCartProduct} numberOfLines={3} ellipsizeMode="tail">
        {item.description}
      </Text>
      {/* PRODUCT CATEGORY */}
      <Text style={styles.typography.categoryCartProduct}>
        {item.category}
      </Text>
      {/* PRODUCT PRICE */}
      <Text style={styles.typography.priceCartProduct}>${item.price}</Text>
    </Pressable>
  );
};

export default CardProduct;
