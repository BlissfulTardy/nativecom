
// IMPORT React
import React, { useState } from 'react';
// IMPORT React-Native
import {
    View,
    Text,
    TextInput,
    Button,
    Pressable
} from 'react-native';
// IMPORT React-Navigation
import { useNavigation } from '@react-navigation/native';
// IMPORT Firebase Auth
import { auth } from '../../services/Firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
// IMPORT Styles
import styles from '../../../styles';

/**
 * Login screen of the application
 * @returns
 */
const ScreenLogin = () => {
    // NAVIGATION
    const navigation = useNavigation();

    // STATE to manage user credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // HANDLE login operation
    const handleLogin = async () => {
        try {
            // Firebase authentication
            await signInWithEmailAndPassword(auth, email, password);
            // Navigate to home screen upon successful login
            navigation.navigate('ScreenHome');
        } catch (error) {
            // Handle login error
            console.error('Login Error:', error);
            // Alert or display error message to the user
        }
    };

    // PAGE COMPOSITION
    return (
        /* CONTAINER Page */
        <View style={styles.pageDefault}>

            {/* LABEL Application */}
            <Text style={styles.labelHeaderDefault}>NativEcom</Text>

            {/* TEXT Welcome Message */}
            <Text style={styles.labelTitleDefault}>Welcome, User!</Text>

            {/* FORM Login */}
            <View style={styles.container}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={setPassword}
                    style={styles.input}
                    secureTextEntry
                />
                <Button title="Login" onPress={handleLogin} />
            </View>

            {/* LINK Reset Password */}
            <Pressable onPress={() => navigation.navigate('ScreenPassword')}>
                <Text style={styles.link}>Forgot your password?</Text>
            </Pressable>
            <Text style={''}>if you forgot it</Text>

            {/* LINK Registration */}
            <Pressable onPress={() => navigation.navigate('ScreenRegister')}>
                <Text style={styles.link}>Register here and now</Text>
            </Pressable>
            <Text style={''}>if you're new here</Text>

        </View>
    );
};

export default ScreenLogin;