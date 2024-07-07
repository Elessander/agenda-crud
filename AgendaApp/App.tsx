import { NavigationContainer, NavigationProp } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { Alert, Button, ImageBackground, Image, ImageComponent, StyleSheet, Text, TextInput, View } from 'react-native';

import style from './style.module';
import Login from './Service';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { useState } from 'react';
import Details from './Details';
import AddContact from './AddContact';
import EditContact from './EditContact';
import ListContacts from './ListContacts';

function HomeScreen({ navigation }: { navigation: NavigationProp<any> }) {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const onChangeUsername = (username: any) => { setUsername(username) };
  const onchangePassword = (password: any) => { setPassword(password) };
  const login = async () => {
    const auth = await Login(username, password);
    if (auth === true) {
      navigation.navigate('Details');
    } else {
      alert('Usuário ou senha incorreto.\nPor favor contate a administrador!')
    }
  }

  return (
    <SafeAreaProvider>
      <ImageBackground source={require('./assets/background.jpg')} style={style.container}>
        <View style={style.container}>
          <Image source={require('./assets/userIcon.png')} style={style.icon} />
          <Text style={style.text}>Login:</Text>
          <TextInput
            placeholder="Usuário"
            placeholderTextColor='#ffffff'
            style={style.input}
            value={username}
            onChangeText={onChangeUsername}
          />
          <Text style={style.text}>Senha:</Text>
          <TextInput
            placeholder="Senha"
            placeholderTextColor='#ffffff'
            style={style.input}
            value={password}
            onChangeText={onchangePassword}
          />
          <Button title='Acessar' onPress={login} style={style.button} />
          <Image source={require('./assets/logo_space.png')} style={style.logo} />
          <Text></Text>
        </View>
      </ImageBackground>
    </SafeAreaProvider>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={Details} />
        <Stack.Screen name="AddContact" component={AddContact} />
        <Stack.Screen name="EditContact" component={EditContact} />
        <Stack.Screen name="ListContacts" component={ListContacts} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
