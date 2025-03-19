import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, TouchableOpacity, Alert, Modal, TouchableWithoutFeedback } from "react-native";
import { style } from "./styles";
import React, { useState, useEffect } from "react";
import { ButtonNext } from "../../../components/buttonNext";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";

type RootStackParamList = {
    Explorer: undefined;
    Login: undefined;
};

// Mapeamento de interesses para tipo_de_estabelecimento e tipo_de_bar
const interestMappings: { [key: string]: { tipo_de_estabelecimento: string, tipo_de_bar: string } } = {
    "Padaria": { tipo_de_estabelecimento: "Padaria", tipo_de_bar: "Padaria" },
    "Bar": { tipo_de_estabelecimento: "Bar", tipo_de_bar: "Bar" },
    "Churrascaria": { tipo_de_estabelecimento: "Churrascaria", tipo_de_bar: "Churrascaria" },
    "Culinária Japonesa": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Culinária Japonesa" },
    "Vinícola": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Vinícola" },
    "Fast Food": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Fast Food" },
    "Cervejaria": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Cervejaria" },
    "Pub": { tipo_de_estabelecimento: "Bar", tipo_de_bar: "Pub" },
    "Pizzaria": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Pizzaria" },
    "Cafeteria": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Cafeteria" },
    "Hotel": { tipo_de_estabelecimento: "Hotel", tipo_de_bar: "Hotel" },
    "Culinária Mexicana": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Culinária Mexicana" },
    "Lanchonete": { tipo_de_estabelecimento: "Lanchonete", tipo_de_bar: "Lanchonete" },
    "Mercado": { tipo_de_estabelecimento: "Comércio", tipo_de_bar: "Mercado" },
    "Cinema": { tipo_de_estabelecimento: "Entretenimento", tipo_de_bar: "Cinema" },
    "Hospital": { tipo_de_estabelecimento: "Saúde", tipo_de_bar: "Hospital" },
    "Shopping Center": { tipo_de_estabelecimento: "Comércio", tipo_de_bar: "Shopping Center" },
    "Festival": { tipo_de_estabelecimento: "Entretenimento", tipo_de_bar: "Festival" },
    "Livraria": { tipo_de_estabelecimento: "Comércio", tipo_de_bar: "Livraria" },
    "Sorveteria": { tipo_de_estabelecimento: "Comércio", tipo_de_bar: "Sorveteria" },
    "Parque": { tipo_de_estabelecimento: "Entretenimento", tipo_de_bar: "Parque" },
    "Relojoaria": { tipo_de_estabelecimento: "Comércio", tipo_de_bar: "Relojoaria" },
    "Biblioteca": { tipo_de_estabelecimento: "Cultura", tipo_de_bar: "Biblioteca" },
    "Bistrô": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Bistrô" },
    "Culinária Oriental": { tipo_de_estabelecimento: "Restaurante", tipo_de_bar: "Culinária Oriental" },
    "Chocolateria": { tipo_de_estabelecimento: "Comércio", tipo_de_bar: "Chocolateria" },
};

const Interesse1 = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);
    const [token, setToken] = useState<string | null>(null);
    const [message] = useState<string>("");
    const [modalVisible, setModalVisible] = useState<boolean>(false);

    // Função para obter o token do AsyncStorage
    const getToken = async () => {
        try {
            const storedToken = await AsyncStorage.getItem("userToken");
            if (storedToken) {
                setToken(storedToken);
                console.log("Token recuperado:", storedToken);
            }
        } catch (error) {
            console.error("Erro ao obter o token:", error);
        }
    };

    useEffect(() => {
        getToken();
    }, []);

    // Função para lidar com a seleção de interesses
    const handleSelectInterest = (interest: string) => {
        setSelectedInterests((prevInterests) => {
            if (prevInterests.includes(interest)) {
                return prevInterests.filter((item) => item !== interest);
            } else if (prevInterests.length < 20) {
                return [...prevInterests, interest];
            } else {
                Alert.alert("Atenção", "Você pode selecionar no máximo 20 interesses.");
                return prevInterests;
            }
        });
    };

    // Função para enviar os interesses ao backend
    const handleSubmitInterests = async () => {
        if (!token) {
            Alert.alert("Erro", "Você precisa estar logado para salvar seus interesses.");
            return;
        }
    
        console.log("Token sendo enviado:", token); // Verifique o token
    
        try {
            const payload = selectedInterests.map((interest) => ({
                tipo_de_estabelecimento: interestMappings[interest]?.tipo_de_estabelecimento || "Restaurante",
                tipo_de_bar: interestMappings[interest]?.tipo_de_bar || "Restaurante"
            }));
    
            const response = await axios.post(
                'http://192.168.15.25:8080/api/interesses',
                payload,
                {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log("Interesses enviados com sucesso!", response.data);
            navigation.navigate('Explorer');
        } catch (error: any) {
            if (error.response) {
                console.error("Erro do servidor:", error.response.data);
                
                if (error.response.status === 403) { // Token expirado
                    Alert.alert("Erro", "Seu token expirou. Por favor, faça login novamente.");
                    navigation.navigate('Login'); // Redireciona para a tela de login
                } else {
                    Alert.alert("Erro", `Ocorreu um erro: ${error.response.data.message}`);
                }
            } else {
                console.error("Erro ao enviar interesses:", error);
                Alert.alert("Erro", "Ocorreu um erro ao salvar seus interesses. Tente novamente.");
            }
        }
    };    

    return (
        <ScrollView style={style.container}>
            <View style={style.Box}>
                <Text style={style.Desc1}>Queremos te conhecer!</Text>
                <Text style={style.Desc2}>Personalize seu</Text>
                <Text style={style.Desc3}>Perfil</Text>
                <Text style={style.Desc4}>Escolha até 20 interesses:</Text>

                <View style={style.buttonContainer}>
                    {Object.keys(interestMappings).map((interest) => (
                        <TouchableOpacity
                            key={interest}
                            style={[
                                style.buttonStyle,
                                selectedInterests.includes(interest) && { backgroundColor: "#4894FE" },
                            ]}
                            onPress={() => handleSelectInterest(interest)}
                        >
                            <Text style={style.buttonText}>{interest}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={style.buttonNext}>
                    <ButtonNext IconName="navigate-next" IconColor="#022440" onPress={handleSubmitInterests} />
                </View>

                {/* Modal de Sucesso */}
                <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => setModalVisible(false)}
                >
                    <TouchableWithoutFeedback onPress={() => setModalVisible(false)}>
                        <View style={style.modalOverlay}>
                            <View style={style.modalContent}>
                                <Text style={style.modalText}>{message}</Text>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
            </View>
        </ScrollView>
    );
};

export default Interesse1;
