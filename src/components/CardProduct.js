
// IMPORT REACT
import React from 'react';

//IMPORT REACT NATIVE
import { View, Text, Image, Pressable } from 'react-native';

// IMPORT STYLES
import styles from '../../styles';
import { cardProduct } from './../../styles';

// IMPORT IONICONS
import Icon from 'react-native-vector-icons/FontAwesome'

// COMPONENT RENDER FUNCTION
const CardProduct = ({ item, onPress, onIncrease, onDecrease }) => {
  return (
    // HANDLES HANDLING APPROPRIATE ONPRESS HANDLER AS A FUNCTION PARAMETER
    <Pressable onPress={onPress} style={cardProduct.cardProduct}>
      {/* PRODUCT IMAGE */}
      <Image source={{ uri: item.image }} style={cardProduct.imageCardProduct} />
      {/* PRODUCT NAME */}
      <Text style={cardProduct.nameCardProduct} numberOfLines={2} ellipsizeMode="tail">
        {item.title}
      </Text>
      {/* PRODUCT DESCRIPTION */}
      <Text style={cardProduct.descriptionCardProduct} numberOfLines={3} ellipsizeMode="tail">
        {item.description}
      </Text>
      {/* PRODUCT CATEGORY */}
      <Text style={cardProduct.categoryCardProduct}>
        {item.category}
      </Text>
      {/* PRODUCT PRICE */}
      <Text style={cardProduct.priceCardProduct}>${item.price}</Text>
    </Pressable>
  );
};

export default CardProduct;
