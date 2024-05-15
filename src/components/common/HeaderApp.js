
// IMPORT React
import React from 'react';
// IMPORT React-Native
import { View, Text } from 'react-native';
// IMPRT Styles
import styles from '../../../styles';

/**
 * Fixed universal header of the application
 */
const HeaderApp = () => {
  return (
    <View style={styles.containers.headerDefault}>
        <Text style={styles.typography.labelHeaderDefault}>NativEcom</Text>
    </View>
  )
}

export default HeaderApp