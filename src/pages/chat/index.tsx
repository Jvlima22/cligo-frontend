import { View, Text, FlatList, Image, ScrollView, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Octicons } from '@expo/vector-icons';
import { Input } from "../../components/inputs/input2";
import TopRectangle from "../../components/topRectangle";
import BottomTab from "../../components/bottomTab/bottomTab";
import { useState } from "react";
import UsersHorizontal from "../../components/usersHorizontal";
import { NavigationProp, useNavigation } from "@react-navigation/native";

type RootStackParamList = {
    Interesse1: undefined;
    Interesse2: undefined;
    Login: undefined;
    Explorer: undefined;
    Recovery: undefined;
    Register: undefined;
    Mapa: undefined;
    ChatScreen: { userName: string }; 
};

const usernameColor = 'black';

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

const usersWithMessages = combinedUsers.filter(user => user.message !== '');

const Chat = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [text, setText] = useState('');
    const [filteredUsers, setFilteredUsers] = useState(usersWithMessages);

    const handleInputChange = (inputText: string) => {
        setText(inputText);
        const filtered = usersWithMessages.filter(user =>
            user.name.toLowerCase().includes(inputText.toLowerCase())
        );
        setFilteredUsers(filtered);
    };

    const navigateToChat = (userName: string) => {
        navigation.navigate('ChatScreen', { userName });
    };

    return (
        <View style={style.container}>
            <TopRectangle />
            <Text style={style.TextTop}>Chat</Text>

            {/* Input Section */}
            <View style={style.boxMid}>
                <Input 
                    style={style.input}
                    value={text}
                    onChangeText={handleInputChange}
                    placeholder='Procurar'
                    placeholderTextColor="gray"
                    IconLeft={Octicons}
                    IconLeftName="search"
                    IconColor="white"
                />
            </View>

            {/* UsersHorizontal Section */}
            <View style={style.users}>
                <UsersHorizontal usernameColor = 'black' />
            </View>

            <ScrollView>
                {/* Chat List Section */}
                <FlatList 
                    style={style.list}
                    data={filteredUsers}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => navigateToChat(item.name)} style={style.chatItem}>
                            {/* Renderizar a imagem de perfil */}
                            <Image source={item.image} style={style.userIcon} />
                            <View style={style.chatTextContainer}>
                                <Text style={style.userName}>{item.name}</Text>
                                <Text style={style.userMessage}>{item.message}</Text>
                            </View>
                        </TouchableOpacity>
                    )}
                />
            </ScrollView>
            <BottomTab />
        </View>
    );
}

export default Chat;
