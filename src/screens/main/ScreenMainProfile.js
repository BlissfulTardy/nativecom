
// IMPORT REACT
import React from 'react';
import { View, Text, Pressable } from 'react-native';

// IMPORT NAVGATION
import { useNavigation } from '@react-navigation/native';

// IMPORT STYLES
import styles from '../../../styles';

const ScreenMainProfile = () => {

  // Navigation instance
  const navigation = useNavigation();

  // Navigate to User Information screen
  const goToUserInfo = () => {
    navigation.navigate('ScreenAppUserInfo');
  };

  // Navigate to Delivery Address screen
  const goToAddress = () => {
    navigation.navigate('ScreenAppAddress');
  };

  // Navigate to Payment Methods screen
  const goToPaymentMethods = () => {
    navigation.navigate('ScreenAppMethods');
  };

  // Navigate to Receipts screen
  const goToReceipts = () => {
    navigation.navigate('ScreenAppReceipts');
  };

  // COMPONENT COMPOSITION
  return (

    // PAGE CONTAINER
    <View style={styles.pageCentered}>

      {/* Username/Email */}
      <Text style={styles.labelLoggedUser}>Logged in as: example@example.com</Text>

      {/* PROFILE MENU ITEMS */}
      <View style={styles.menuProfile}>
        {/* USER INFORMATION */}
        <Pressable onPress={goToUserInfo} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>User Information</Text>
        </Pressable>

        {/* DELIVERY ADDRESSES */}
        <Pressable onPress={goToAddress} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>Delivery Address</Text>
        </Pressable>

        {/* PAYMENT METHODS */}
        <Pressable onPress={goToPaymentMethods} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>Payment Methods</Text>
        </Pressable>

        {/* RECEIPTS */}
        <Pressable onPress={goToReceipts} style={styles.itemMenuProfile}>
          <Text style={styles.textItemMenuProfile}>Receipts</Text>
        </Pressable>

      </View>

    </View>
  );
};

export default ScreenMainProfile;
