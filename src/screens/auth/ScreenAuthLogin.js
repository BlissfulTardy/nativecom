
// IMPORT React
import React, {useState } from 'react';
// IMPORT Native
import { View, Text, TextInput, Button } from 'react-native';
// IMPORT Firebase
import { auth } from '../../services/Firebase';

// IMPORT Style
import styles, { screenAuthLogin } from '../../../styles';

// COMPONENT Login screen
const ScreenAuthLogin = ({ navigation }) => {

  // STATE login email and password
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // STATE track login error
  const [error, setError] = useState('');

  // HANDLE login request
  const handleLogin = async () => {
    try {
      await auth().signInWithEmailAndPassword(email, password);
      navigation.navigate('Main'); // TODO: fix if doesn't rute
    } catch (error) {
      setError(error.message);
    }
  };

  // RENDER
  return (
    <View style={styles.container}>
      {error ? <Text style={styles.errorText}>{error}</Text> : null}
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login" onPress={handleLogin} />
      <Button title="Register" onPress={() => navigation.navigate('Register')} />
      <Button title="Forgot Password?" onPress={() => navigation.navigate('ResetPassword')} />
    </View>
  );
};

export default ScreenAuthLogin;