
// IMPORT React
import { useState } from 'react';
// IMPORT React-Native
import { View, Text, Modal, Pressable, TextInput, ScrollView } from 'react-native';
// IMPORT Styles
import styles from '../../../styles';
// IMPORT Components
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
        {title && (
          <View>
            <Text style={styles.labelSectionDefault}>{title}</Text>
          </View>
        )}
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

      {/* SCROLLABLE CONTENT */}
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <SectionSerializerLabeled
          data={data}
          containerStyle={containerStyle}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
          horizontal={horizontal}
          showsScrollIndicator={showsScrollIndicator}
          numColumns={numColumns}
        />
      </ScrollView>
    </View>
  );
};

export default SectionSerializerSearcher;
