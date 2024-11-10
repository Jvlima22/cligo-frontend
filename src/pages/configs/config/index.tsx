import { ScrollView, Text, View, TouchableOpacity, Alert } from "react-native";
import { ButtonBack } from "../../../components/buttonBack";
import { NavigationProp, useNavigation } from "@react-navigation/native";
import { StyleSheet } from "react-native";
import { Ionicons } from '@expo/vector-icons';

type RootStackParamList = {
    Perfil_us: undefined;
    Seguranca: undefined; 
    Ajuda: undefined;
    Sobre: undefined;
    ConfigPerfil: undefined;
    ConfigDP: undefined;
    ConfigInterests: undefined;
    ConfigPC: undefined;
    ConfigMC: undefined;
    ConfigCC: undefined;
    ConfigAcess: undefined;
};

const Config = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    // Função para mostrar o popup de confirmação com mensagens personalizadas
    const showConfirmationDialog = (action: string) => {
        if (action === 'adicionarConta') {
            // Especificando um alerta de confirmação para o botão "Adicionar conta"
            Alert.alert(
                'Adicionar nova conta',
                'Tem certeza que deseja adicionar uma nova conta? Você será redirecionado para a segurança.',
                [
                    {
                        text: 'Não',
                        style: 'cancel',
                    },
                    {
                        text: 'Sim',
                        onPress: () => handleAction(action), // Ação a ser realizada se o usuário confirmar
                    },
                ],
                { cancelable: true }
            );
        } else {
            // Para os outros botões (Desconectar conta e Desconectar todas as contas)
            Alert.alert(
                'Confirmação',
                'Tem certeza que deseja realizar essa ação?',
                [
                    {
                        text: 'Não',
                        style: 'cancel',
                    },
                    {
                        text: 'Sim',
                        onPress: () => handleAction(action),
                    },
                ],
                { cancelable: true }
            );
        }
    };

    // Função que será chamada quando o usuário confirmar
    const handleAction = (action: string) => {
        if (action === 'adicionarConta') {
            navigation.navigate('Seguranca');
        } else if (action === 'desconectarConta') {
            navigation.navigate('Ajuda');
        } else if (action === 'desconectarTodas') {
            navigation.navigate('Sobre');
        }
    };

    return (
        <ScrollView contentContainerStyle={style.container}>
            <ButtonBack 
                IconName="chevron-back"
                IconColor="#fff"
                onPress={() => navigation.navigate('Perfil_us')}
            />
            <View style={style.textContainer}>
                <Text style={style.textTitle}>Configurações</Text>
            </View>

            {/* Substituindo os inputs por botões */}
            <View style={style.input1}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ConfigDP')}>
                    <Text style={style.buttonText}>Dados pessoais</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#022440" />
                </TouchableOpacity>
            </View>

            <View style={style.input2}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ConfigPerfil')}>
                    <Text style={style.buttonText}>Perfil</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#022440" />
                </TouchableOpacity>
            </View>

            <View style={style.input2}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ConfigInterests')}>
                    <Text style={style.buttonText}>Interesses</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#022440" />
                </TouchableOpacity>
            </View>

            <View style={style.input2}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ConfigPC')}>
                    <Text style={style.buttonText}>Privacidade de conta</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#022440" />
                </TouchableOpacity>
            </View>

            <View style={style.input2}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ConfigMC')}>
                    <Text style={style.buttonText}>Marcações e Menções</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#022440" />
                </TouchableOpacity>
            </View>

            <View style={style.input2}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ConfigCC')}>
                    <Text style={style.buttonText}>Curtidas e comentários</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#022440" />
                </TouchableOpacity>
            </View>

            <View style={style.input2}>
                <TouchableOpacity style={style.button} onPress={() => navigation.navigate('ConfigAcess')}>
                    <Text style={style.buttonText}>Acessibilidade</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#022440" />
                </TouchableOpacity>
            </View>

            {/* Botões de redirecionamento com confirmação */}
            <View style={style.redirectContainer}>
                <TouchableOpacity style={style.redirectItem} onPress={() => showConfirmationDialog('adicionarConta')}>
                    <Text style={style.redirectText}>Adicionar conta</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#EFF6FE" style={style.icon1} />
                </TouchableOpacity>

                <TouchableOpacity style={style.redirectItem} onPress={() => showConfirmationDialog('desconectarConta')}>
                    <Text style={style.redirectText}>Desconectar conta</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#EFF6FE" style={style.icon2} />
                </TouchableOpacity>

                <TouchableOpacity style={style.redirectItem} onPress={() => showConfirmationDialog('desconectarTodas')}>
                    <Text style={style.redirectText}>Desconectar todas as contas</Text>
                    <Ionicons name="chevron-forward-sharp" size={24} color="#EFF6FE" style={style.icon3} />
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
    input1: {
        marginTop: 40,
        paddingHorizontal: 20, 
    },
    input2: {
        marginTop: 10,
        paddingHorizontal: 20, 
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        paddingVertical: 15,
        paddingHorizontal: 20,
        borderRadius: 10,
        marginBottom: 2,
        alignItems: 'center',
    },
    buttonText: {
        fontWeight: 'bold', 
        fontSize: 16,
        color: '#022440',
    },
    redirectContainer: {
        marginTop: 20,
        paddingHorizontal: 30,
    },
    redirectItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
    },
    redirectText: {
        color: '#EFF6FE',
        fontSize: 16,
        marginLeft: 10,
    },
    icon1: {
        marginLeft: 196
    },
    icon2: {
        marginLeft: 173
    },
    icon3: {
        marginLeft: 100
    }
});

export default Config;
