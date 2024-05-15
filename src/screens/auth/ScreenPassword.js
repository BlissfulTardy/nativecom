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
import { sendPasswordResetEmail } from 'firebase/auth';
// IMPORT Styles
import styles from '../../../styles';

/**
 * Password reset page of the application
 * @returns 
 */
const ScreenPassword = () => {
    // STATE to manage user credentials
    const navigation = useNavigation();
    const [email, setEmail] = useState('');

    // HANDLE Password reset
    const handleResetPassword = async () => {
        try {
            await sendPasswordResetEmail(auth, email);
            // Password reset email sent successfully
            Alert.alert('Password Reset', 'Check your email for password reset instructions.');
            // Navigate to ScreenLogin or wherever needed
            navigation.navigate('ScreenLogin');
        } catch (error) {
            // Password reset failed, show error message
            Alert.alert('Password Reset Failed', error.message);
        }
    };

    // PAGE COMPOSITION
    return (
        // CONTAINER Page
        <View style={styles.containers.pageDefault}>

            {/* LABEL Application */}
            <Text style={styles.typography.labelHeaderDefault}>NativEcom</Text>

            {/* FORM Reset Password */}
            <Text style={styles.typography.labelTitleDefault}>Forgot Your Password?</Text>
            <Text style={styles.typography.labelSectionDefault}>Enter your email address below to reset your password.</Text>
            <TextInput
                style={styles.input /* TODO: find or implement */ }
                placeholder="Email"
                value={email}
                onChangeText={setEmail}
            />
            <Button
                title="Reset Password"
                onPress={handleResetPassword}
            />

            {/* LINK Login */}
            <Pressable onPress={() => navigation.navigate('ScreenLogin')}>
                <Text style={styles.link /* TODO: find or implement */ }>Already have an account? Login</Text>
            </Pressable>
            <Text style={'' /* TODO: find or implement */ }>if you already belong</Text>

            {/* LINK Registration */}
            <Pressable onPress={() => navigation.navigate('ScreenRegister')}>
                <Text style={styles.link /* TODO: find or implement */ }>Register here and now</Text>
            </Pressable>
            <Text style={'' /* TODO: find or implement */ }>if you're new here</Text>

        </View>
    );
};

export default ScreenPassword;