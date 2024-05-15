
// IMPORT React
import React, { useState, useEffect } from 'react';
// IMPORT Native
import { View, Text, TextInput, Button, FlatList } from 'react-native';
// IMPORT Redux
import { useDispatch, useSelector} from 'react-redux';
// IMPORT API
import { fetchProducts } from '../../utils/api';
//IMPRT Actions
import { setProducts } from '../../redux_store/actions/productActions';
// IMPORT Components
import CardProduct from '../../components/CardProduct';
import FilterModal from '../../components/FilterModal';

// IMPORT Style
import styles, { screenMainSearch } from '../../../styles';

// COMPONENT Search screen
const ScreenMainSearch = () => {

  // STATE Search quest and filtered results
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredResults, setFilteredResults] = useState([]);

  // STATE filter category and modal flag
  const [isModalVisible, setModalVisible] = useState(false);
  const [filterCategory, setFilterCategory] = useState('');

  // DISPATCH actions
  const dispatch = useDispatch();
  // SELECT products
  const products = useSelector((state) => state.products);

  // COLLECT data
  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      dispatch(setProducts(data));
    };
    getProducts();
  }, [dispatch]);

  // UPDATE results per iterations on search query
  useEffect(() => {
    let results = products;
    if (searchQuery) {
      results = results.filter(product =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (filterCategory) {
      results = results.filter(product => product.category === filterCategory);
    }
    setFilteredResults(results);
  }, [searchQuery, filterCategory, products]);

  // RENDER
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search Products</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search..."
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <Button title="Clear" onPress={() => setSearchQuery('')} />
        <Button title="Filter" onPress={() => setModalVisible(true)} />
      </View>
      <FilterModal
        visible={isModalVisible}
        onClose={() => setModalVisible(false)}
        onApply={(category) => setFilterCategory(category)}
      />
      <FlatList
        data={filteredResults}
        numColumns={2}
        renderItem={({ item }) => <CardProduct product={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.resultsContainer}
      />
    </View>
  );
};

export default ScreenMainSearch;