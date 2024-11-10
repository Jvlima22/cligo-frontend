import { ScrollView, View, Image, TouchableOpacity, FlatList, Text } from 'react-native';
import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from 'react';
import Logo from '../../assets/Cligo.png';
import { style } from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Feather, FontAwesome6 } from '@expo/vector-icons';
import BottomTab from '../../components/bottomTab/bottomTab';
import UsersHorizontal from '../../components/usersHorizontal';

type RootStackParamList = {
    Interesse1: undefined;
    Interesse2: undefined;
    Login: undefined;
    Explorer: undefined;
    Recovery: undefined;
    Register: undefined;
    Mapa: undefined;
    Eventos: undefined;
};

const Explorer = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const users = [
        { id: 1, image: require('../../assets/person1.png') },
        { id: 2, image: require('../../assets/person2.png') },
        { id: 3, image: require('../../assets/person3.png') },
        { id: 4, image: require('../../assets/person4.png') },
        { id: 5, image: require('../../assets/person5.png') },
        { id: 6, image: require('../../assets/person6.png') },
        { id: 7, image: require('../../assets/person7.png') },
    ];

    const generateImageList = () => {
        return [
            { id: '1', name: "clayvonsilva", image: require('../../assets/person8.png'), title: "Que evento incrível!", likes: 2.679, comments: 32, date: "14/07/2022"},
            { id: '2', name: "jvlima22_", image: require('../../assets/person9.png'), title: "Prosperidade não é ter, é fazer crescer!", likes: 521, comments: 12, date: "30/08/2023"},
            { id: '3', name: "iamgabesk", image: require('../../assets/person10.png'), title: "🧑🧑‍🦲👻", likes: 65, comments: 6, date: "27/04/2024"},
            { id: '4', name: "anavi003", image: require('../../assets/person11.png'), title: "👻", likes: 30, comments: 5, date: "04/10/2023"},
        ];
    };

    // Chamada da função para gerar a lista de imagens
    const imageList = generateImageList();

    return (
        <ScrollView contentContainerStyle={style.container}>
            {/* Top Section with Logo and Icon */}
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <TouchableOpacity>
                    <Icon
                        style={style.icon}
                        name="explore"
                        size={30}
                        color="#fff"
                        onPress={() => navigation.navigate('Eventos')}
                    />
                </TouchableOpacity>
            </View>

            <UsersHorizontal usernameColor='white' />

            {/* Carrossel Vertical */}
            <FlatList
                data={imageList}
                keyExtractor={(item: { id: any; }) => item.id}
                renderItem={({ item }) => (
                    <View style={style.verticalCarouselItem}>
                        <View style={style.imageContainer}>
                            <Image source={item.image} style={style.verticalImage} />

                            {/* Container para a imagem do usuário e o nome */}
                            <View style={style.userContainer}>
                                <Image source={item.image} style={style.userImage} />
                                <Text style={style.userName}>@{item.name}</Text>
                            </View>
                        </View>

                        {/* Ícones abaixo da imagem */}
                        <View style={style.iconContainer}>
                            <Feather name="heart" size={28} color="#fff" style={style.iconStyle} />
                            <FontAwesome6 name="comment" size={28} color="#fff" style={style.iconStyle} />
                            <Feather name="send" size={28} color="#fff" style={style.iconStyle} />
                        </View>

                        {/* Detalhes da postagem */}
                        <View style={style.postDetails}>
                            <Text style={style.likes}>{item.likes} Curtidas</Text>

                            {/* Título formatado como @user + título */}
                            <Text style={style.title}>@{item.name} {item.title}</Text>
                            <Text style={style.comments}>{item.comments} Comentários</Text>
                            <Text style={style.date}>{item.date}</Text>
                        </View>
                    </View>
                )}
                showsVerticalScrollIndicator={false}
                style={style.verticalCarousel}
            />

            <BottomTab/>
        </ScrollView>
    );
};

export default Explorer;
