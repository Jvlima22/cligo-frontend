import React, { useState } from 'react';
import { ScrollView, Image, Text, View } from 'react-native';
import Logo from '../../assets/logo.png';
import { Input } from '../../components/inputs/input1';
import { Octicons } from '@expo/vector-icons';
import { Button } from '../../components/button';
import { themes } from '../../global/themes';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { style } from '../register/styles';

type RootStackParamList = {
  Welcome: undefined;
  Home: undefined;
  Login: undefined;
  Register: undefined;
  RegisterPj: undefined
};

const RegisterPj = () => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const [showPassword, setShowPassword] = useState(true);
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [telefone, setTelefone] = useState('');
  const [cnpj, setCnpj] = useState(''); // CNPJ

  const checkEmailExists = async (email: string) => {
    try {
      const response = await fetch(`http://localhost:8080/auth/check-email?email=${email}`);
      const emailExists = await response.json();
      if (emailExists) {
        alert('Email já cadastrado!');
      } else {
        handleRegister();
      }
    } catch (error) {
      console.error('Erro ao verificar email:', error);
    }
  };

  const handleRegister = async () => {
    const userData = {
      nome,
      email,
      senha,
      telefone,
      cnpj,
    };

    try {
      const response = await fetch('http://localhost:8080/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        throw new Error('Falha ao registrar');
      }

      const result = await response.json();
      console.log(result);
      navigation.navigate('Login');
    } catch (error) {
      console.error(error);
    }
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
      </View>
      <View style={style.inputs}>
        <Input 
          value={nome}
          onChangeText={setNome}
          title='Nome da Empresa [LTDA]:'
        />
        <Input 
          value={cnpj}
          onChangeText={setCnpj}
          title='Digite seu CNPJ:' 
        />
        <Input 
          value={telefone}
          onChangeText={setTelefone}
          title='Digite seu telefone:'
        />
        <Input 
          value={email}
          onChangeText={setEmail}
          title='Digite seu email:'
        />
        <Input 
          value={senha}
          onChangeText={setSenha}
          title='Digite sua senha:'
          IconRight={Octicons}
          IconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
        <Input 
          value={senha}
          onChangeText={setSenha}
          title='Confirme sua senha:'
          IconRight={Octicons}
          IconRightName={showPassword ? "eye-closed" : "eye"}
          secureTextEntry={showPassword}
          onIconRightPress={() => setShowPassword(!showPassword)}
        />
        <View style={style.Button}>
          <Button
            text="Cadastrar"
            onPress={() => checkEmailExists(email)}
          />
        </View>  
      </View>
    </ScrollView>
  );
};

export default RegisterPj;
