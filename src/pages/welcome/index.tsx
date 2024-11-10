import React from 'react';
import { View, Text, Image } from 'react-native';
import { style } from './styles';
import Logo from '../../assets/logo.png';
import { Button } from "../../components/button";
import { NavigationProp, useNavigation } from '@react-navigation/native';

type RootStackParamList = {
    Home: undefined;
};  

  const Welcome = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={style.container}>
        <View style={style.boxTop}>
            <Image
                source={Logo} 
                style={style.logo}
                resizeMode="contain"
            />
        </View>
        <View style={style.boxBottom}>
            <Text style={style.text}>Seja bem-vindo(a) ao Cligo!</Text>
            <Text style={style.subText}>As melhores experiência a um clique de distância de você!</Text>
            <Button
                text="Acessar"
                onPress={() => navigation.navigate('Home')}
            />
        </View>
      </View>
  );
};

export default Welcome;
