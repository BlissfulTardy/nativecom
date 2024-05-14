
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
    <View style={styles.pageCentered}>
      <Text style={styles.labelLoggedUser}>Logged in as: example@example.com</Text>

      <View style={styles.menuProfile}>
        <Pressable onPress={() => navigation.navigate('ScreenUserinfo')} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>User Information</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenDeliveryAddresses')} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>Delivery Address</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenPaymentMethods')} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>Payment Methods</Text>
        </Pressable>

        <Pressable onPress={() => navigation.navigate('ScreenReceipts')} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>Receipts</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default ScreenMainProfile;
