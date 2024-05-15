
// IMPORT REACT
import React from 'react';

// IMPORT REACT NATIVE
import { Pressable, Text } from 'react-native';

// IMPORT STYLES
import styles from '../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';

const ButtonGridCategory = ({ item, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.clickables.buttonGridCategory,
        { 
          backgroundColor: pressed
          ? '#000277'
          : EStyleSheet.value('$colorAppPrimary'), // change on press
        }
      ]}
      onPress={() => onPress(item)}
    >
      {/* Display category name */}
      <Text style={styles.typography.labelbuttonGridCategory}>{item}</Text>
    </Pressable>
  );
};

export default ButtonGridCategory;
