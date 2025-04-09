import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import auth from '@react-native-firebase/auth';

const ProfileScreen = ({ navigation }) => {
    const handleLogout = async () => {
        await auth().signOut();
        navigation.replace('Login');
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>My App</Text>
            <Text style={styles.text}>Name: Example Application</Text>
            <Text style={styles.text}>Email: example@app.com</Text>
            <TouchableOpacity onPress={handleLogout} style={styles.button}>
                <Text style={styles.buttonText}>Log out</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
    title: { fontSize: 24, fontWeight: 'bold', color: 'white', marginBottom: 20 },
    text: { color: 'white', fontSize: 18, marginBottom: 10 },
    button: { backgroundColor: '#FFC107', padding: 12, borderRadius: 5 },
    buttonText: { color: '#000', fontWeight: 'bold' }
});

export default ProfileScreen;