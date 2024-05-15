
// IMPORT REACT
import React, { useState } from 'react';
// IMPORT RNative
import { View, Text, Button, Modal, StyleSheet, Pressable } from 'react-native';
// IMPORT Style
import styles, { filterModal } from '../../styles';

// COMPONENT modal for filter behaviour interfacing
const FilterModal = ({ visible, onClose, onApply }) => {

  // STATE currently selected category
  const [selectedCategory, setSelectedCategory] = useState('');

  // HANDLE filter applcation
  const handleApply = () => {
    onApply(selectedCategory);
    onClose();
  };

  // RENDER
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={filterModal.modalView}>
        <Text style={filterModal.modalText}>Filter By Category</Text>
        <Pressable onPress={() => setSelectedCategory('Electronics')} style={filterModal.filterOption}>
          <Text>Electronics</Text>
        </Pressable>
        <Pressable onPress={() => setSelectedCategory('Fashion')} style={filterModal.filterOption}>
          <Text>Fashion</Text>
        </Pressable>
        {/* Add more categories as needed */}
        <Button title="Apply" onPress={handleApply} />
      </View>
    </Modal>
  );
};

export default FilterModal;