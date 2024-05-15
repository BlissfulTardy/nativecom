
// IMPORT REACT
import React from 'react';

//IMPORT REACT NATIVE
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';

// IMPORT STLES
import styles from '../../styles';


// COMPONENT RENDER FUNCTION
const CardSliderProduct = ({ item, onPress }) => {
  return (
    <Pressable onPress={onPress} style={styles.containers.cardSliderProduct}>
      {/* PRODUCT IMAGE */}
      <Image source={{ uri: item.image }} style={styles.visuals.imageCardSliderProduct} />
      {/* PRODUCT NAME */}
      <Text style={styles.typography.nameCardSliderProduct}
        numberOfLines={3}
        ellipsizeMode="tail"
      >
        {item.title}
      </Text>
      {/* PRODUCT NAME */}
      <Text style={styles.typography.categoryCardSliderProduct}>
        {item.category}
      </Text>
      {/* PRODUCT PRICE */}
      <Text style={styles.typography.priceCardSliderProduct}>${item.price}</Text>
    </Pressable>
  );
};

export default CardSliderProduct;
