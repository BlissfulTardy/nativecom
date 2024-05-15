
// IMPORT REACT
import React from 'react';

// IMPORT REACT NATIVE
import { Pressable, Text } from 'react-native';

// IMPORT STYLES
import styles from '../../styles';
import EStyleSheet from 'react-native-extended-stylesheet';
import { buttonGridCategory } from '../../styles';

const ButtonGridCategory = ({ item, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        buttonGridCategory.buttonGridCategory,
        { 
          backgroundColor: pressed
          ? '#000277'
          : EStyleSheet.value('$colorAppPrimary'), // change on press
        }
      ]}
      onPress={() => onPress(item)}
    >
      {/* Display category name */}
      <Text style={buttonGridCategory.labelbuttonGridCategory}>{item}</Text>
    </Pressable>
  );
};

export default ButtonGridCategory;
