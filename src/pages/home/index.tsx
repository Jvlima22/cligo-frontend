import React from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation, NavigationProp } from '@react-navigation/native';
import { style } from './styles';
import { Button } from "../../components/button";
import Logo from '../../assets/pngegg.png'

type RootStackParamList = {
  Login: undefined;
  Register: undefined;
};

const Home = () => {
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
        <Text style={style.text}>
          Mantenha-se atualizado sobre as melhores experiências ao seu redor conosco.
        </Text>
        <Text style={style.subText}>
          Recomendamos os melhores lugares para você, de acordo com suas preferências.
        </Text>
        <View style={style.buttonRegister}>
          <Button 
            text="Cadastre-se" 
            onPress={() => navigation.navigate('Register')} 
          />
        </View>
        <View style={style.buttonLogin}>
          <Button
              text="Login"
              onPress={() => navigation.navigate('Login')}
          />
        </View>
      </View>
    </View>
  );
};

export default Home;
