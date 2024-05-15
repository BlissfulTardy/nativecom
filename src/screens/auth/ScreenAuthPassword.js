
// IMPORT React
import React, { useState } from 'react';
// IMPORT Native
import { View, Text, TextInput, Button } from 'react-native';
// IMPORT Firebase
import { auth } from '../../services/Firebase';

// IMPORT Style
import styles, { screenAuthPassword } from '../../../styles';

//COMPONENT Reset password screen
const ScreenAuthPassword = ({ navigation }) => {

    // STATE email
    const [email, setEmail] = useState('');

    // STATE track reset errror
    const [error, setError] = useState('');
  
    const handleResetPassword = async () => {
      try {
        await auth().sendPasswordResetEmail(email);
        alert('Password reset email sent!');
        navigation.navigate('Login');
      } catch (error) {
        setError(error.message);
      }
    };
  
    // RENDER
    return (
      <View style={screenAuthPassword.container}>
        <TextInput
          style={screenAuthPassword.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <Button title="Reset Password" onPress={handleResetPassword} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  };

export default ScreenAuthPassword;