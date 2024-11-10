import { ScrollView, Text, View, Switch, TouchableOpacity, Modal, FlatList } from "react-native";
import { ButtonBack } from "../../../components/buttonBack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import Rectangle from "../../../components/Rectangle";
import { useState } from "react";

type RootStackParamList = {
    Config: undefined;
};

const idiomasDisponiveis = [
    { label: "Português", value: "portugues" },
    { label: "Inglês", value: "ingles" },
    { label: "Espanhol", value: "espanhol" },
    // Adicione outros idiomas conforme necessário
];

const ConfigMC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Estados para armazenar a seleção dos RadioButtons, dos Switches e do Modal
    const [legendaAtivada, setLegendaAtivada] = useState(false);
    const [idioma, setIdioma] = useState("portugues");
    const [modoEscuro, setModoEscuro] = useState("ativado");
    const [modalVisible, setModalVisible] = useState(false);

    // Função para definir o idioma e fechar o modal
    const selecionarIdioma = (novoIdioma: string) => {
        setIdioma(novoIdioma);
        setModalVisible(false);
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Config')}
            />
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Acessibilidade</Text>
            </View>

            <Rectangle width={340} height={350}>
                <View style={style.optionContainer}>
                    <Text style={style.optionTitle}>Legenda</Text>
                    <Switch 
                        value={legendaAtivada} 
                        onValueChange={() => setLegendaAtivada(!legendaAtivada)} 
                    />
                </View>
                {legendaAtivada && (
                    <Text style={style.descriptionText}>
                        As publicações e vídeos que você assistir exibirão legendas geradas automaticamente.
                    </Text>
                )}

                <TouchableOpacity onPress={() => setModalVisible(true)} style={style.optionContainerColumn}>
                    <Text style={style.optionTitle}>Idioma</Text>
                    <Text style={style.optionValue}>
                        {idiomasDisponiveis.find(item => item.value === idioma)?.label || "Selecionar idioma"}
                    </Text>
                </TouchableOpacity>

                <Text style={style.sectionTitle}>Modo escuro</Text>
                <RadioButton.Group onValueChange={value => setModoEscuro(value)} value={modoEscuro}>
                    <View style={style.radioOption}>
                        <RadioButton value="ativado" />
                        <Text style={style.radioText}>Ativado</Text>
                    </View>
                    <View style={style.radioOption}>
                        <RadioButton value="desativado" />
                        <Text style={style.radioText}>Desativado</Text>
                    </View>
                </RadioButton.Group>
                <Text style={style.descriptionText}>
                    Você pode mudar a cor de fundo do aplicativo em qualquer momento.
                </Text>
            </Rectangle>

            {/* Modal para selecionar idioma */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => setModalVisible(false)}
            >
                <View style={style.modalContainer}>
                    <View style={style.modalContent}>
                        <Text style={style.modalTitle}>Selecione um idioma</Text>
                        <FlatList
                            data={idiomasDisponiveis}
                            keyExtractor={(item) => item.value}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={style.modalOption}
                                    onPress={() => selecionarIdioma(item.value)}
                                >
                                    <Text style={style.modalOptionText}>{item.label}</Text>
                                </TouchableOpacity>
                            )}
                        />
                        <TouchableOpacity
                            onPress={() => setModalVisible(false)}
                            style={style.modalCloseButton}
                        >
                            <Text style={style.modalCloseButtonText}>Cancelar</Text>
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
    textContainer: {
        backgroundColor: '#022440',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    textTitle: {
        color: '#EFF6FE',
        fontSize: 30,
        fontWeight: 'bold',
    },
    optionContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 30,
    },
    optionContainerColumn: {
        marginTop: 20,
        paddingHorizontal: 30,
    },
    optionTitle: {
        fontSize: 16,
        color: '#022440',
        fontWeight: 'bold',
    },
    optionValue: {
        fontSize: 14,
        color: '#022440',
        marginTop: 5,
    },
    sectionTitle: {
        fontSize: 16,
        color: '#022440',
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 30,
    },
    radioOption: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        marginLeft: 30,
    },
    radioText: {
        fontSize: 14,
        color: '#022440',
        marginLeft: 8,
    },    
    descriptionText: {
        fontSize: 12,
        color: '#7a869a',
        marginTop: 10,
        marginHorizontal: 30,
    },
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: 'white',
        width: '80%',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    modalOption: {
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    modalOptionText: {
        fontSize: 16,
        color: '#022440',
    },
    modalCloseButton: {
        marginTop: 20,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#022440',
    },
    modalCloseButtonText: {
        color: '#EFF6FE',
        fontSize: 16,
    },
});

export default ConfigMC;
