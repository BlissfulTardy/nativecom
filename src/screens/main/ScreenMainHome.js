
// IMPORT React
import React, { useEffect } from 'react';
// IMPORT Native
import { View, Text, FlatList, Pressable } from 'react-native';
// IMPORT Redux
import { useDispatch, useSelector } from 'react-redux';
// IMPORT API
import { fetchProducts } from '../../utils/api';
// IMPORT Action
import { setProducts } from '../../redux_store/actions/productActions';
// IMPORT Component
import CardProduct from '../../components/CardProduct';

// IMPORT Style
import styles, { screenMainHome } from '../../../styles';

// COMPONENT Home screen
const ScreenMainHome = ({ navigation }) => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      dispatch(setProducts(data));
    };
    getProducts();
  }, [dispatch]);

  const categories = [...new Set(products.map(product => product.category))];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Popular Products</Text>
      <FlatList
        data={products}
        horizontal
        renderItem={({ item }) => <CardProduct product={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
      <Text style={styles.title}>Categories</Text>
      <FlatList
        data={categories}
        numColumns={2}
        renderItem={({ item }) => (
          <Pressable
            style={styles.category}
            onPress={() => navigation.navigate('CategoryProducts', { category: item })}
          >
            <Text style={styles.categoryText}>{item}</Text>
          </Pressable>
        )}
        keyExtractor={(item) => item}
      />
    </View>
  );
};

export default ScreenMainHome;