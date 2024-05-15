
// IMPORT React
import React from 'react';
// Import React-Native
import { View, Text, Pressable } from 'react-native';
// Import React Navigation
import { useNavigation } from '@react-navigation/native';
// Import Styles
import styles from '../../../styles';

const ScreenMainProfile = () => {
  
  const navigation = useNavigation();

  return (
    <View style={
      [
        styles.containers.pageTabs,
        styles.containers.pageCentered,
      ]
    }>
      <Text style={styles.typography.labelLoggedUser}>Logged in as: example@example.com</Text>

      <View style={styles.procedurals.menuProfile}>
        <Pressable onPress={() => navigation.navigate('ScreenUserinfo')} style={styles.procedurals.itemMenuProfile}>
          <Text style={styles.procedurals.textItemMenuProfile}>User Information</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenDeliveryAddresses')} style={styles.procedurals.itemMenuProfile}>
          <Text style={styles.procedurals.textItemMenuProfile}>Delivery Address</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenPaymentMethods')} style={styles.procedurals.itemMenuProfile}>
          <Text style={styles.procedurals.textItemMenuProfile}>Payment Methods</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenReceipts')} style={styles.procedurals.itemMenuProfile}>
          <Text style={styles.procedurals.textItemMenuProfile}>Receipts</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScreenMainProfile;
