import React, { useState } from 'react';
import Logo from '../../assets/logo.png';
import { Input } from '../../components/inputs/input1';
import { Button } from '../../components/button';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { MaterialIcons } from '@expo/vector-icons';
import { style } from './styles';
import axios from 'axios';
import { Text, Image, View, Alert, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { themes } from '../../global/themes';


type RootStackParamList = {
  Login: undefined;
  Register: undefined;
  Interesse1: undefined;
};

const Recovery = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  async function getLogin() {
      try {
          setLoading(true);

          if (!email) {
              Alert.alert('Atenção', 'Informe os campos obrigatórios!');
              setLoading(false);
              return;
          }

          const baseURL = 'http://localhost:8080/auth'; 
          console.log('Enviando:', { email });
          const response = await axios.post(`${baseURL}/login`, {
              email,
          });

          const token = response.data.token;
          const userName = response.data.name;

          if (token) {
              await AsyncStorage.setItem('userToken', token);
              Alert.alert('Logado com sucesso!', `Bem-vindo, ${userName}!`);
              navigation.navigate('Interesse1'); 
          } else {
              throw new Error('Token não encontrado');
          }

      } catch (error) {
          console.log(error);

          let errorMessage = 'Usuário não encontrado ou erro de autenticação.';
          if (axios.isAxiosError(error)) {
              errorMessage = error.response?.data?.message || errorMessage;
          }

          Alert.alert('Erro', errorMessage);
      } finally {
          setLoading(false);
      }
  }

  return (
    <ScrollView contentContainerStyle={style.container}>
        <View style={style.boxTop}>
            <Image
                source={Logo} 
                style={style.logo}
                resizeMode="contain"
            />
            <Text style={style.text}>Recuperação de senha</Text>
            <Text style={style.textDesc}>Será enviado um link de redefinição de senha!</Text>
        </View>

        <View style={style.boxMid}>
            <Input 
                value={email}
                onChangeText={setEmail}
                title='Endereço de e-mail:'
                IconRight={MaterialIcons}
                IconRightName="email"
            />
        </View>

        <View style={style.boxBottom}>
            <Button 
                text="Enviar" 
                loading={loading} 
                onPress={getLogin} 
            />
        </View>
        <Text 
            onPress={() => navigation.navigate('Interesse1')}
            style={style.textLogin}> Voltar para o Login
        </Text>    
        <Text 
            onPress={() => navigation.navigate('Register')}
            style={style.textRegister}> Crie sua conta!
        </Text>    
    </ScrollView>
  );
};

export default Recovery;
