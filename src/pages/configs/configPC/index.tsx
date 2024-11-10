import { ScrollView, Text, View, Switch } from "react-native";
import { ButtonBack } from "../../../components/buttonBack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import Rectangle from "../../../components/Rectangle";
import { useState } from "react";

type RootStackParamList = {
    Config: undefined;
};

const ConfigPC = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Estado para controlar o Switch (ligado/desligado)
    const [isPrivateAccount, setIsPrivateAccount] = useState(false);

    // Função para alternar o estado
    const toggleSwitch = () => setIsPrivateAccount(previousState => !previousState);

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Config')}
            />
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Privacidade de conta</Text>
            </View>

            <Rectangle width={340} height={330}>
                <Text style={style.text}>Conta privada</Text>
                {/* Adiciona o Switch de ligar/desligar */}
                <Switch
                    value={isPrivateAccount}
                    onValueChange={toggleSwitch}
                    trackColor={{ false: "#767577", true: "#000" }}
                    thumbColor={isPrivateAccount ? "#fff" : "#fff"}
                    ios_backgroundColor="#767577"
                    style={style.switch} 
                />

                <View style={style.infoContainer}>
                    <Text style={style.info}>
                        Quando sua conta é publica, seu perfil e publicações podem ser vistos 
                        por qualquer pessoa, dentro ou fora do Cligo, mesmo que as pessoas não 
                        tenham uma conta no Cligo.
                    </Text>
                    <Text style={style.info}>
                        Quando sua conta é privada, somente os seguidores que você aprova podem 
                        ver o que você compartilha, como fotos ou vídeos em páginas de hashtag e 
                        de localização, bem como suas listas de seguidores e de quem você segue.
                    </Text>
                </View>
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
    text: {
        fontSize: 18,
        color: '#022440',
        fontWeight: 'bold',
        top: 40,
        marginLeft: 30
    },
    switch: {
        transform: [{ scale: 0.8 }],
        marginLeft: 260,
        top: 14
    },
    infoContainer: {
        marginTop: 10,
        marginLeft: 30,
        marginRight: 30,  
    },
    info: {
        fontSize: 14,
        color: '#022440',
        top: 20,
        paddingVertical: 10,
        flexWrap: 'wrap',
        flexDirection: 'row',  
    }
});

export default ConfigPC;
