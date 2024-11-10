import { ScrollView, Text, View, TouchableOpacity, Dimensions } from "react-native";
import { ButtonBack } from "../../../components/buttonBack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Rectangle from "../../../components/Rectangle";
import { useState } from "react";
import { themes } from "../../../global/themes";
import { Input } from "../../../components/inputs/input1";

type RootStackParamList = {
    Config: undefined;
};

const allInterests = [
    'Esfiharia', 'Barbearia', 'Cafeteria', 'Joalheria', 'Boutique',
    'Salão de Beleza', 'Pet Shop', 'Estúdio de Tatuagem', 'Cinema',
    'Livraria', 'Hôtel', 'Pizzaria', 'Culinária Japonesa', 'Lanchonete',
    'Churrascaria', 'Padaria', 'Pub', 'Bar', 'Fast Food', 'Festival',
    'Shopping Center', 'Biblioteca', 'Relojoaria', 'Sorveteria', 'Bistrô' 
];

const ConfigInterests = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [text, setText] = useState('');
    const [interests, setInterests] = useState<string[]>(allInterests);

    // Função para filtrar interesses enquanto o usuário digita
    const handleInputChange = (inputText: string) => {
        setText(inputText);
    };

    // Função para remover o interesse ao clicar nele
    const handleRemoveInterest = (interest: string) => {
        setInterests(prevInterests =>
            prevInterests.filter(item => item !== interest)
        );
    };

    // Filtrar interesses com base no texto digitado
    const filteredInterests = interests.filter(interest =>
        interest.toLowerCase().includes(text.toLowerCase())
    );

    return (
        <ScrollView contentContainerStyle={style.container}>
            {/* Botão Voltar */}
            <ButtonBack
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Config')}
            />

            {/* Título */}
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Interesses</Text>
            </View>

            {/* Retângulo de Fundo */}
            <View style={style.Rectangle}>
                <Rectangle width={380} height={600}>
                    {/* Campo de Input */}
                    <View style={style.inputContainer}>
                        <Input
                            style={style.input}
                            value={text}
                            onChangeText={handleInputChange}
                            placeholder='Procure seus interesses:'
                            placeholderTextColor="black"
                        />
                    </View>

                    {/* Lista de Interesses */}
                    <View style={style.buttonContainer}>
                        {filteredInterests.map((interest, index) => (
                            <TouchableOpacity
                                key={index}
                                style={style.buttonStyle}
                                onPress={() => handleRemoveInterest(interest)}
                            >
                                <Text style={style.buttonText}>{interest}</Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </Rectangle>
            </View>
        </ScrollView>
    );
};

const style = StyleSheet.create({
    container: {
        backgroundColor: '#022440',
        flexGrow: 1,
        paddingHorizontal: 20,
        paddingTop: 10,
    },
    Rectangle: {
        marginTop: -30,
        marginLeft: -40   
    },
    textContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        
    },
    textTitle: {
        color: '#EFF6FE',
        fontSize: 30,
        fontWeight: 'bold',
    },
    inputContainer: {
        width: '80%',
        marginBottom: 20,
        marginTop: 10,
        alignSelf: 'center'
    },
    input: {
        paddingHorizontal: 10,
        borderRadius: 5,
        color: 'black',
        backgroundColor: 'white',
    },
    buttonContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        marginTop: 10,
    },
    buttonStyle: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: themes.colors.white,
        borderRadius: 20,
        marginBottom: 10,
        marginRight: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    buttonText: {
        color: themes.colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});

export default ConfigInterests;
