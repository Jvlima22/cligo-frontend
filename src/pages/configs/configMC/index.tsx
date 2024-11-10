import { ScrollView, Text, View } from "react-native";
import { ButtonBack } from "../../../components/buttonBack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { RadioButton, Checkbox } from 'react-native-paper';
import Rectangle from "../../../components/Rectangle";
import { useState } from "react";

type RootStackParamList = {
    Config: undefined;
};

const ConfigMC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [marcacoes, setMarcacoes] = useState("todos");
    const [mencoes, setMencoes] = useState("todos");
    const [aprovarMarcacoes, setAprovarMarcacoes] = useState(false); 
    
    return (
        <ScrollView contentContainerStyle={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Config')}
            />
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Marcações e menções</Text>
            </View>

            <Rectangle width={340} height={640}>
                <Text style={style.sectionTitle}>Quem pode marcar você</Text>
                <RadioButton.Group onValueChange={value => setMarcacoes(value)} value={marcacoes}>
                    <View style={style.radioOption}>
                        <RadioButton value="todos" />
                        <Text style={style.radioText}>Permitir marcações de todos</Text>
                    </View>
                    <View style={style.radioOption}>
                        <RadioButton value="seguindo" />
                        <Text style={style.radioText}>Permitir marcações de pessoas que você segue</Text>
                    </View>
                    <View style={style.radioOption}>
                        <RadioButton value="nenhum" />
                        <Text style={style.radioText}>Não permitir marcações</Text>
                    </View>
                </RadioButton.Group>
                <Text style={style.descriptionText}>
                    Escolha quem pode marcar você nas fotos e nas publicações. As marcações de pessoas que você segue não requerem aprovação manual.
                </Text>

                <Text style={style.sectionTitle}>Como gerenciar marcações</Text>
                <View style={style.radioOption}>
                    <Checkbox
                        status={aprovarMarcacoes ? 'checked' : 'unchecked'}
                        onPress={() => setAprovarMarcacoes(!aprovarMarcacoes)}
                    />
                    <Text style={style.radioText}>Aprovar marcações manualmente</Text>
                </View>
                <Text style={style.descriptionText}>
                    Se essa opção estiver ativa, todas as marcações precisam da sua aprovação antes de aparecerem no seu perfil.
                </Text>

                <Text style={style.sectionTitle}>Quem pode @mencionar você</Text>
                <RadioButton.Group onValueChange={value => setMencoes(value)} value={mencoes}>
                    <View style={style.radioOption}>
                        <RadioButton value="todos" />
                        <Text style={style.radioText}>Permitir menções de todos</Text>
                    </View>
                    <View style={style.radioOption}>
                        <RadioButton value="seguindo" />
                        <Text style={style.radioText}>Permitir menções de pessoas que você segue</Text>
                    </View>
                    <View style={style.radioOption}>
                        <RadioButton value="nenhum" />
                        <Text style={style.radioText}>Não permitir menções</Text>
                    </View>
                </RadioButton.Group>
                <Text style={style.descriptionText}>
                    Escolha quem pode mencionar você com @ nas publicações. Quando essa opção está desativada, ninguém pode usar @ para mencioná-lo.
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

export default ConfigMC;
