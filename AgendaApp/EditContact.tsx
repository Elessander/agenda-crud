import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { updateContact } from './Service';
import style from './style.module';

export default function EditContact({ route, navigation }: any) {
    const { contact } = route.params;

    const [name, setName] = useState(contact.contact);
    const [phone, setPhone] = useState(contact.phone);
    const [email, setEmail] = useState(contact.email);
    const [birthdate, setBirthdate] = useState(contact.birthdate);
    const [description, setDescription] = useState(contact.description);

    const handleUpdateContact = async () => {
        const updatedContact = {
            id: contact.id,
            contact: name,
            phone: phone,
            email: email,
            birthdate: birthdate,
            description: description,
        };

        await updateContact(updatedContact);
        alert("Contato atualizado com sucesso!");
        navigation.navigate('Details');
    };

    return (
        <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.text}>Editar Contato:</Text>
                <TextInput
                    placeholder="Nome"
                    value={name}
                    onChangeText={setName}
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
                <TouchableOpacity style={styles.button} onPress={handleUpdateContact}>
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
