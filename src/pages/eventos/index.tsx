import { NavigationProp, useNavigation } from "@react-navigation/native";
import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { style } from "./styles";
import userImage from '../../assets/person1.png'; 
import { Octicons } from "@expo/vector-icons";
import { Input } from "../../components/inputs/input2";
import BottomTab from "../../components/bottomTab/bottomTab";

type RootStackParamList = {
    Interesse2: undefined;
    Perfil_us: undefined;
    EventoAval: undefined;
    EventoDetails: { eventoId: number }; 
};

const Eventos = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();
    const [text, setText] = useState('');

    const eventos = [
        { id: 1, nome: 'RisoTrio', imagem: require('../../assets/event1.png') },
        { id: 2, nome: '4 amigos', imagem: require('../../assets/event2.png') },
        { id: 3, nome: 'One jota25', imagem: require('../../assets/event3.png') },
        { id: 4, nome: 'Festival Submundo', imagem: require('../../assets/event4.png') },
        { id: 5, nome: 'Festival Submundo', imagem: require('../../assets/event5.png') },
        { id: 6, nome: 'Introdução à computação em nuvem', imagem: require('../../assets/event6.png') },
        { id: 7, nome: 'CloudWorld Tour', imagem: require('../../assets/event7.png') },
        { id: 8, nome: 'Startup Day', imagem: require('../../assets/event8.png') },
    ];

    const eventosFiltrados = eventos.filter(evento =>
        evento.nome.toLowerCase().includes(text.toLowerCase())
    );

    const proximosEventos = eventosFiltrados.filter(evento => evento.id >= 1 && evento.id <= 6);
    const eventosRecentes = eventosFiltrados.filter(evento => evento.id >= 7 && evento.id <= 8);

    const proximosEventosOrdenados = proximosEventos.sort((a, b) => a.id - b.id);
    const eventosRecentesOrdenados = eventosRecentes.sort((a, b) => a.id - b.id);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView contentContainerStyle={{ paddingBottom: 80 }} style={style.container}>
                <View style={style.Box}>
                    <View>
                        <Text style={style.Desc1}>Olá,</Text>
                        <Text style={style.Desc2}>Lúcia Contente</Text>
                    </View>
                    <Image 
                        source={userImage}
                        style={style.userImage}
                    />
                </View>

                <View style={style.boxMid}>
                    <Input 
                        style={style.input}
                        value={text}
                        onChangeText={setText}
                        placeholder='Procure por eventos:'
                        placeholderTextColor="gray"
                        IconLeft={Octicons}
                        IconLeftName="search"
                        IconColor="white"
                    />  
                </View>

                <Text style={style.Desc3}>Próximos eventos</Text>

                <ScrollView horizontal style={style.horizontalScroll}>
                    {proximosEventosOrdenados.map(evento => (
                        <TouchableOpacity 
                            key={evento.id} 
                            style={style.card} 
                            onPress={() => navigation.navigate('EventoDetails', { eventoId: evento.id })}
                        >
                            <Image source={evento.imagem} style={style.cardImage} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <Text style={style.Desc4}>Eventos recentes</Text>

                <ScrollView horizontal style={style.horizontalScroll}>
                    {eventosRecentesOrdenados.map(evento => (
                        <TouchableOpacity 
                            key={evento.id} 
                            style={style.card} 
                            onPress={() => navigation.navigate('EventoDetails', { eventoId: evento.id })}
                        >
                            <Image source={evento.imagem} style={style.cardImage} />
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </ScrollView>
            <BottomTab />
        </View>
    );
};

export default Eventos;
