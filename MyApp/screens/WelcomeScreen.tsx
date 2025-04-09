import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Characters list goes here!</Text>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')} style={styles.button}>
                <Text style={styles.buttonText}>Go to Profile</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#121212' },
    text: { color: 'white', fontSize: 18 },
    button: { backgroundColor: '#FFC107', padding: 12, borderRadius: 5, marginTop: 20 },
    buttonText: { color: 'black', fontWeight: 'bold' }
});

export default WelcomeScreen;