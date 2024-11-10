import { ScrollView, Text, View } from "react-native";
import { ButtonBack } from "../../../components/buttonBack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { RadioButton } from 'react-native-paper';
import Rectangle from "../../../components/Rectangle";
import { useState } from "react";

type RootStackParamList = {
    Config: undefined;
};

const ConfigCC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Estados para armazenar a seleção dos RadioButtons
    const [curtidas, setCurtidas] = useState("ocultar");
    const [comentarios, setComentarios] = useState("todos");

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Config')}
            />
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Curtidas e comentários</Text>
            </View>

            <Rectangle width={340} height={410}>
                <Text style={style.sectionTitle}>Como gerenciar as curtidas</Text>
                <RadioButton.Group onValueChange={value => setCurtidas(value)} value={curtidas}>
                    <View style={style.radioOption}>
                        <RadioButton value="todos" />
                        <Text style={style.radioText}>Ocultar as imagens</Text>
                    </View>
                </RadioButton.Group>
                <Text style={style.descriptionText}>
                    No Cligo, o número de curtidas em publicações e reels de outras contas ficará oculto. 
                    Se você quiser fazer isso no seu perfil, basta acessar as Configurações antes de compartilhar.
                </Text>

                <Text style={style.sectionTitle}>Como gerenciar os comentários</Text>
                <RadioButton.Group onValueChange={value => setComentarios(value)} value={comentarios}>
                    <View style={style.radioOption}>
                        <RadioButton value="todos" />
                        <Text style={style.radioText}>Permitir comentários de todos</Text>
                    </View>
                    <View style={style.radioOption}>
                        <RadioButton value="seguindo" />
                        <Text style={style.radioText}>Permitir comentários de pessoas que você segue</Text>
                    </View>
                    <View style={style.radioOption}>
                        <RadioButton value="nenhum" />
                        <Text style={style.radioText}>Não permitir comentários</Text>
                    </View>
                </RadioButton.Group>
                <Text style={style.descriptionText}>
                    Os novos comentários das pessoas que você não permitiu ficarão visíveis para ninguém, 
                    exceto para elas.
                </Text>
            </Rectangle>
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
        position: 'absolute',
        top: 0,
        width: '100%',
        padding: 10,
        textAlign: 'center',
        color: '#EFF6FE',
        fontSize: 30,
        fontWeight: 'bold',
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
        flexWrap: 'wrap',
        width: '80%', 
    },    
    descriptionText: {
        fontSize: 12,
        color: '#7a869a',
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,
    },
});

export default ConfigCC;
