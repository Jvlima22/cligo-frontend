// TopRectangle.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { AntDesign, FontAwesome, Octicons } from '@expo/vector-icons'; // Pacote de ícones
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ButtonBack } from '../buttonBack';

type RootStackParamList = {
    Cardapio: undefined;
    Chat: undefined;
    Avaliacoes: undefined;
    Mapa: undefined;
    Explorer: undefined;
    Config: undefined;
};

const TopProfileUs = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.top}>
          <View style={styles.buttonBack}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Explorer')}
            />
          </View>
          <View style={styles.buttonConfig}>
            <TouchableOpacity onPress={() => navigation.navigate('Config')}>
                <AntDesign name="setting" size={30} color="#D3E3E7" />
            </TouchableOpacity>
          </View>
        <Text style={styles.title}>@luciact</Text>

        <Image source={require('../../assets/person1.png')} style={styles.logo} />
        <Text style={styles.category}>Lucia Contente</Text>
        <Text style={styles.address}>78 curtidas por postagem</Text>
        <Text style={styles.visits}>622 novos amigos recentecemente</Text>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Avaliacoes')}
            >
                <FontAwesome name="heart" size={24} color="#D3E3E7" />
                <Text style={styles.buttonText}>Curtidas</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Chat')}
            >
                <FontAwesome name="comments" size={24} color="#D3E3E7" />
                <Text style={styles.buttonText}>Comentários</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Cardapio')}
            >
                <Octicons name="person-fill" size={24} color="#D3E3E7" />
                <Text style={styles.buttonText}>Seguidores</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    top: {
      width: Dimensions.get('window').width * 1,
      height: 450,
      borderColor: '#000',
      backgroundColor: '#022440',
      position: 'relative',
      top: 0,
      borderRadius: 20,
      padding: 20,
      alignItems: 'center',
      marginTop: -50,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: '#D3E3E7',
      marginBottom: 10,
    },
    logo: {
      width: 138,
      height: 138,
      borderRadius: 40,
      marginBottom: 10,
    },
    category: {
      fontSize: 16,
      color: '#fff',
      marginBottom: 10,
      fontWeight: 'bold'
    },
    address: {
      fontSize: 14,
      color: '#fff',
      marginBottom: 5,
    },
    visits: {
      fontSize: 14,
      color: '#fff',
      marginBottom: 5,
    },
    rating: {
      fontSize: 14,
      color: '#fff',
      marginBottom: 20,
    },
    buttonsContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      width: '100%',
      marginTop: 10,
    },
    button: {
      alignItems: 'center',
    },
    buttonConfig: {
      marginLeft: 328,
      marginTop: -30
    },
    buttonText: {
      color: '#D3E3E7',
      fontSize: 12,
      marginTop: 5,
    },
    buttonBack: {
      marginLeft: -360,
      marginTop: 30
    }
});

export default TopProfileUs;
