
// IMPORT React
import React, { useEffect } from 'react';
// IMPORT Native
import { View, Text, FlatList, StyleSheet } from 'react-native';
// IMPORT Redux
import { useDispatch, useSelector } from 'react-redux';
// IMPORT API
import { fetchProducts } from '../../utils/api';
// IMPORT Actions
import { setProducts } from '../../redux_store/actions/productActions';
// IMPORT Compoennts
import CardProduct from '../../components/CardProduct';

// IMPPRT Style
import styles, { screenCategoryProducts } from '../../../styles';

// COMPONENT displaying products of an arbitrary selected category
const ScreenCategoryProducts = ({ route }) => {

  // COLLECT category instance per route
  const { category } = route.params;
  // DISPATCH actions
  const dispatch = useDispatch();
  // SELECTOR products
  const products = useSelector((state) => state.products);

  // COLLECT data
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      dispatch(setProducts(data));
    };
    getProducts();
  }, [dispatch]);

  // FILTER products per selected category
  const categoryProducts = products.filter(product => product.category === category);

  // RENDER
  return (
    <View style={screenCategoryProducts.container}>
      <Text style={screenCategoryProducts.title}>{category}</Text>
      <FlatList
        data={categoryProducts}
        renderItem={({ item }) => <CardProduct product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default ScreenCategoryProducts;