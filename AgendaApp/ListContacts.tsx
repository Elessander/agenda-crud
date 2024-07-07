import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, FlatList, TouchableOpacity, ImageBackground } from "react-native";
import { getAllRegs, deleteContact } from './Service';
import { NavigationProp } from '@react-navigation/native';
import style from './style.module';

interface Contact {
    id: number;
    contact: string;
    phone: string;
    email: string;
    birthdate: string;
    description: string;
}

export default function ListContacts({ navigation }: { navigation: NavigationProp<any> }) {
    const [contacts, setContacts] = useState<Contact[]>([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data: Contact[] = await getAllRegs();
        setContacts(data);
    };

    const handleDeleteContact = async (id: number) => {
        await deleteContact(id);
        const updatedContacts = contacts.filter(contact => contact.id !== id);
        setContacts(updatedContacts);
    };

    return (
        <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
            <View style={styles.innerContainer}>
                <Text style={styles.header}>Lista de Contatos</Text>
                <FlatList
                    data={contacts}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <View style={styles.itemDetails}>
                                <Text style={styles.item}>ID: {item.id}</Text>
                                <Text style={styles.item}>Nome: {item.contact}</Text>
                                <Text style={styles.item}>Telefone: {item.phone}</Text>
                                <Text style={styles.item}>Email: {item.email}</Text>
                                <Text style={styles.item}>Data de Nascimento: {item.birthdate}</Text>
                                <Text style={styles.item}>Descrição: {item.description}</Text>
                            </View>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity 
                                    style={styles.editButton} 
                                    onPress={() => navigation.navigate('EditContact', { contact: item })}
                                >
                                    <Text style={styles.editButtonText}>Editar</Text>
                                </TouchableOpacity>
                                <TouchableOpacity 
                                    style={styles.deleteButton} 
                                    onPress={() => handleDeleteContact(item.id)}
                                >
                                    <Text style={styles.deleteButtonText}>Excluir</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                    ListEmptyComponent={<Text style={styles.noContactsText}>Nenhum contato encontrado.</Text>}
                />
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    innerContainer: {
        flex: 1,
        padding: 10,
        backgroundColor: 'rgba(0, 0, 0, 0.5)', 
    },
    header: {
        fontSize: 24,
        marginBottom: 10,
        textAlign: 'center',
        color: '#ffffff',
        fontWeight: 'bold',
    },
    itemContainer: {
        padding: 10,
        marginVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 8,
        elevation: 5,
    },
    itemDetails: {
        marginBottom: 10,
    },
    item: {
        fontSize: 14,
        color: '#000000',
        marginBottom: 3,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    editButton: {
        backgroundColor: '#007BFF',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
        marginRight: 5,
    },
    editButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    deleteButton: {
        backgroundColor: '#CB0A16',
        padding: 8,
        borderRadius: 4,
        alignItems: 'center',
    },
    deleteButtonText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    noContactsText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 16,
        color: '#ffffff',
    },
});

