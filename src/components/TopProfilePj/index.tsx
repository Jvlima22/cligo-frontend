// TopRectangle.js
import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'; // Pacote de ícones
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { ButtonBack } from '../buttonBack';

type RootStackParamList = {
    Cardapio: undefined;
    Chat: undefined;
    Avaliacoes: undefined;
    Mapa: undefined;
};

const TopProfilePj = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <View style={styles.top}>
          <View style={styles.buttonBack}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Mapa')}
            />
          </View>

        <Text style={styles.title}>Bar do Xexéu</Text>

        <Image source={require('../../assets/xexeu.png')} style={styles.logo} />
        <Text style={styles.category}>Refeições e Bebidas</Text>
        <Text style={styles.address}>Av. Júlio Buono, 2147</Text>
        <Text style={styles.visits}>622 novas visitas recentemente</Text>
        <Text style={styles.rating}>
            4.8 <FontAwesome name="star" size={16} color="#FFD700" /> 
            <FontAwesome name="star" size={16} color="#FFD700" />
            <FontAwesome name="star" size={16} color="#FFD700" />
            <FontAwesome name="star" size={16} color="#FFD700" />
            <FontAwesome name="star" size={16} color="#FFD700" /> Avaliações
        </Text>

        <View style={styles.buttonsContainer}>
            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Avaliacoes')}
            >
                <FontAwesome name="star" size={24} color="#D3E3E7" />
                <Text style={styles.buttonText}>Avaliações</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Chat')}
            >
                <FontAwesome name="comments" size={24} color="#D3E3E7" />
                <Text style={styles.buttonText}>Chat</Text>
            </TouchableOpacity>

            <TouchableOpacity 
                style={styles.button} 
                onPress={() => navigation.navigate('Cardapio')}
            >
                <FontAwesome name="book" size={24} color="#D3E3E7" />
                <Text style={styles.buttonText}>Cardápio</Text>
            </TouchableOpacity>
        </View>
    </View>
    );
};

const styles = StyleSheet.create({
    top: {
      width: Dimensions.get('window').width * 1,
      height: 470,
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
      marginTop: -8,
    },
    button: {
      alignItems: 'center',
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

export default TopProfilePj;
