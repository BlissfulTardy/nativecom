
/**
 * A common implementation for an arbitrary section intended to be
 * included within the flow of any application page layout which
 * should display a set of data instances with visual representations,
 * 
 * in addition to the labeled predecessor, this section is further
 * advanced in terms of component complexity, including a searchbar,
 * as well as the capability of performing search and filter operations
 * onto its handled dataset of items
 */

// IMPORT REACT
import React, { useState } from 'react';

// IMPORT REACT NATIVE
import { View, Text, Modal, Pressable, TextInput, ScrollView } from 'react-native';

// IMPORT STYLE
import styles from '../../../styles';

// IMPORT COOMPONENTS
import SectionSerializerLabeled from './SectionSerializerLabeled';

const SectionSerializerSearcher = ({ title, data, containerStyle, renderItem, keyExtractor, horizontal = true, showsScrollIndicator = false, numColumns = 1 }) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [searchText, setSearchText] = useState('');

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const clearFilters = () => {
    setSearchText('');
    // Add logic to clear other filters if needed
  };

  const handleSearch = () => {
    // Add logic to perform search based on searchText
  };

  return (
    /* SECTION CONTAINER */
    <View style={styles.sectionDefault}>

      {/* SECTION TITLE */}
      <View>
        { title &&
          (
            <View>
              <Text style={styles.labelSectionDefault}>{title}</Text>
            </View>
          )
        }
      </View>

      {/* SEARCHBAR */}
      <View style={styles.componentSerializerSearcher}>
        <View style={styles.searchbarSerializerSearcher}>
          <TextInput
            style={styles.inputSearchbarSerializerSearcher}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search for an item..."
          />
        </View>
        <View style={styles.containerSerializerSearcherButtonsSearchbar}>
          <Pressable onPress={toggleModal} style={styles.buttonFilter}>
            <Text>Filter</Text>
          </Pressable>
          <Pressable onPress={clearFilters} style={styles.buttonClear}>
            <Text>Clear</Text>
          </Pressable>
          <Pressable onPress={handleSearch} style={styles.buttonSearch}>
            <Text>Search</Text>
          </Pressable>
        </View>
      </View>

      {/* MODAL FOR FILTERING */}
      <View>
        <Modal
          animationType="slide"
          transparent={true}
          visible={isModalVisible}
          onRequestClose={toggleModal}
        >
          <View style={styles.containerModal}>
            {/* TODO: IMPLEMENT MODAL CONTENT */}
            <Pressable onPress={toggleModal} style={styles.buttonCloseModal}>
              <Text>Close</Text>
            </Pressable>
          </View>
        </Modal>
      </View>

    {/* NESTED SERIALIZER DISPLAYING FILTERED ITEMS */}
      <SectionSerializerLabeled
        data={data}
        containerStyle={containerStyle}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        horizontal={horizontal}
        showsScrollIndicator={showsScrollIndicator}
        numColumns={numColumns}
      />

    </View>
  );
};

export default SectionSerializerSearcher;
