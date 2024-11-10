import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet, ScrollView, Image } from 'react-native';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import TopRectangle from '../../components/topRectangle';
import { ButtonBack } from '../../components/buttonBack';
import { BottomMenu } from '../../components/menu';

type RootStackParamList = {
    ChatScreen: { userName: string; userImage: any };
    Chat: undefined;
};

// Lista de usuários
const combinedUsers = [
    { name: 'Clayvon Silva', message: 'Melhor restaurante que fui na vida, quando vamos ir de novo?', image: require('../../assets/person3.png') },
    { name: 'Vinícius Motta', message: 'Nossa fui em um restaurante oriental com a gata ontem e foi vibes demais. Até trombei o Derek na mesa do lado...', image: require('../../assets/person7.png') },
    { name: 'Camilo Landim', message: 'Esse rolê que a gente foi estava bom demais, o bagulho é trap família!', image: require('../../assets/person12.png') },
    { name: 'Josué Lima', message: '', image: require('../../assets/person4.png') },
    { name: 'Ana Vitória', message: 'O Stand-up no Xexéu foi demais, ri até não querer mais, super recomendo!', image: require('../../assets/person13.png') },
    { name: 'Stella Roldam', message: '', image: require('../../assets/person5.png') },
    { name: 'João Amaral', message: '', image: require('../../assets/person1.png') },
    { name: 'João Sudano', message: '', image: require('../../assets/person1.png') },
    { name: 'Gabriel Sanches', message: '', image: require('../../assets/person6.png') },
    { name: 'Vinicius Paulo', message: 'Gentee, estou sabendo de um rolê muito bom, vai ser dia 5 desse mês às 21h. Bora?', image: require('../../assets/person2.png') },
];

const ChatScreen = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Obter os parâmetros da rota
    const route = navigation.getState().routes[navigation.getState().index];
    const params = route.params;

    // Verifique se os parâmetros existem antes de acessá-los
    const userName = params?.userName || '';
    const userImage = params?.userImage || require('../../assets/person1.png');

    const user = combinedUsers.find(user => user.name === userName);
    const displayedUserImage = user ? user.image : userImage; 

    const [messages, setMessages] = useState<string[]>([]);
    const [inputMessage, setInputMessage] = useState('');

    const sendMessage = () => {
        if (inputMessage.trim()) {
            setMessages(prevMessages => [...prevMessages, inputMessage]);
            setInputMessage('');
        }
    };

    return (
        <View style={style.container}>
            <TopRectangle />
            <View style={style.back}>
                <ButtonBack 
                    IconName="chevron-back"
                    IconColor="#fff"
                    onPress={() => navigation.navigate('Chat')}
                />      
            </View>

            <View style={style.menu}>
                <BottomMenu 
                        IconName="ellipsis-vertical"
                        IconColor="#fff"
                        onPress={() => navigation.navigate('Chat')}
                    /> 
            </View>

            {/* Exibir imagem e nome do usuário */}
            <View style={style.headerContainer}>
                <Image source={displayedUserImage} style={style.userImage} />
                <Text style={style.header}>{userName}</Text>
            </View>

            <ScrollView style={style.messagesContainer}>
                <FlatList
                    data={messages}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={style.messageContainer}>
                            <Text style={style.message}>{item}</Text>
                        </View>
                    )}
                />
            </ScrollView>

            <View style={style.inputContainer}>
                <TextInput
                    style={style.input}
                    value={inputMessage}
                    onChangeText={setInputMessage}
                    placeholder="Digite sua mensagem..."
                />
                <Button title="Enviar" onPress={sendMessage} />
            </View>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerContainer: {
        alignItems: 'center',
        marginBottom: 16,
        marginTop: -16,
    },
    userImage: {
        width: 90,
        height: 90,
        borderRadius: 32,
        marginBottom: 5,
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#fff',
        marginTop: -12
    },
    messagesContainer: {
        flex: 1,
    },
    messageContainer: {
        marginVertical: 4,
        padding: 10,
        backgroundColor: '#f0f0f0',
        borderRadius: 10,
    },
    message: {
        fontSize: 16,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
    },
    input: {
        flex: 1,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 20,
        padding: 10,
        marginRight: 10,
    },
    back: {
        marginLeft: -348,
        marginTop: -20,
    },
    menu: {
        marginLeft: 280,
        marginTop: -50
    }, 
});

export default ChatScreen;
