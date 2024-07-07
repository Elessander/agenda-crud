import React, { useState } from "react";
import { View, StyleSheet, Text, TextInput, TouchableOpacity, ImageBackground, Alert } from "react-native";
import { NavigationProp } from '@react-navigation/native';
import { addContact } from './Service';
import style from './style.module';

export default function AddContact({ navigation }: { navigation: NavigationProp<any> }) {
    const [contact, setContact] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [birthdate, setBirthdate] = useState('');
    const [description, setDescription] = useState('');

    const handleAddContact = async () => {
        const newContact = { contact, phone, email, birthdate, description };
        await addContact(newContact);
        alert('Contato salvo com sucesso!');
        navigation.navigate('Details');
    };

    return (
        <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Insira Seus Dados:</Text>
                <TextInput
                    placeholder="Nome"
                    value={contact}
                    onChangeText={setContact}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Telefone"
                    value={phone}
                    onChangeText={setPhone}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={setEmail}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Data de Nascimento"
                    value={birthdate}
                    onChangeText={setBirthdate}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Descrição"
                    value={description}
                    onChangeText={setDescription}
                    style={styles.input}
                />
                <TouchableOpacity style={styles.button} onPress={handleAddContact}>
                    <Text style={styles.buttonText}>Salvar</Text>
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
        fontSize: 24,
        marginBottom: 20,
        fontWeight: 'bold',
    },
    input: {
        width: '80%',
        borderWidth: 1,
        borderColor: '#000000',
        padding: 10,
        marginBottom: 10,
        borderRadius: 5,
        backgroundColor: '#ffffff',
    },
    button: {
        backgroundColor: '#2196F3',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginTop: 15,
        width: '40%',
        alignItems: 'center',
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
    },
});
