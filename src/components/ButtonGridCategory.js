
// IMPORT REACT
import React from 'react';

// IMPORT REACT NATIVE
import { Pressable, Text } from 'react-native';

// IMPORT STYLES
import styles from '../../styles';

const ButtonGridCategory = ({ item, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonGridCategories,
        { 
          backgroundColor: pressed ? '#000277' : '#007bff', // change on press
        }
      ]}
      onPress={() => onPress(item)}
    >
      {/* Display category name */}
      <Text style={styles.labelButtonGridCategories}>{item}</Text>
    </Pressable>
  );
};

export default ButtonGridCategory;
