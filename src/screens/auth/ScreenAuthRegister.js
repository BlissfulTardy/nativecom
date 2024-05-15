
// IMPORT React
import React, { useState } from 'react';
// IMPORT Native
import { View, Text, Button, TextInput } from 'react-native';
// IMPORT Firebase
import { auth } from '../../services/Firebase';

// IMPORT Style
import styles, { screenAuthRegister } from '../../../styles';

// COMPONENT User registyr screen
const ScreenAuthRegister = ({ navigation }) => {

    // STATE email and apssword
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // STATE track login error
    const [error, setError] = useState('');
  
    const handleRegister = async () => {
      try {
        await auth().createUserWithEmailAndPassword(email, password);
        navigation.navigate('Main'); // Navigate to the main app
      } catch (error) {
        setError(error.message);
      }
    };
  
    // RENDER
    return (
      <View style={screenAuthRegister.container}>
        <TextInput
          style={screenAuthRegister.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
        />
        <TextInput
          style={screenAuthRegister.input}
          placeholder="Password"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <Button title="Register" onPress={handleRegister} />
        <Button title="Login" onPress={() => navigation.navigate('Login')} />
      </View>
    );
  };

export default ScreenAuthRegister;