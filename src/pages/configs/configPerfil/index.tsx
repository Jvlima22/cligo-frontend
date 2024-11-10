import { ScrollView, Text, View, Image, TextInput, TouchableOpacity, Modal } from "react-native";
import { ButtonBack } from "../../../components/buttonBack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Rectangle from "../../../components/Rectangle";
import { useState } from "react";
import * as ImagePicker from 'expo-image-picker';
import { themes } from "../../../global/themes";

type RootStackParamList = {
    Config: undefined;
};

const ConfigPerfil = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [nome, setNome] = useState("");
    const [username, setUsername] = useState("");
    const [bio, setBio] = useState("");
    const [genero, setGenero] = useState("");

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Config')}
            />
            
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Perfil</Text>
            </View>

            <View style={style.Rectangle}>
                <Rectangle width={340} height={470} />
            </View>

            <View style={style.RectangleContainer}>
                <TouchableOpacity>
                    <Image 
                        source={require('../../../assets/person1.png')} 
                        style={style.logo} 
                    />
                </TouchableOpacity>
                <Text style={style.editText}>Edite as informações do perfil</Text>

                <TextInput 
                    style={style.input}
                    value={nome}
                    onChangeText={setNome}
                    placeholder="Nome e sobrenome:"
                    placeholderTextColor="#aaa"
                />

                <TextInput 
                    style={style.input}
                    value={username}
                    onChangeText={setUsername}
                    placeholder="Nome do usuário:"
                    placeholderTextColor="#aaa"
                />

                <TextInput 
                    style={style.input}
                    value={bio}
                    onChangeText={setBio}
                    placeholder="Bio:"
                    placeholderTextColor="#aaa"
                />
                
                <TextInput 
                    style={style.input}
                    value={genero}
                    onChangeText={setGenero}
                    placeholder="Gênero:"
                    placeholderTextColor="#aaa"
                />

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Salvar mudanças</Text>
                </TouchableOpacity>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#022440',
        flexGrow: 1,
    },
    Rectangle: {
        position: 'absolute',
        marginTop: 100,
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textTitle: {
        color: '#EFF6FE',
        fontSize: 30,
        fontWeight: 'bold',
    },
    RectangleContainer: {
        alignItems: 'center',
        top: 20,
    },
    logo: {
        height: 80,
        width: 80,
        borderRadius: 40,
        marginBottom: 10,
    },
    editText: {
        color: '#022440',
        fontSize: 14,
        marginBottom: 20,
    },
    input: {
        width: '75%',
        height: 50,
        backgroundColor: themes.colors.white,
        borderRadius: 10,
        paddingHorizontal: 15,
        fontSize: 12,
        marginBottom: 15,
        color: '#022440',
        alignSelf: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        backgroundColor: '#022440',
        borderRadius: 30,
        paddingVertical: 15,
        alignItems: 'center',
        width: '75%',
        alignSelf: 'center',
    },
    buttonText: {
        color: '#EFF6FE',
        fontSize: 14,
        fontWeight: 'bold',
    },
});

export default ConfigPerfil;
