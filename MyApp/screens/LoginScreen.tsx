import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            await auth().signInWithEmailAndPassword(email, password);
            navigation.navigate('Welcome');
        } catch (error) {
            Alert.alert('Invalid Credentials!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My App</Text>
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
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
                <Text style={styles.buttonText}>Sign In</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
                Don't have an account? Sign Up
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
    title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
    input: { width: '80%', padding: 12, borderRadius: 5, backgroundColor: '#333', color: 'white', marginBottom: 10 },
    button: { backgroundColor: '#FFC107', padding: 12, borderRadius: 5, width: '80%', alignItems: 'center' },
    buttonText: { color: '#000', fontWeight: 'bold' },
    link: { color: '#FFC107', marginTop: 10 }
});

export default LoginScreen;
