import React, { useState } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import Logo from '../../assets/logo.png';
import { Input } from '../../components/inputs/input1';
import { style } from "./styles";
import { Octicons } from '@expo/vector-icons';
import { Button } from '../../components/button';
import { themes } from '../../global/themes';
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  RegisterPj: undefined;
};

const Register = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [showPassword, setShowPassword] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const [cpf, setCpf] = useState('');
  const [cnpj, setCnpj] = useState('');

  const baseURL = 'http://192.168.15.25:8080/auth/register'; // URL do backend

  // Função para registrar o usuário
  const handleRegister = async () => {
    const userData = {
      name,
      email,
      password,
      phone,
      cpf,
      cnpj: cnpj || null,
    };

    const response = await fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });

    if (!response.ok) {
      alert('Falha ao registrar. Tente novamente mais tarde.');
      return;
    }

    const result = await response.json();
    console.log(result); // Exibe o resultado no console, você pode usar para debug
    navigation.navigate('Login');
  };

  return (
    <ScrollView contentContainerStyle={style.scrollContainer}>
      <View style={style.boxTop}>
        <Image
          source={Logo}
          style={style.logo}
          resizeMode="contain"
        />
        <Text style={style.text}>Faça seu cadastro para acessar o Cligo!</Text>
        <Text style={style.textBottom}>
          Registre-se como empresa
          <Text 
            onPress={() => navigation.navigate('RegisterPj')}
            style={{ color: themes.colors.primary }}> aqui!
          </Text>
        </Text>
      </View>
      <View style={style.inputs}>
        <Input 
          value={name}
          onChangeText={setName}
          title='Nome e Sobrenome:'
        />
        <Input 
          value={cpf}
          onChangeText={setCpf}
          title='Digite seu CPF:'
        />
        <Input 
          value={phone}
          onChangeText={setPhone}
          title='Digite seu telefone:'
        />
        <Input 
          value={email}
          onChangeText={setEmail}
          title='Digite seu email:'
        />
        <Input 
          value={password}
          onChangeText={setPassword}
          title='Digite sua senha:'
          IconRight={Octicons}
          IconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
        <Input 
          value={password}
          onChangeText={setPassword}
          title='Confirme sua senha:'
          IconRight={Octicons}
          IconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
        <View style={style.Button}>
          <Button
            text="Cadastrar"
            onPress={handleRegister}
          />
        </View>  
      </View>
    </ScrollView>
  );
};

export default Register;
