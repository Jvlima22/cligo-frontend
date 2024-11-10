import React, { useState } from "react";
import { Text, Image, View, Alert, ScrollView } from 'react-native';
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";
import axios from 'axios';
import { Input } from "../../components/inputs/input1";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from "../../components/button";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Register: undefined;
    Recovery: undefined;
    Interesse1: undefined;
};

export default function Login() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true);

            if (!email || !password) {
                Alert.alert('Atenção', 'Informe os campos obrigatórios!');
                setLoading(false);
                return;
            }

            const baseURL = 'http://192.168.15.25:8080/auth'; 
            console.log('Enviando:', { email, password });
            const response = await axios.post(`${baseURL}/login`, {
                email,
                password,
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
                <Text style={style.text}>Faça login para acessar sua conta!</Text>
            </View>

            <View style={style.boxMid}>
                <Input 
                    value={email}
                    onChangeText={setEmail}
                    title='Endereço de e-mail:'
                    IconRight={MaterialIcons}
                    IconRightName="email"
                />
                <Input 
                    value={password}
                    onChangeText={setPassword}
                    title='Senha:'
                    IconRight={Octicons}
                    IconRightName={showPassword ? "eye-closed" : "eye"}
                    secureTextEntry={showPassword}
                    onIconRightPress={() => setShowPassword(!showPassword)}
                />        
                <Text
                    onPress={() => navigation.navigate('Recovery')}
                    style={{ color: themes.colors.primary }}> Esqueceu a senha?
                </Text>
            </View>

            <View style={style.boxBottom}>
                <Button 
                    text="Entrar" 
                    loading={loading} 
                    onPress={getLogin} 
                />
            </View>
            <Text style={style.textBottom}>
                Não tem conta? 
                <Text 
                    onPress={() => navigation.navigate('Register')}
                    style={{ color: themes.colors.primary }}> Crie agora!
                </Text>
            </Text>
        </ScrollView>
    );
}
