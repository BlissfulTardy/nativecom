// IMPORT React
import React, { useState } from 'react';
// IMPORT React-Native
import {
    View,
    Text,
    TextInput,
    Pressable,
    Button,
    Alert,
    StyleSheet
} from 'react-native';
// IMPORT React-Navigation
import { useNavigation } from '@react-navigation/native';
// IMPORT Firebase Auth
import { auth } from '../../services/Firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';
// IMPORT Styles
import styles from '../../../styles';

/**
 * Registration page of the application
 * @returns 
 */
const ScreenRegister = () => {
    // NAVIGATION
    const navigation = useNavigation();

    // STATE to manage user credentials
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // HANDLE Register operation
    const handleRegister = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            // Registration successful, navigate to ScreenHome or wherever needed
            navigation.navigate('ScreenHome');
        } catch (error) {
            // Registration failed, show error message
            Alert.alert('Registration Failed', error.message);
        }
    };

    // PAGE COMPOSITION
    return (
        /* CONTAINER Page */
        <View style={styles.containers.pageDefault}>

            {/* LABEL Application */}
            <Text style={styles.typography.labelHeaderDefault}>NativEcom</Text>

            {/* TEXT Welcome */}
            <Text style={styles.typography.labelTitleDefault}>Welcome Abroad!</Text>

            {/* FORM Registration */}
            <View style={styles.containers.containerDefault /* TODO: find or implement */ }>
                <TextInput
                    style={styles.input /* TODO: find or implement */ }
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                />
                <TextInput
                    style={styles.input /* TODO: find or implement */ }
                    placeholder="Password"
                    secureTextEntry
                    value={password}
                    onChangeText={setPassword}
                />
                <Button
                    title="Register"
                    onPress={handleRegister}
                />
            </View>

            {/* LINK Reset Password */}
            <Pressable onPress={() => navigation.navigate('ScreenPassword')}>
                <Text style={styles.link /* TODO: find or implement */ }>Forgot your password?</Text>
            </Pressable>
            <Text style={''}>if you forgot it</Text>
            
            {/* LINK Login */}
            <Pressable onPress={() => navigation.navigate('ScreenLogin')}>
                <Text style={styles.link /* TODO: find or implement */ }>Already have an account? Login</Text>
            </Pressable>
            <Text style={'' /* TODO: find or implement */ }>if you already belong</Text>

        </View>
    );
};

export default ScreenRegister;