import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

const SignUpScreen = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await auth().createUserWithEmailAndPassword(email, password);
            navigation.replace('Login');
        } catch (error) {
            Alert.alert('Error!');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My App</Text>
            <TextInput style={styles.input} placeholder="Name" value={name} onChangeText={setName} />
            <TextInput style={styles.input} placeholder="Email Address" value={email} onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Password" secureTextEntry value={password} onChangeText={setPassword} />
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
                <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <Text onPress={() => navigation.navigate('Login')} style={styles.link}>
                Have an account? Sign In
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

export default SignUpScreen;
