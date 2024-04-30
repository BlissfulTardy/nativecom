
/**
 * A common implementation for an arbitrary section intended to be
 * included within the flow of any application page layout which
 * should display a set of data instances with visual representations
 */

// IMPORT REACT
import React from 'react';

// IMPORT REACT NATIVE
import { View, Text, FlatList } from 'react-native';

// IMPORT STYLE
import styles from '../../../styles';

// A SECTION WITHIN CONTAINMENT WITH A TITLE AND AN ARBITRARY STYLED CONTAINER
const SectionSerializerLabeled = ({ title, data, containerStyle, renderItem, keyExtractor, horizontal = true, showsScrollIndicator = false, numColumns = 1 }) => {
  return (
    /* SECTION CONTAINER */
    <View style={styles.sectionDefault}>
      
      {/* SECTION TITLE */}
      { title &&
        (
          <Text style={styles.labelSectionDefault}>{title}</Text>
        )
      }

      {/* SLIDER CONTAINER */}
      <View style={styles[containerStyle]}>
        <FlatList
          horizontal={horizontal}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={renderItem}
          showsHorizontalScrollIndicator={showsScrollIndicator}
          numColumns={numColumns}
        />
      </View>

    </View>
  );
};

export default SectionSerializerLabeled;
