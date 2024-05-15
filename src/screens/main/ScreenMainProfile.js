
// IMPORT React
import React from 'react';
// IMPORT Native
import { View, Text, Button, StyleSheet } from 'react-native';
// IMPORT Redux
import { useSelector } from 'react-redux';
// IMPORT Firebase
import { auth } from '@react-native-firebase/auth';

// IMPORT Style
import styles, { screenMainProfile } from '../../../styles';

// COMPONENT profile screen
const ScreenMainProfile = () => {
  const user = useSelector((state) => state.auth.user);

  // HANDLE logout
  const handleLogout = async () => {
    try {
      await auth().signOut();
    } catch (error) {
      console.error(error);
    }
  };

  // RENDER
  return (
    <View style={screenMainProfile.container}>
      <Text style={screenMainProfile.title}>Profile</Text>
      <Text style={screenMainProfile.email}>{user.email}</Text>
      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
};

export default ScreenMainProfile;