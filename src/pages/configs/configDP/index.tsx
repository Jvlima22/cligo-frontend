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

const ConfigDP = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Estados para os inputs
    const [email, setEmail] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cpfCnpj, setCpfCnpj] = useState("");
    const [aniver, setAniver] = useState("");
    const [genero, setGenero] = useState("");

    // Estado para a imagem de perfil
    const [image, setImage] = useState<string | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    // Função para selecionar uma imagem
    const pickImage = async () => {
        const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            quality: 1,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            setModalVisible(false);
        }
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Config')}
            />
            
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Dados pessoais</Text>
            </View>

            <View style={style.Rectangle}>
                <Rectangle width={340} height={536} />
            </View>

            <View style={style.RectangleContainer}>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Image 
                        source={image ? { uri: image } : require('../../../assets/person1.png')} 
                        style={style.logo} 
                    />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={style.editText}>Editar foto de perfil</Text>
                </TouchableOpacity>
                <TextInput 
                    style={style.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email:"
                    placeholderTextColor="#aaa"
                />
                <TextInput 
                    style={style.input}
                    value={telefone}
                    onChangeText={setTelefone}
                    placeholder="Telefone:"
                    placeholderTextColor="#aaa"
                />
                <TextInput 
                    style={style.input}
                    value={cpfCnpj}
                    onChangeText={setCpfCnpj}
                    placeholder="CPF/CNPJ:"
                    placeholderTextColor="#aaa"
                    keyboardType="numeric"
                />
                <TextInput 
                    style={style.input}
                    value={aniver}
                    onChangeText={setAniver}
                    placeholder="Data de nascimento:"
                    placeholderTextColor="#aaa"
                />
                <TextInput 
                    style={style.input}
                    value={genero}
                    onChangeText={setGenero}
                    placeholder="Gênero"
                    placeholderTextColor="#aaa"
                />

                <TouchableOpacity style={style.button}>
                    <Text style={style.buttonText}>Salvar mudanças</Text>
                </TouchableOpacity>
            </View>

            <Modal
                transparent={true}
                visible={modalVisible}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={style.modalOverlay}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Selecione uma nova foto</Text>
                        <TouchableOpacity onPress={pickImage} style={style.modalButton}>
                            <Text style={style.modalButtonText}>Escolher da galeria</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setModalVisible(false)} style={style.modalCancelButton}>
                            <Text style={style.modalCancelText}>Cancelar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
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
        textDecorationLine: 'underline',
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
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        width: '80%',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalButton: {
        backgroundColor: '#022440',
        padding: 15,
        borderRadius: 10,
        marginBottom: 10,
    },
    modalButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    modalCancelButton: {
        marginTop: 10,
    },
    modalCancelText: {
        color: '#022440',
    },
});

export default ConfigDP;
