import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import style from './style.module';

export default function Details({ navigation }: { navigation: NavigationProp<any> }) {
    return (
        <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>SEJA BEM-VINDO</Text>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AddContact')}>
                    <Text style={styles.buttonText}>Adicionar Contato</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ListContacts')}>
                    <Text style={styles.buttonText}>Lista de Contatos</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        padding: 20,
    },
    text: {
        color: '#fff',
        fontSize: 28,
        marginBottom: 30,
        fontWeight: 'bold',
    },
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 15,
        paddingHorizontal: 40,
        borderRadius: 10,
        marginBottom: 20,
        width: '80%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});
