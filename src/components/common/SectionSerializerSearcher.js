
// IMPORT React
import { useState } from 'react';
// IMPORT React-Native
import { View, Text, Modal, Pressable, TextInput, ScrollView } from 'react-native';
// IMPORT Styles
import styles from '../../../styles';
import { sectionSerializerSearcher } from '../../../styles';
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
    <View style={styles.containers.sectionDefault}>
      {/* SECTION TITLE */}
      <View>
        {title && (
          <View>
            <Text style={styles.typography.labelSectionDefault}>{title}</Text>
          </View>
        )}
      </View>

      {/* SEARCHBAR */}
      <View style={sectionSerializerSearcher.componentSerializerSearcher}>
        <View style={sectionSerializerSearcher.searchbarSerializerSearcher}>
          <TextInput
            style={sectionSerializerSearcher.inputSearchbarSerializerSearcher}
            value={searchText}
            onChangeText={setSearchText}
            placeholder="Search for an item..."
          />
        </View>
        <View style={sectionSerializerSearcher.containerSerializerSearcherButtonsSearchbar}>
          <Pressable onPress={toggleModal} style={sectionSerializerSearcher.buttonFilter}>
            <Text>Filter</Text>
          </Pressable>
          <Pressable onPress={clearFilters} style={sectionSerializerSearcher.buttonClear}>
            <Text>Clear</Text>
          </Pressable>
          <Pressable onPress={handleSearch} style={sectionSerializerSearcher.buttonSearch}>
            <Text>Search</Text>
          </Pressable>
        </View>

        {/* MODAL FOR FILTERING */}
        <View>
          <Modal
            animationType="slide"
            transparent={true}
            visible={isModalVisible}
            onRequestClose={toggleModal}
          >
            <View style={sectionSerializerSearcher.containerModal}>
              {/* TODO: IMPLEMENT MODAL CONTENT */}
              <Pressable onPress={toggleModal} style={sectionSerializerSearcher.buttonCloseModal}>
                <Text>Close</Text>
              </Pressable>
            </View>
          </Modal>
        </View>

      </View>

      {/* SCROLLABLE CONTENT */}
      <ScrollView showsVerticalScrollIndicator={false}>
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
